import { Post } from '@nestjs/common';
import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Mongoose } from "mongoose";
import { basicPlugin } from 'src/common/repository/mongoose.plugin';
import { v4 } from 'uuid';

import moment from "moment";

@MongooseSchema({
    collection: "table"
})
export class Table {
    @Prop({
        default: v4,
    })
    _id?: string;

    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: String
    })
    status: string;

    @Prop({
        type: Number
    })
    capacity: number;
}
export type TableDocument = Table & Document;
export const TableSchema = SchemaFactory.createForClass(Table);
TableSchema.plugin(basicPlugin);

export const TableDefinition: ModelDefinition = {
    collection: "table",
    name: "Table",
    schema: TableSchema
};
