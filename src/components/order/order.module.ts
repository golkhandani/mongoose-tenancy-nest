import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';

import { OrderService } from './order.service';

@Module({
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule { };