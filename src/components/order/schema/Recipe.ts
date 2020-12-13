import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { RecipeIngredient, RecipeIngredientSchema } from "./RecipeIngredient";
import { RecipeAddon, RecipeAddonSchema } from "./RecipeAddon";
import { basicPlugin } from 'src/common/helper/mongoose/mongoose.helper';


@MongooseSchema({
    collection: "recipe",
})
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
        type: [RecipeIngredientSchema]
    })
    ingredients: RecipeIngredient[];

    @Prop({
        type: [RecipeAddonSchema]
    })
    addOns: RecipeAddon[];
}

export type RecipeDocument = Recipe & Document;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
RecipeSchema.plugin(basicPlugin);

export const RecipeDefinition: ModelDefinition = {
    collection: "recipe",
    name: "Recipe",
    schema: RecipeSchema
};
