import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { UpsertDocumentDto } from './dto';

@Controller('documents')
export class DocumentsController {
  constructor(private documents: DocumentsService) {}

  @Get()
  list(@Query('workspaceId') workspaceId: string) {
    return this.documents.list(workspaceId);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.documents.get(id);
  }

  @Post()
  create(@Query('workspaceId') workspaceId: string, @Body() body: UpsertDocumentDto & { ownerId: string }) {
    return this.documents.create(workspaceId, body.ownerId, body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpsertDocumentDto) {
    return this.documents.update(id, body);
  }

  @Post(':id/send')
  send(@Param('id') id: string) {
    return this.documents.send(id);
  }
}
