import { IRepository } from './repository.interface';
import { ConnectionProvider } from '../connection/connection.provider';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

export abstract class AbstractRepository implements IRepository<any> {
  private connection: Connection;  

  constructor(private readonly model) {}

  stablishConnection(@InjectConnection() connection: Connection) {
    this.connection = connection
  }

  getModel(tenantDatabaseName: string) {

    const model = this.connection
      .useDb(tenantDatabaseName)
      .model(this.model.name, this.model.schema);
  
    return {
      async findOne(id: number) {},
      async findOneByOrderId(orderId: number) {
        console.log(this.connection);
      },
      async findAll() {},
      async store(params: object) {
        return await model.create(params)
      }
    };
  }
}
