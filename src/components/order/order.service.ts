import { Injectable } from '@nestjs/common'
import { AbstractRepository } from "../../common/repository/repository.abstract";
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { OrderDefinition } from './schema/Order';

@Injectable()
export class OrderService extends AbstractRepository {
  constructor(@InjectConnection() connection: Connection) {
    super(OrderDefinition, connection);
  }

  async get() {
    return await this.getModel("Fabizi_1").findOneByOrderId(50000)
  }
}