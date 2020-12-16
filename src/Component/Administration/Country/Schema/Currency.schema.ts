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
  Code: string

  @Prop({
    type: String
  })
  Name: string

  @Prop({
    type: String
  })
  Symbol: string
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);