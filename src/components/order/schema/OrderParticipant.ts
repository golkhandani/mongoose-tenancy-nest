import mongoose from "mongoose";
import { Prop, Schema as MongooseSchema } from '@nestjs/mongoose';
import { User } from "./User";
import { OrderParticipantMenuItem } from "./OrderParticipantMenuItem";


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
        type: [OrderParticipantMenuItem]
    })
    menuItems: OrderParticipantMenuItem[];
}
