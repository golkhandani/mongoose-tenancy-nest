import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { basicPlugin } from 'src/common/repository/mongoose.plugin';
import { v4 as uuid } from 'uuid';
import { Document, Mongoose } from "mongoose";
import { Exclude, Expose } from 'class-transformer';


export const MediaConstant = {
    collectionName: "media",
    modelName: "Media"
}

@MongooseSchema()
export class BaseSchema {
    @Prop({
        type: String,
        default: uuid
    })
    _id?: string;
    @Expose()
    id?: string;

    @Prop({
        type: Date,
        default: new Date()
    })
    createdAt?: Date;

    @Prop({
        type: Date,
        default: new Date()
    })
    updatedAt?: Date;

    @Prop({
        type: Date,
        default: null
    })
    deletedAt?: Date;
}


@MongooseSchema({
    collection: MediaConstant.collectionName,
    timestamps: true,
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

export type MediaDocument = Media & Document;
export const MediaSchema = SchemaFactory.createForClass(Media);

MediaSchema.virtual('id')
    .get(function () {
        return this._id;
    }).
    set(function (v: string) {
        this._id = v || uuid();
    });
MediaSchema.plugin(basicPlugin);
export const MediaDefinition: ModelDefinition = {
    name: MediaConstant.modelName,
    schema: MediaSchema
};
