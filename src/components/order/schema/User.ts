import * as mongoose from "mongoose";
import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Phone } from "./Phone";
import { Location, LocationSchema } from "./Location";
import { Order } from "./Order";


export enum Role {
    'ADMIN' = 'ADMIN',
    'SUPER_VISOR' = 'ADMIN'
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
        type: LocationSchema
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
    orders: string[] | Order[];
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
export const UserDefinition: ModelDefinition = {
    collection: "user",
    name: "User",
    schema: UserSchema
};
