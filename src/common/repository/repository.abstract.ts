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

  constructor(@InjectConnection() private readonly connection: Connection) {
    // this.registerSchemas()
  }

  // private readonly Definitions = [
  //   MenuItemDefinition,
  //   UserDefinition,
  //   RecipeDefinition,
  //   TableDefinition,
  //   OrderDefinition
  // ]
  // async registerSchemas() {
  //   console.time('sss')
  //   for (let index = 1; index < 1001; index++) {
  //     const tenant = "Fabizi_" + index;
  //     const db = this.connection.useDb(tenant, { useCache: true })

  //     for (let j = 0; j < this.Definitions.length; j++) {
  //       const Definition = this.Definitions[j];
  //       db.model(Definition.name, Definition.schema)
  //     }
  //   }
  //   console.timeEnd('sss')
  //   console.log("COMPLETE TENANCY");

  // }
  // setTenant(tenantDatabaseName: string) {
  //   const db = this.connection
  //     .useDb(tenantDatabaseName, { useCache: true })
  //   function getModel<T extends Document>(ModelDefiniation: ModelDefinition): Model<T> {
  //     const model = db.model(ModelDefiniation.name);
  //     return model as any
  //   }
  //   return {
  //     getModel,
  //     db
  //   };
  // }


  setModel(tenantDatabaseName: string, MainModelDefinition: ModelDefinition, DependencyModelDefinitions?: ModelDefinition[]) {
    const connection = this.connection

    const db = connection.useDb(tenantDatabaseName)

    for (let index = 0; index < DependencyModelDefinitions.length; index++) {
      const ModelDefinition = DependencyModelDefinitions[index];
      db.model(ModelDefinition.name, ModelDefinition.schema);
    }

    const model = db.model(MainModelDefinition.name, MainModelDefinition.schema);
    return model as any
  }
}
