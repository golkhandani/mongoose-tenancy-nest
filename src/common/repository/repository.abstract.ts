import { IRepository } from './repository.interface';
import { ConnectionProvider } from '../connection/connection.provider';
import { Connection, DocumentQuery } from 'mongoose';
import { InjectConnection, ModelDefinition } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Document, Model } from "mongoose";
import { TableDefinition } from 'src/components/order/schema/Table';
import { OrderDefinition } from 'src/components/order/schema/Order';
import { MenuItemDefinition } from 'src/components/order/schema/MenuItem';
import { UserDefinition } from 'src/components/order/schema/User';
import { RecipeDefinition } from 'src/components/order/schema/Recipe';



@Injectable()
export class AbstractRepository {
  // private connection: Connection;

  constructor(@InjectConnection() private readonly connection: Connection) {
    this.registerSchemas()
  }

  // stablishConnection(@InjectConnection() connection: Connection) {
  //   this.connection = connection
  // }
  private readonly Definitions = [
    MenuItemDefinition,
    UserDefinition,
    RecipeDefinition,
    TableDefinition,
    OrderDefinition
  ]
  async registerSchemas() {
    const db = this.connection
      .useDb("Fabizi_1", { useCache: true })
    for (let index = 0; index < this.Definitions.length; index++) {
      const Definition = this.Definitions[index];
      db.model(Definition.name, Definition.schema)
    }
  }
  setTenant(tenantDatabaseName: string) {
    const connection = this.connection
    function getModel<T extends Document>(ModelDefiniation: ModelDefinition): Model<T> {
      const db = connection
        .useDb(tenantDatabaseName, { useCache: true })

      // const Definitions = [
      //   TableDefinition,
      //   OrderDefinition
      // ]
      // for (let index = 0; index < Definitions.length; index++) {
      //   const Definition = Definitions[index];
      //   db.model(Definition.name, Definition.schema)
      // }

      // db.model(TableDefinition.name, TableDefinition.schema)
      const model =
        db.model(ModelDefiniation.name)
      //    .model(TableDefinition.name, TableDefinition.schema);

      return model as any
    }
    return {
      getModel
    };
  }
  // getModel(tenantDatabaseName: string) {

  //   const model = this.connection
  //     .useDb(tenantDatabaseName)
  //     .model(this.model.name, this.model.schema);

  //   return {
  //     async findOne(id: number) { },
  //     async findOneByOrderId(orderId: number) {
  //       console.log(this.connection);
  //     },
  //     async findAll() { },
  //     async store(params: object) {
  //       return await model.create(params)
  //     }
  //   };
  // }
}
