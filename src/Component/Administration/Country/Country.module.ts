import { Module } from '@nestjs/common';
import { CountryService } from './Country.service';
import { CountryController } from './Country.controller';
import { countryProviders } from './Country.provider';
import { CommonModule } from '@Common/Common.module';

@Module({
  imports: [CommonModule],
  controllers: [CountryController],
  providers: [CountryService, ...countryProviders]
})
export class CountryModule { }
