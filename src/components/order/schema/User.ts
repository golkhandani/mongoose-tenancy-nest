import * as mongoose from "mongoose";
import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Phone, PhoneSchema } from "./Phone";
import { Location, LocationSchema } from "./Location";
import { Order } from "./Order";


export enum Role {
    'ADMIN' = 'ADMIN',
    'SUPER_VISOR' = 'ADMIN'
}

@MongooseSchema({
    collection: "user"
})
export class User {
    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: [PhoneSchema],
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
        default: "ADMIN"
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
