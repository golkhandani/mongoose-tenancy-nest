import { Exclude, Expose } from 'class-transformer';
import { BaseSchema, ModelFactory, MongooseDocument, MongooseSchema, Prop } from 'src/common/helper/mongoose/mongoose.helper';

@MongooseSchema({
    collection: "media"
})
@Exclude()
export class Media extends BaseSchema {

    @Prop({
        type: String
    })
    @Expose()
    region: string;

    @Prop({
        type: String
    })
    @Expose()
    bucket: string;

    @Prop({
        type: String
    })
    @Expose()
    etag: string;

    @Prop({
        type: String
    })
    @Expose()
    key: string;

    @Prop({
        type: String
    })
    @Expose()
    path: string;
}

export type MediaDocument = Media & MongooseDocument;
export const {
    modelDefinition: MediaDefinition,
    modelSchema: MediaSchema
} = ModelFactory(Media);

