import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { CountryAlphaCode, countryAlphaCodeSchema } from './countryAlpaCode.schema'
import { GeoLocation, geoLocationSchema } from './geoLocation.schema';
import { Currency, currencySchema } from './currency.schema';
import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose'
import { BaseSchema, basicPlugin } from 'src/common/helper/mongoose/mongoose.helper';

export const countryConstant = {
  collectionName: "country",
  modelName: "Country"
}


@MongooseSchema({
  collection: countryConstant.collectionName,
})
@Exclude()
export class Country extends BaseSchema {

  @Prop({
    type: String
  })
  @Expose()
  name: string

  @Prop({
    type: String
  })
  @Expose()
  nativeName: string

  @Prop({
    type: countryAlphaCodeSchema
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
  currencies: Currency[]

  @Prop({
    type: String,
    ref: 'Language'
  })
  languages: string[]

  @Prop({
    type: Object
  })
  translations: Record<string, string>

  @Prop({
    type: String
  })
  flag: string

}

export type CountryDocument = Country & Document;
export const countrySchema = SchemaFactory.createForClass(Country);

countrySchema.plugin(basicPlugin);

export const countryDefinition: ModelDefinition = {
  name: countryConstant.modelName,
  schema: countrySchema
}