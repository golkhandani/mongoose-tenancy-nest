import { Inject, Injectable } from '@nestjs/common';
import { plainToClass, TransformPlainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import { Country, CountryDocument } from './entities/country.schema';

@Injectable()
export class CountryService {
  constructor(
    @Inject('CountryModel') private readonly countryModel: Model<CountryDocument>
  ) { }

  async create() {
    const country: Partial<Country> = {
      name: "Iran",
      nativeName: "ایران",
      alphaCode: {
        primary: 'IR',
        secondary: 'IRN'
      },
      callingCode: [
        "98"
      ],
      capital: "Tehran",
      altSpellings: [
        "IR",
        "Islamic Republic of Iran",
        "Jomhuri-ye Eslāmi-ye Irān"
      ],
      region: 'Asia',
      geoLocation: {
        lat: 32,
        long: 53
      },
      timezones: [
        "UTC+03:30"
      ],
      numericCode: "364",
      currencies: [
        {
          code: "IRR",
          name: "Iranian rial",
          symbol: "﷼"
        }
      ],
      languages: [
        "a0a83ef8-a79e-44e9-baa6-57aa88bb2b96"
      ],
      translations: {
        "de": "Iran",
      },
      flag: "https://restcountries.eu/data/irn.svg"
    }


    const result = await this.countryModel.create(country);
    return result.toObject()
  }
  @TransformPlainToClass(Country)
  async findAll() {
    const result = await this.countryModel.find().lean();

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
