import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private workspaces: WorkspacesService) {}

  @Post()
  create(@Body() body: { userId: string; name: string }) {
    return this.workspaces.createWorkspace(body.userId, body.name);
  }

  @Get()
  list(@Body() body: { userId: string }) {
    return this.workspaces.listWorkspaces(body.userId);
  }
}
