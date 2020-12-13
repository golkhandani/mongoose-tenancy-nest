import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../../media/schema/media.schema';
import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose';
import { basicPlugin } from '../../../common/helper/mongoose/mongoose.helper';
import { countrySchema } from '../../country/entities/country.schema';

export const languageConstant = {
  collectionName: 'language',
  modelName: 'Language'
}

@MongooseSchema({
  collection: languageConstant.collectionName
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
export const languageSchema = SchemaFactory.createForClass(Language);

countrySchema.plugin(basicPlugin);

export const languageDefinition: ModelDefinition = {
  name: languageConstant.collectionName,
  schema: languageSchema
}