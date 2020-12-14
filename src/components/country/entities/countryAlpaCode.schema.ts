import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { prop, buildSchema } from "@typegoose/typegoose";
import { ModelFactory } from 'src/common/helper/mongoose/mongoose.helper';

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

export const {
  modelSchema: CountryAlphaCodeSchema
} = ModelFactory(CountryAlphaCode);