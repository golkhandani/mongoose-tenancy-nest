import { Module, Scope } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Request } from 'express';
import { CommonModule } from 'src/common/common.module';
import { AbstractRepository } from 'src/common/repository/repository.abstract';
import { OrderController } from './order.controller';
import { OrderProviders } from './order.provider';

import { OrderService } from './order.service';
import { MenuItemDefinition } from './schema/MenuItem';
import { OrderDefinition } from './schema/Order';
import { RecipeDefinition } from './schema/Recipe';
import { TableDefinition } from './schema/Table';
import { UserDefinition } from './schema/User';

@Module({
    imports: [
        MongooseModule.forFeature([OrderDefinition, TableDefinition]),
        CommonModule,

    ],
    controllers: [
        OrderController
    ],
    providers: [
        OrderService,
        ...OrderProviders
    ],
})
export class OrderModule { };