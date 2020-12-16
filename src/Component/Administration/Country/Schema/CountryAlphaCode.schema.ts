import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { MongooseModelFactory } from '@Application/Common/Mongoose';

@MongooseSchema({
  _id: false,
  id: false
})
export class CountryAlphaCode {
  @Prop({
    type: String
  })
  Primary: string

  @Prop({
    type: String
  })
  Secondary: string
}

export const {
  modelSchema: CountryAlphaCodeSchema
} = MongooseModelFactory(CountryAlphaCode);