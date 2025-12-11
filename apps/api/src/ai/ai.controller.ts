import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { PrismaService } from '../common/prisma.service';

@Controller('ai')
export class AiController {
  constructor(private ai: AiService, private prisma: PrismaService) {}

  @Post('summarize-document')
  async summarize(@Body() body: { documentId: string }) {
    const doc = await this.prisma.document.findUnique({ where: { id: body.documentId } });
    const content = JSON.stringify(doc?.content || {});
    const summary = await this.ai.summarizeDocument(content);
    return { summary };
  }

  @Post('ask-about-documents')
  async ask(@Body() body: { question: string; documentIds: string[] }) {
    const docs = await this.prisma.document.findMany({ where: { id: { in: body.documentIds } } });
    const mapped = docs.map((d) => ({ id: d.id, title: d.title, content: JSON.stringify(d.content) }));
    const answer = await this.ai.answerQuestionOverDocuments(body.question, mapped);
    return { answer };
  }
}
