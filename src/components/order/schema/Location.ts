import { Prop, Schema as MongooseSchema } from '@nestjs/mongoose';


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
