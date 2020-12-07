import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { MenuItemRecipe, MenuItemRecipeSchema } from "./MenuItemRecipe";
import { OrderParticipant, OrderParticipantSchema } from './OrderParticipant';
import { OrderSit, OrderSitSchema } from './OrderSit';


@MongooseSchema()
export class Order {
    @Prop({
        type: String
    })
    orderId: string;

    @Prop({
        type: String
    })
    totalPrice: string;

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
export const OrderDefinition: ModelDefinition = {
    collection: "order",
    name: "Order",
    schema: OrderSchema
};
