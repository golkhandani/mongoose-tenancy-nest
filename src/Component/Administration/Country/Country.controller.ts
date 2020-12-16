import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CountryService } from './Country.service';
import { CreateCountryDto } from './DTO/create-country.dto';

@Controller(CountryController.path)
export class CountryController {
  public static path = "Country";
  constructor(private readonly countryService: CountryService) { }

  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create();
  }

  @Get()
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
