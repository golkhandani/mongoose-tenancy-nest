import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from "../../common/repository/repository.abstract";
import { MenuItemDefinition, MenuItemDocument } from './schema/MenuItem';
import { Order, OrderDefinition, OrderDocument } from './schema/Order';
import { TableDefinition, TableDocument } from './schema/Table';

@Injectable()
export class OrderService {
  constructor(
    private readonly abstractRepository: AbstractRepository) {

  }

  async get() {
    const orderId = 5000;
    // return 
    // await this.abstractRepository.setTenant("Fabizi_1").getModel<TableDocument>(TableDefinition).findOne();
    return await this.abstractRepository.setTenant("Fabizi_1").getModel<OrderDocument>(OrderDefinition)
      .findOne(
        {
          orderId: orderId
        },
        {
          "_id": 1,
          "orderId": 1,
          "participant.menuItems.count": 1,
          "participant.menuItems.menuItem": 1,
        }
      )
      // .populate('sit.table')
      .lean()
      .deepPopulate([
        'sit.table',
        'participant.user',
        'participant.menuItems.menuItem',
        'participant.menuItems.menuItem.recipes.recipe',
      ]).exec();
  }
}