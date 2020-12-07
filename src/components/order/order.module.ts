import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';

@Module({
    controllers: [OrderController],
    providers: [],
})
export class OrderModule { };