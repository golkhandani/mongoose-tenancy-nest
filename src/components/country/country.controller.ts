import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { TransformPlainToClass } from 'class-transformer';
import { Country } from './entities/country.schema';
// import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @TransformPlainToClass(Country)
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create();
  }

  @Get()
  @TransformPlainToClass(Country)
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
