import * as mongoose from "mongoose";
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Table } from "./Table";


@MongooseSchema({
    _id: false
})
export class OrderSit {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table"
    })
    table: string | Table;
    @Prop({
        type: Date
    })
    checkInDateTime: Date;
}
export const OrderSitSchema = SchemaFactory.createForClass(OrderSit);
