import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { MenuItemRecipe, MenuItemRecipeSchema } from "./MenuItemRecipe";
import { Document, Mongoose } from "mongoose";
import { basicPlugin } from 'src/common/helper/mongoose/mongoose.helper';


@MongooseSchema({
    collection: "menuItem"
})
export class MenuItem {
    @Prop({
        type: String
    })
    image: string;

    @Prop({
        type: String
    })
    name: string;

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
        type: [MenuItemRecipeSchema]
    })
    recipes: MenuItemRecipe[];

}

export type MenuItemDocument = MenuItem & Document;
export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
MenuItemSchema.plugin(basicPlugin);

export const MenuItemDefinition: ModelDefinition = {
    collection: "menuItem",
    name: "MenuItem",
    schema: MenuItemSchema
};
