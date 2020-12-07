import * as mongoose from "mongoose";
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { MenuItem } from "./MenuItem";


@MongooseSchema({
    _id: false
})
export class OrderParticipantMenuItem {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem"
    })
    menuItem: string | MenuItem;

    @Prop({
        type: Number
    })
    count: number;

    @Prop({
        type: Number,
    })
    price: Date;

    @Prop({
        type: Number,
    })
    preprationTime: number;
}
export const OrderParticipantMenuItemSchema = SchemaFactory.createForClass(OrderParticipantMenuItem);
