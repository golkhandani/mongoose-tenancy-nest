import { Exclude, Expose } from 'class-transformer';
import {
  MongooseBaseSchema,
  MongooseDocument,
  MongooseModelFactory,
  MongooseProp,
  MongooseSchema
} from '@Common/Mongoose';


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

export type LanguageDocument = Language & MongooseDocument;
export const {
  modelDefinition: LanguageDefinition,
  modelSchema: LanguageSchema
} = MongooseModelFactory(Language);
