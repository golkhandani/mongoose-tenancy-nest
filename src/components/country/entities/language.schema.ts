import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';

@MongooseSchema({
  _id: false
})
export class Language {

  @Prop({
    type: {
      primary: String,
      secondary: String
    }
  })
  isoCode: {
    primary: string,
    secondary: string
  }

  @Prop({
    type: String
  })
  name: string

  @Prop({
    type: String
  })
  nativeName: string
}

export const languageSchema = SchemaFactory.createForClass(Language);