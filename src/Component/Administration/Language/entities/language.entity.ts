import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose';
import { MongooseBaseSchema, MongooseModelFactory, MongooseProp, MongooseSchema } from '@Application/Common/Mongoose';


@MongooseSchema({
  collection: 'language'
})
@Exclude()
export class Language extends MongooseBaseSchema {

  @MongooseProp({
    type: {
      primary: String,
      secondary: String
    }
  })
  isoCode: {
    primary: string,
    secondary: string
  }

  @MongooseProp({
    type: String
  })
  name: string

  @MongooseProp({
    type: String
  })
  nativeName: string
}

export type languageDocument = Language & Document;
export const {
  modelDefinition: LanguageDefinition,
  modelSchema: LanguageSchema
} = MongooseModelFactory(Language);
