import { Exclude, Expose } from 'class-transformer';
import { MongooseBaseSchema, MongooseDocument, MongooseModelFactory, MongooseProp, MongooseSchema } from '@Application/Common/Mongoose';


@MongooseSchema({
    collection: "media"
})
@Exclude()
export class Media extends MongooseBaseSchema {

    @MongooseProp({
        type: String
    })
    @Expose()
    region: string;

    @MongooseProp({
        type: String
    })
    @Expose()
    bucket: string;

    @MongooseProp({
        type: String
    })
    @Expose()
    etag: string;

    @MongooseProp({
        type: String
    })
    @Expose()
    key: string;

    @MongooseProp({
        type: String
    })
    @Expose()
    path: string;
}

export type MediaDocument = Media & MongooseDocument;
export const {
    modelDefinition: MediaDefinition,
    modelSchema: MediaSchema
} = MongooseModelFactory(Media);

