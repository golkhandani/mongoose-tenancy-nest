import { Injectable } from '@nestjs/common'
import { AbstractRepository } from "../../common/repository/repository.abstract";
import { OrderDefinition } from './schema/Order';

@Injectable()
export class OrderService extends AbstractRepository {
  constructor() {
    super(OrderDefinition);
  }

  async get() {
    return await this.getModel("Fabizi_1").findOneByOrderId(50000)
  }
}