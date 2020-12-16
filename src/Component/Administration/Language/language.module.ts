import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { CommonModule } from '@Common/Common.module';
import { languageProviders } from './language.provider';

@Module({
  imports: [CommonModule],
  controllers: [LanguageController],
  providers: [LanguageService, ...languageProviders]
})
export class LanguageModule { }
