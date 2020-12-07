import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderDefinition } from './schema/Order';

@Module({
    imports: [
        MongooseModule.forFeature([OrderDefinition])
    ],
    controllers: [
        OrderController
    ],
    providers: [],
})
export class OrderModule { };