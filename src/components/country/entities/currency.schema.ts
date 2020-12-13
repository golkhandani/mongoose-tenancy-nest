import { Schema as MongooseSchema, Prop, SchemaFactory } from '@nestjs/mongoose';

@MongooseSchema({
  _id: false
})
export class Currency {
  @Prop({
    type: String
  })

  @Prop({
    type: String
  })
  code: string

  @Prop({
    type: String
  })
  name: string

  @Prop({
    type: String
  })
  symbol: string
}

export const currencySchema = SchemaFactory.createForClass(Currency);