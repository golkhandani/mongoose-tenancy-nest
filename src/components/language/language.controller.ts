import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Post()
  create() {
    return this.languageService.create();
  }

  @Get()
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
