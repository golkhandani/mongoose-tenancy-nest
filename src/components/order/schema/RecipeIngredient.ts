import * as mongoose from "mongoose";
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Ingredient } from "./Ingredient";


@MongooseSchema({
    _id: false
})
export class RecipeIngredient {

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: Ingredient.name
    })
    ingredient: string | Ingredient;

    @Prop({
        type: Number
    })
    usage: number;

    @Prop({
        type: Number
    })
    waste: number;
}
export const RecipeIngredientSchema = SchemaFactory.createForClass(RecipeIngredient);
