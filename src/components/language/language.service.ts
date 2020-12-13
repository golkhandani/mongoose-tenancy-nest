import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { languageDocument } from './entities/language.entity';

@Injectable()
export class LanguageService {

  constructor(
    @Inject('LanguageModel') private readonly languageModel: Model<languageDocument>
  ) {}

  create() {
    return 'This action adds a new language';
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
