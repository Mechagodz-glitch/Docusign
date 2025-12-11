import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { DocumentStatus } from '@prisma/client';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  list(workspaceId: string) {
    return this.prisma.document.findMany({ where: { workspaceId }, include: { recipients: true, activities: true } });
  }

  get(id: string) {
    return this.prisma.document.findUnique({ where: { id }, include: { recipients: true, activities: true } });
  }

  async create(workspaceId: string, ownerId: string, payload: any) {
    const document = await this.prisma.document.create({
      data: {
        title: payload.title,
        workspaceId,
        ownerId,
        content: payload.content || {},
        variables: payload.variables || {},
        isTemplate: payload.isTemplate ?? false,
        status: payload.status || DocumentStatus.draft,
        recipients: { create: payload.recipients || [] },
      },
      include: { recipients: true },
    });
    await this.logActivity(document.id, 'created', `Document ${document.title} created`);
    return document;
  }

  async update(id: string, payload: any) {
    const document = await this.prisma.document.update({
      where: { id },
      data: {
        title: payload.title,
        content: payload.content,
        variables: payload.variables,
        isTemplate: payload.isTemplate,
        status: payload.status,
        recipients: {
          deleteMany: {},
          create: payload.recipients || [],
        },
      },
      include: { recipients: true },
    });
    await this.logActivity(id, 'updated', `Document ${document.title} updated`);
    return document;
  }

  async send(documentId: string) {
    const recipients = await this.prisma.recipient.findMany({ where: { documentId } });
    for (const rec of recipients) {
      await this.prisma.recipient.update({ where: { id: rec.id }, data: { signingUrl: `https://sign.local/${uuid()}` } });
    }
    await this.prisma.document.update({ where: { id: documentId }, data: { status: DocumentStatus.sent } });
    await this.logActivity(documentId, 'sent', 'Document sent to recipients');
    return { ok: true };
  }

  async sign(signingUrl: string, payload: { name?: string }) {
    const recipient = await this.prisma.recipient.findFirst({ where: { signingUrl } });
    if (!recipient) return null;
    await this.prisma.document.update({
      where: { id: recipient.documentId },
      data: { status: DocumentStatus.completed },
    });
    await this.logActivity(recipient.documentId, 'signed', `${recipient.name || payload.name || 'Recipient'} signed`);
    return { ok: true };
  }

  private logActivity(documentId: string, type: string, message: string) {
    return this.prisma.activity.create({ data: { documentId, type, message } });
  }
}
