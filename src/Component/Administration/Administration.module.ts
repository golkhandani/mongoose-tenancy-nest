import { Module } from '@nestjs/common';
import { CountryModule } from '@Administration/Country/Country.module';
import { LanguageModule } from '@Administration/Language/Language.module';

const components = [
    CountryModule,
    LanguageModule
];

@Module({
    imports: components,
    exports: components
})
export class AdministrationModule { };