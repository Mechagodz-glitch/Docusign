import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DocumentStatus, RecipientRole } from '@prisma/client';

class RecipientInput {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsEnum(RecipientRole)
  role: RecipientRole;
}

export class UpsertDocumentDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  content?: Record<string, any>;

  @IsOptional()
  variables?: Record<string, any>;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RecipientInput)
  recipients: RecipientInput[];

  @IsOptional()
  @IsBoolean()
  isTemplate?: boolean;

  @IsOptional()
  @IsEnum(DocumentStatus)
  status?: DocumentStatus;
}
