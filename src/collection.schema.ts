import mongoose from "mongoose";
import deepPopulate from "mongoose-deep-populate";
import { ModelDefinition, Prop, raw, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';

@MongooseSchema()
export class Table {
    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: String
    })
    status: string;

    @Prop({
        type: Number
    })
    capacity: number;
}
export type TableDocument = Table & Document;
export const TableSchema = SchemaFactory.createForClass(Table);
export const TableDefinition: ModelDefinition = {
    collection: "table",
    name: "Table",
    schema: TableSchema
};



export enum Role {
    'ADMIN' = 'ADMIN',
    'SUPER_VISOR' = 'ADMIN'
}

@MongooseSchema()
export class Phone {
    @Prop({
        type: String
    })
    number: string;

    @Prop({
        type: String
    })
    prefix: string;
}

@MongooseSchema()
export class Location {
    @Prop({
        type: Number
    })
    lat: number;

    @Prop({
        type: Number
    })
    long: number;

    @Prop({
        type: String
    })
    address: string;
}

@MongooseSchema()
export class User {
    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: [Phone],
    })
    phone: Phone[];

    @Prop({
        type: Location
    })
    location: Location;

    @Prop({
        type: String
    })
    email: string;

    @Prop({
        type: String
    })
    password: string;

    @Prop({
        type: String,
        enum: Object.keys(Role),
        default: Role.ADMIN
    })
    role: Role;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    })
    orders: string[] | any[]
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
export const UserDefinition: ModelDefinition = {
    collection: "user",
    name: "User",
    schema: UserSchema
};




@MongooseSchema()
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
export const IngredientDefinition: ModelDefinition = {
    collection: "ingredient",
    name: "Ingredient",
    schema: IngredientSchema
};




@MongooseSchema()
export class AddOn {
    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: [mongoose.Schema.Types.ObjectId],
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


@MongooseSchema()
export class MenuItemRecipe {
    @Prop({
        type: [mongoose.Schema.Types.ObjectId],
        ref: Recipe.name
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

@MongooseSchema()
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
        type: [MenuItemRecipe]
    })
    recipes: MenuItemRecipe[];

}

export type MenuItemDocument = MenuItem & Document;
export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
export const MenuItemDefinition: ModelDefinition = {
    collection: "menuItem",
    name: "MenuItem",
    schema: MenuItemSchema
};


@MongooseSchema()
export class OrderSit {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: Table.name
    })
    table: string | Table;
    @Prop({
        type: Date
    })
    checkInDateTime: Date;
}

@MongooseSchema()
export class OrderParticipantMenuItem {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: User.name
    })
    user: string | User;

    @Prop({
        type: Number
    })
    subOrderId: number;

    @Prop({
        type: Date,
        default: Date.now()
    })
    checkOutTime: Date;

    @Prop({
        type: Date,
        default: Date.now()
    })
    checkOutTime: Date;
}



@MongooseSchema()
export class OrderParticipant {
    @Prop({
        type: mongoose.Schema.Types.ObjectId
    })
    user: string | User;

    @Prop({
        type: Number
    })
    subOrderId: number;

    @Prop({
        type: Date,
        default: Date.now()
    })
    checkOutTime: Date;
    @Prop({
        type: Date
    })
    totalPrice: Date;
    @Prop({
        type: Date
    })
    menuItems: Date;
}



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

export type MenuItemDocument = MenuItem & Document;
export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
export const MenuItemDefinition: ModelDefinition = {
    collection: "menuItem",
    name: "MenuItem",
    schema: MenuItemSchema
};