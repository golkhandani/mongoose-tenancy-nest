import { Prop } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import { MongooseSchema } from "@Common/Mongoose/MongooseSchema.decorator";

@MongooseSchema()
class MongooseId {
    @Prop({
        type: String,
        default: uuid,
        alias: "Id"
    })
    // Don't need expose or exclude
    // @Expose({ name: "Id" })
    _id?: string;
}

@MongooseSchema()
export class MongooseBaseSchema extends MongooseId {

    @Expose({ name: "_id" })
    Id: string;

    @Expose({
        name: "createdAt"
    })
    CreatedAt?: Date;

    @Expose({
        name: "updatedAt"
    })
    UpdatedAt?: Date;

    @Prop({
        type: Date,
        default: null
    })
    @Exclude()
    DeletedAt?: Date;
}
