import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { MenuItemRecipe, MenuItemRecipeSchema } from "./MenuItemRecipe";
import { OrderParticipant, OrderParticipantSchema } from './OrderParticipant';
import { OrderSit, OrderSitSchema } from './OrderSit';
import { Document, Mongoose } from "mongoose";
import { v4 } from 'uuid';
import { basicPlugin } from 'src/common/helper/mongoose/mongoose.helper';

const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);

@MongooseSchema({
    collection: "order",
    skipVersioning: true
})
export class Order {
    @Prop({
        default: v4,
    })
    _id?: string;

    @Prop({
        type: Number
    })
    orderId: number;

    @Prop({
        type: Number
    })
    totalPrice: number;

    @Prop({
        type: OrderSitSchema
    })
    sit: OrderSit;

    @Prop({
        type: [OrderParticipantSchema]
    })
    participant: OrderParticipant[];

}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
OrderSchema.plugin(deepPopulate, {
    populate: {
        "participant.menuItems.menuItem": {
            select: "name quantity count recipes"
        },
        "participant.menuItems.menuItem.recipes.recipe": {
            select: "ingredients addOns"
        }
    }
});
OrderSchema.plugin(basicPlugin);
export const OrderDefinition: ModelDefinition = {
    collection: "order",
    name: "Order",
    schema: OrderSchema
};
