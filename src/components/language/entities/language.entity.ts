import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose';
import { BaseSchema, basicPlugin, ModelFactory } from '../../../common/helper/mongoose/mongoose.helper';

@MongooseSchema({
  collection: 'language'
})
@Exclude()
export class Language extends BaseSchema {

  @Prop({
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

  @Prop({
    type: String
  })
  @Expose()
  name: string

  @Prop({
    type: String
  })
  @Expose()
  nativeName: string
}

export type languageDocument = Language & Document;
export const {
  modelDefinition: LanguageDefinition,
  modelSchema: LanguageSchema
} = ModelFactory(Language);

// export const languageSchema = SchemaFactory.createForClass(Language);
//
// countrySchema.plugin(basicPlugin);
//
// export const languageDefinition: ModelDefinition = {
//   name: languageConstant.collectionName,
//   schema: languageSchema
// }