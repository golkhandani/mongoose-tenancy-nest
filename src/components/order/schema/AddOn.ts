import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Ingredient } from "./Ingredient";


@MongooseSchema()
export class AddOn {
    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: [Types.ObjectId],
        ref: Ingredient.name
    })
    ingredientItems: string;

    @Prop({
        type: Number
    })
    amount: number;

    @Prop({
        type: Number
    })
    size: number;

    @Prop({
        type: Number
    })
    mainCost: number;

    @Prop({
        type: Number
    })
    wasteCost: number;
}

export type AddOnDocument = AddOn & Document;
export const AddOnSchema = SchemaFactory.createForClass(AddOn);
export const AddOnDefinition: ModelDefinition = {
    collection: "addOn",
    name: "AddOn",
    schema: AddOnSchema
};
