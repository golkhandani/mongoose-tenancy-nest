import { Module } from '@nestjs/common';
import { CommonModule } from '@Common/Common.module';
import { LanguageController } from './Language.controller';
import { LanguageService } from './Language.service';
import { languageProviders } from './Language.provider';
import { DatabaseModule } from '@Application/Common/Database/Database.module';
import { LanguageDefinition } from './Schema/Language.schema';


@Module({
  imports: [
    CommonModule
  ],
  controllers: [
    LanguageController
  ],
  providers: [
    LanguageService,
    DatabaseModule.ModelProvider(LanguageDefinition)
    //...languageProviders
  ]
})
export class LanguageModule { }
