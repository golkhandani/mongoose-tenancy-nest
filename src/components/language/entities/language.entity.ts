import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../../media/schema/media.schema';

@MongooseSchema()
export class Language extends BaseSchema {

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