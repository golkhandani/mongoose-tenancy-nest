
import { Currency, CurrencySchema } from './Currency.schema';
import { Exclude, Expose, Type } from 'class-transformer';

import { MongooseBaseSchema, MongooseDocument, MongooseModel, MongooseModelFactory, MongooseProp, MongooseSchema } from '@Common/Mongoose';
import { CountryAlphaCode, CountryAlphaCodeSchema } from './CountryAlphaCode.schema'
import { GeoLocation, geoLocationSchema } from './GeoLocation.schema';


export enum Continent {
  AFRICA = 'Africa',
  AMERICAS = 'Americas',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  OCEANIA = 'Oceania'
}
export enum LanguageType {
  LTR = "LTR",
  RTL = "RTL"
}

@MongooseSchema({
  collection: 'country',

})
export class Country extends MongooseBaseSchema {

  @MongooseProp({
    type: String
  })
  Name: string

  @MongooseProp({
    type: String,
    enum: ["LTR", "RTL"],
    default: LanguageType.LTR
  })
  Type: LanguageType

  @MongooseProp({
    type: String
  })

  NativeName: string

  @MongooseProp({
    type: CountryAlphaCodeSchema
  })
  AlphaCode: CountryAlphaCode

  @MongooseProp({
    type: [String]
  })

  CallingCode: string[]

  @MongooseProp({
    type: String
  })
  Capital: string

  @MongooseProp({
    type: [String]
  })
  AltSpellings: string[]

  @MongooseProp({
    type: String,
    enum: Object.values(Continent)
  })
  Region: Continent;


  @MongooseProp({
    type: geoLocationSchema
  })
  @Type(() => GeoLocation)
  GeoLocation: GeoLocation

  @MongooseProp({
    type: [String]
  })
  Timezones: string[]

  @MongooseProp({
    type: String
  })
  NumericCode: string

  @MongooseProp({
    type: [CurrencySchema]
  })
  @Type(() => Currency)
  Currencies: Currency[]

  @MongooseProp({
    type: [String],
    ref: 'Language'
  })
  Languages: string[]

  @MongooseProp({
    type: Object
  })
  Translations: any

  @MongooseProp({
    type: String
  })
  Flag: string

}

export type CountryDocument = Country & MongooseDocument;
export type CountryModel = MongooseModel<CountryDocument>;
export const {
  modelDefinition: CountryDefinition,
  modelSchema: CountrySchema,
  injectName: CountryModelName
} = MongooseModelFactory(Country);
