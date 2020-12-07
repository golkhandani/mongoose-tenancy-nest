import mongoose from "mongoose";
import { Prop, Schema as MongooseSchema } from '@nestjs/mongoose';
import { MenuItem } from "./MenuItem";


@MongooseSchema()
export class OrderParticipantMenuItem {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: MenuItem.name
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
