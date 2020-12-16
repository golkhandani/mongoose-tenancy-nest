import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { prop, buildSchema } from "@typegoose/typegoose";
import { MongooseModelFactory } from 'src/common/mongoose';

@MongooseSchema({
  _id: false,
  id: false
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

export const {
  modelSchema: CountryAlphaCodeSchema
} = MongooseModelFactory(CountryAlphaCode);