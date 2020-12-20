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
  @Expose()
  isoCode: {
    primary: string,
    secondary: string
  }

  @MongooseProp({
    type: String
  })
  @Expose()
  name: string

  @MongooseProp({
    type: String
  })
  @Expose()
  nativeName: string
}

export type LanguageDocument = Language & MongooseDocument;
export const {
  modelDefinition: LanguageDefinition,
  modelSchema: LanguageSchema
} = MongooseModelFactory(Language);
