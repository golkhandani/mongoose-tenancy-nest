import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';


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
export const LocationSchema = SchemaFactory.createForClass(Location);
