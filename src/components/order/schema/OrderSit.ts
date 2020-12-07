import * as mongoose from "mongoose";
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Table } from "./Table";


@MongooseSchema()
export class OrderSit {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: Table.name
    })
    table: string | Table;
    @Prop({
        type: Date
    })
    checkInDateTime: Date;
}
export const OrderSitSchema = SchemaFactory.createForClass(OrderSit);
