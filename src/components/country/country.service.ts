import { Inject, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { Model } from 'mongoose';
import { Country, CountryDocument } from './entities/country.schema';

@Injectable()
export class CountryService {
  constructor(
    @Inject('CountryModel') private readonly countryModel: Model<CountryDocument>
  ) {
  }
  
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
      altSpellings:[
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
        {
          isoCode: {
            primary: "fa",
            secondary: "fas"
          },
          name: "Persian (Farsi)",
          nativeName: "فارسی"
        }
      ],
      translations:  {
        "de": "Iran",
        "es": "Iran",
        "fr": "Iran",
        "ja": "イラン・イスラム共和国",
        "it": null,
        "br": "Irã",
        "pt": "Irão",
        "nl": "Iran",
        "hr": "Iran",
        "fa": "ایران"
      },
      flag: "https://restcountries.eu/data/irn.svg"
    }

    const result = await this.countryModel.create(country);
    return result;
  }

  async findAll() {
    const result = await this.countryModel.findOne();
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  // update(id: number, updateCountryDto: UpdateCountryDto) {
  //   return `This action updates a #${id} country`;
  // }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
