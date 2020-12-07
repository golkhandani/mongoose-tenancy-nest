import mongoose from "mongoose";
import { Prop, Schema as MongooseSchema } from '@nestjs/mongoose';
import { Ingredient } from "./Ingredient";


@MongooseSchema()
export class RecipeIngredient {

    @Prop({
        type: [mongoose.Schema.Types.ObjectId],
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
