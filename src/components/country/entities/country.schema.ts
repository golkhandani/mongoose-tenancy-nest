import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { CountryAlphaCode, countryAlphaCodeSchema } from './countryAlpaCode.schema'
import { GeoLocation, geoLocationSchema } from './geoLocation.schema';
import { Currency, currencySchema } from './currency.schema';
import { Exclude, Expose, Type } from 'class-transformer';
import { Document } from 'mongoose'
import { BaseSchema, basicPlugin, ModelFactory } from 'src/common/helper/mongoose/mongoose.helper';
import { Language } from '../../language/entities/language.entity';

@MongooseSchema({
  collection: 'country',
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
  @Type(() => CountryAlphaCode)
  // @Expose()
  alphaCode: CountryAlphaCode

  @Prop({
    type: [String]
  })
  @Expose()
  callingCode: string[]

  @Prop({
    type: String
  })
  @Expose()
  capital: string

  @Prop({
    type: [String]
  })
  @Expose()
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
  @Expose()
  region: string;

  @Prop({
    type: geoLocationSchema
  })
  @Expose()
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
    type: [String],
    ref: 'Language'
  })
  // 
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

// export type CountryDocument = Country & Document;
// export const countrySchema = SchemaFactory.createForClass(Country);
//
// countrySchema.plugin(basicPlugin);
//
// export const countryDefinition: ModelDefinition = {
//   name: countryConstant.modelName,
//   schema: countrySchema
// }