import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { MenuItemRecipe, MenuItemRecipeSchema } from "./MenuItemRecipe";
import { OrderParticipant, OrderParticipantSchema } from './OrderParticipant';
import { OrderSit, OrderSitSchema } from './OrderSit';
import { Document, Mongoose } from "mongoose";

const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);

@MongooseSchema({
    collection: "order"
})
export class Order {
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
export const OrderDefinition: ModelDefinition = {
    collection: "order",
    name: "Order",
    schema: OrderSchema
};
