import { Prop, Schema as MongooseSchema } from '@nestjs/mongoose';


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
