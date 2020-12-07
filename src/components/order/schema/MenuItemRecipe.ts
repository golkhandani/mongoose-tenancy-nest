import * as mongoose from "mongoose";
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Recipe } from "./Recipe";


@MongooseSchema({
    _id: false
})
export class MenuItemRecipe {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    })
    recipe: string | Recipe;

    @Prop({
        type: Number
    })
    usage: number;

    @Prop({
        type: Number
    })
    waste: number;
}
export const MenuItemRecipeSchema = SchemaFactory.createForClass(MenuItemRecipe);
