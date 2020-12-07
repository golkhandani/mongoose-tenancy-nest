import mongoose from "mongoose";
import { Prop, Schema as MongooseSchema } from '@nestjs/mongoose';
import { Ingredient } from "./Ingredient";
import { AddOn } from "./AddOn";


@MongooseSchema()
export class RecipeAddon {

    @Prop({
        type: [mongoose.Schema.Types.ObjectId],
        ref: Ingredient.name
    })
    addOn: string | AddOn;

    @Prop({
        type: Number
    })
    usage: number;

    @Prop({
        type: Number
    })
    waste: number;
}
