import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';


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
export const PhoneSchema = SchemaFactory.createForClass(Phone);
