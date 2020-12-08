import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from 'src/common/common.module';
import { OrderController } from './order.controller';

import { OrderService } from './order.service';
import { MenuItemDefinition } from './schema/MenuItem';
import { OrderDefinition } from './schema/Order';
import { TableDefinition } from './schema/Table';

@Module({
    imports: [
        MongooseModule.forFeature([OrderDefinition, TableDefinition]),
        CommonModule,

    ],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule { };