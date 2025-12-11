import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { MembershipRole } from '@prisma/client';

@Injectable()
export class WorkspacesService {
  constructor(private prisma: PrismaService) {}

  async createWorkspace(userId: string, name: string) {
    const workspace = await this.prisma.workspace.create({ data: { name } });
    await this.prisma.membership.create({
      data: { userId, workspaceId: workspace.id, role: MembershipRole.OWNER },
    });
    return workspace;
  }

  listWorkspaces(userId: string) {
    return this.prisma.workspace.findMany({
      where: { memberships: { some: { userId } } },
      include: { memberships: true },
    });
  }
}
