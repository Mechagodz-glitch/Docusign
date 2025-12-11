import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  async summarizeDocument(documentText: string): Promise<string> {
    return `Summary (mock): ${documentText.slice(0, 140)}...`;
  }

  async answerQuestionOverDocuments(question: string, docs: Array<{ id: string; title: string; content: string }>): Promise<string> {
    const titles = docs.map((d) => d.title).join(', ');
    return `Answer (mock) to "${question}" based on docs: ${titles}`;
  }
}
