import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';

@MongooseSchema({
  _id: false
})
export class CountryAlphaCode {
  @Prop({
    type: String
  })
  primary: string

  @Prop({
    type: String
  })
  secondary: string
}

export const countryAlphaCodeSchema = SchemaFactory.createForClass(CountryAlphaCode);
