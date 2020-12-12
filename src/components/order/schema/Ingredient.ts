import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { basicPlugin } from 'src/common/repository/mongoose.plugin';


@MongooseSchema({
    collection: "ingredient"
})
export class Ingredient {
    @Prop({
        type: String
    })
    itemType: string;

    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: String
    })
    unit: string;

    @Prop({
        type: Number
    })
    size: number;

    @Prop({
        type: Number
    })
    minimumCapacity: number;

    @Prop({
        type: Number
    })
    defaultPrice: number;

    @Prop({
        type: Number
    })
    wasteIn: number;

    @Prop({
        type: [String]
    })
    stock: string;
}

export type IngredientDocument = Ingredient & Document;
export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
IngredientSchema.plugin(basicPlugin);
export const IngredientDefinition: ModelDefinition = {
    collection: "ingredient",
    name: "Ingredient",
    schema: IngredientSchema
};
