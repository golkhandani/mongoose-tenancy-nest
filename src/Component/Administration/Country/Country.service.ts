import { Inject, Injectable } from '@nestjs/common';
import { ReturnType } from '@Application/Common/Helper';
import { Continent, Country, CountryModel, CountryModelName } from './Schema/Country.schema';


@Injectable()
export class CountryService {
  constructor(
    @Inject(CountryModelName) private readonly countryModel: CountryModel
  ) { }

  @ReturnType(Country)
  async create() {
    const country: Partial<Country> = {
      Name: "Iran",
      NativeName: "ایران",
      AlphaCode: {
        Primary: 'IR',
        Secondary: 'IRN'
      },
      CallingCode: [
        "98"
      ],
      Capital: "Tehran",
      AltSpellings: [
        "IR",
        "Islamic Republic of Iran",
        "Jomhuri-ye Eslāmi-ye Irān"
      ],
      Region: Continent.AFRICA,
      GeoLocation: {
        Lat: 32,
        Lng: 53
      },
      Timezones: [
        "UTC+03:30"
      ],
      NumericCode: "364",
      Currencies: [
        {
          Code: "IRR",
          Name: "Iranian rial",
          Symbol: "﷼"
        }
      ],
      Languages: [
        "a0a83ef8-a79e-44e9-baa6-57aa88bb2b96"
      ],
      Translations: {
        "de": "Iran",
      },
      Flag: "https://restcountries.eu/data/irn.svg"
    }


    const result = await this.countryModel.create(country);



    return result;
  }

  @ReturnType(Country)
  async findAll() {
    const result =
      await this.countryModel
        .findById("7d187bbf-2c83-4813-b498-74fb09a5c2c2");
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
