import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { countryProviders } from './country.provider';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CountryController],
  providers: [CountryService, ...countryProviders]
})
export class CountryModule {}
