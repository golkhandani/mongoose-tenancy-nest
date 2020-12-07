import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { MenuItemRecipe } from "./MenuItemRecipe";


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
        type: String
    })
    englishName: string;


    @Prop({
        type: Number
    })
    quantity: number;

    @Prop({
        type: Number
    })
    price: number;

    @Prop({
        type: Number
    })
    wasteCost: number;


    @Prop({
        type: [MenuItemRecipe]
    })
    recipes: MenuItemRecipe[];

}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
export const OrderDefinition: ModelDefinition = {
    collection: "order",
    name: "Order",
    schema: OrderSchema
};
