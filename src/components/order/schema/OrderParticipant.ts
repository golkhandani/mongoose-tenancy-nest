import * as mongoose from "mongoose";
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { User } from "./User";
import { OrderParticipantMenuItem, OrderParticipantMenuItemSchema } from "./OrderParticipantMenuItem";


@MongooseSchema()
export class OrderParticipant {
    @Prop({
        type: mongoose.Schema.Types.ObjectId
    })
    user: string | User;

    @Prop({
        type: Number
    })
    subOrderId: number;

    @Prop({
        type: Date,
        default: Date.now()
    })
    checkOutTime: Date;

    @Prop({
        type: Date
    })
    totalPrice: Date;

    @Prop({
        type: [OrderParticipantMenuItemSchema]
    })
    menuItems: OrderParticipantMenuItem[];
}
export const OrderParticipantSchema = SchemaFactory.createForClass(OrderParticipant);
