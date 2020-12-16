import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  Language,
  LanguageDocument
} from './Schema/Language.schema';

@Injectable()
export class LanguageService {

  constructor(
    @Inject('LanguageModel')
    private readonly languageModel: Model<LanguageDocument>
  ) { }

  async create() {
    const language: Partial<Language> = {
      isoCode: {
        primary: 'fa',
        secondary: 'fas'
      },
      name: 'farsi',
      nativeName: 'فارسی'
    }
    return await this.languageModel.create(language)
  }

  findAll() {
    return `This action returns all language`;
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
