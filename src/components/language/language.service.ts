import { Injectable } from '@nestjs/common';

@Injectable()
export class LanguageService {
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
