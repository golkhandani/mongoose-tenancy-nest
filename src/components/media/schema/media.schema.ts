import { Exclude, Expose } from 'class-transformer';
import { BaseSchema, basicPlugin, ModelDefinition, MongooseDocument, MongooseSchema, Prop, SchemaFactory } from 'src/common/helper/mongoose/mongoose.helper';

export const MediaConstant = {
    collectionName: "media",
    modelName: "Media"
}

@MongooseSchema({
    collection: MediaConstant.collectionName,
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
    etag: string;

    @Prop({
        type: String
    })
    key: string;

    @Prop({
        type: String
    })
    path: string;
}

export type MediaDocument = Media & MongooseDocument;
export const MediaSchema = SchemaFactory.createForClass(Media);
MediaSchema.virtual('id')
    .get(function () {
        return this._id;
    })
    .set(function (v: string) {
        console.log("SET ID: ", v);

        this._id = v;
    });
MediaSchema.plugin(basicPlugin);
export const MediaDefinition: ModelDefinition = {
    name: MediaConstant.modelName,
    schema: MediaSchema
};
