import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { CountryAlphaCode, CountryAlphaCodeSchema } from './countryAlpaCode.schema'
import { GeoLocation, geoLocationSchema } from './geoLocation.schema';
import { Currency, currencySchema } from './currency.schema';
import { Exclude, Expose, Type } from 'class-transformer';
import { Document } from 'mongoose'
import { BaseSchema, basicPlugin, ModelFactory } from 'src/common/helper/mongoose/mongoose.helper';
import { Language } from '../../language/entities/language.entity';
import * as mongoose from "mongoose"

@MongooseSchema({
  collection: 'country',
})
export class Country extends BaseSchema {

  @Prop({
    type: String
  })

  name: string

  @Prop({
    type: String
  })

  nativeName: string

  @Prop({
    type: CountryAlphaCodeSchema
  })
  alphaCode: CountryAlphaCode

  @Prop({
    type: [String]
  })

  callingCode: string[]

  @Prop({
    type: String
  })
  capital: string

  @Prop({
    type: [String]
  })
  altSpellings: string[]

  @Prop({
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


  @Prop({
    type: geoLocationSchema
  })
  @Type(() => GeoLocation)
  geoLocation: GeoLocation

  @Prop({
    type: [String]
  })
  timezones: string[]

  @Prop({
    type: String
  })
  numericCode: string

  @Prop({
    type: [currencySchema]
  })
  @Type(() => Currency)
  currencies: Currency[]

  @Prop({
    type: [String],
    ref: 'Language'
  })
  languages: string[]

  @Prop({
    type: Object
  })
  translations: any

  @Prop({
    type: String
  })

  flag: string

}

export type CountryDocument = Language & Document;
export const {
  modelDefinition: CountryDefinition,
  modelSchema: CountrySchema
} = ModelFactory(Country);
