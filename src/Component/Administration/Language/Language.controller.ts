import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TransformPlainToClass } from 'class-transformer';
import { LanguageService } from './Language.service';
import { Language } from './Schema/Language.schema';

@Controller('Language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) { }

  @Post()
  @TransformPlainToClass(Language)
  create() {
    return this.languageService.create();
  }

  @Get()
  @TransformPlainToClass(Language)
  findAll() {
    return this.languageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageService.remove(+id);
  }
}
