import { Prop } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { MongooseSchema } from "@Common/Mongoose/MongooseSchema.decorator";


@MongooseSchema()
export class MongooseBaseSchema {

    @Prop({
        type: String,
        default: uuid,
        alias: "id"
    })
    // Don't need expose or exclude
    @Expose({ name: "id" })
    _id?: string;
    @Expose({ name: "_id" })
    id: string;


    @Prop({
        type: Date,
        default: new Date()
    })
    @Expose()
    createdAt?: Date;

    @Prop({
        type: Date,
        default: new Date()
    })
    @Expose()
    updatedAt?: Date;

    @Prop({
        type: Date,
        default: null
    })
    @Exclude()
    deletedAt?: Date;
}
