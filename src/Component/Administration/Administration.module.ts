import { Module } from '@nestjs/common';
import { CountryModule } from '@Administration/Country/Country.module';
import { LanguageModule } from '@Application/Component/Administration/Language/language.module';

const components = [
    CountryModule,
    LanguageModule
];

@Module({
    imports: components,
    exports: components
})
export class AdministrationModule { };