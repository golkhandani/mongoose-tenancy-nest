import mongoose from "mongoose";
import { Prop, Schema as MongooseSchema } from '@nestjs/mongoose';
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
