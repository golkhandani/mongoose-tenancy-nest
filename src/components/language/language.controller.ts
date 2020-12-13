import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LanguageService } from './language.service';
import { TransformPlainToClass } from 'class-transformer';
import { Country } from '../country/entities/country.schema';
import { Language } from './entities/language.entity';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

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
