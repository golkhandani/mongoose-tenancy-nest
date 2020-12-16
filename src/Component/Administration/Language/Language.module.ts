import { Module } from '@nestjs/common';
import { CommonModule } from '@Common/Common.module';
import { LanguageController } from './Language.controller';
import { LanguageService } from './Language.service';
import { languageProviders } from './Language.provider';


@Module({
  imports: [CommonModule],
  controllers: [
    LanguageController
  ],
  providers: [
    LanguageService,
    ...languageProviders
  ]
})
export class LanguageModule { }
