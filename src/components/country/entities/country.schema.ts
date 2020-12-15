import { CountryAlphaCode, CountryAlphaCodeSchema } from './countryAlpaCode.schema'
import { GeoLocation, geoLocationSchema } from './geoLocation.schema';
import { Currency, currencySchema } from './currency.schema';
import { Exclude, Expose, Type } from 'class-transformer';
import { Document } from 'mongoose'

import { Language } from '../../language/entities/language.entity';
import { MongooseBaseSchema, MongooseModelFactory, MongooseProp, MongooseSchema } from 'src/common/mongoose';

@MongooseSchema({
  collection: 'country',
})
export class Country extends MongooseBaseSchema {

  @MongooseProp({
    type: String
  })

  name: string

  @MongooseProp({
    type: String
  })

  nativeName: string

  @MongooseProp({
    type: CountryAlphaCodeSchema
  })
  alphaCode: CountryAlphaCode

  @MongooseProp({
    type: [String]
  })

  callingCode: string[]

  @MongooseProp({
    type: String
  })
  capital: string

  @MongooseProp({
    type: [String]
  })
  altSpellings: string[]

  @MongooseProp({
    type: String,
    enum: [
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania'
    ]
  })
  region: string;


  @MongooseProp({
    type: geoLocationSchema
  })
  @Type(() => GeoLocation)
  geoLocation: GeoLocation

  @MongooseProp({
    type: [String]
  })
  timezones: string[]

  @MongooseProp({
    type: String
  })
  numericCode: string

  @MongooseProp({
    type: [currencySchema]
  })
  @Type(() => Currency)
  currencies: Currency[]

  @MongooseProp({
    type: [String],
    ref: 'Language'
  })
  languages: string[]

  @MongooseProp({
    type: Object
  })
  translations: any

  @MongooseProp({
    type: String
  })

  flag: string

}

export type CountryDocument = Language & Document;
export const {
  modelDefinition: CountryDefinition,
  modelSchema: CountrySchema
} = MongooseModelFactory(Country);
