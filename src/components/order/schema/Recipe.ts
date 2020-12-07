import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { RecipeIngredient } from "./RecipeIngredient";
import { RecipeAddon } from "./RecipeAddon";


@MongooseSchema()
export class Recipe {
    @Prop({
        type: String
    })
    name: string;
    @Prop({
        type: Number
    })
    amount: number;

    @Prop({
        type: String
    })
    unit: string;


    @Prop({
        type: Boolean
    })
    bulk: boolean;

    @Prop({
        type: Number
    })
    mainCost: number;

    @Prop({
        type: Number
    })
    wasteCost: number;


    @Prop({
        type: [RecipeIngredient]
    })
    ingredients: RecipeIngredient[];

    @Prop({
        type: [RecipeAddon]
    })
    addOns: RecipeAddon[];
}

export type RecipeDocument = Recipe & Document;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
export const RecipeDefinition: ModelDefinition = {
    collection: "recipe",
    name: "Recipe",
    schema: RecipeSchema
};
