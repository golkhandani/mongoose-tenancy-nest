import { Connection } from 'mongoose';
import { InjectConnection, ModelDefinition } from '@nestjs/mongoose';
import { Injectable, Provider, Scope } from '@nestjs/common';




@Injectable()
export class MongooseTenancy {

  constructor(@InjectConnection() private readonly connection: Connection) { }

  static modelProvider(
    modelName: string,
    MainModelDefinition: ModelDefinition,
    DependencyModelDefinitions?: ModelDefinition[]): Provider<any> {
    return {
      scope: Scope.REQUEST,
      provide: modelName,
      useFactory: (mongooseTenancy: MongooseTenancy, request: Request) => {
        return mongooseTenancy.getModelForTenancy(
          request.headers["tenant"] as string,
          MainModelDefinition,
          DependencyModelDefinitions
        );
      },
      inject: [MongooseTenancy, "REQUEST"]
    };
  }
  getModelForTenancy(
    tenantDatabaseName: string,
    MainModelDefinition: ModelDefinition,
    DependencyModelDefinitions?: ModelDefinition[]
  ) {
    const db = this.connection.useDb(tenantDatabaseName, { useCache: true })
    if (DependencyModelDefinitions) {
      for (let index = 0; index < DependencyModelDefinitions.length; index++) {
        const ModelDefinition = DependencyModelDefinitions[index];
        db.model(ModelDefinition.name, ModelDefinition.schema);
      }
    }
    const model = db.model(MainModelDefinition.name, MainModelDefinition.schema);
    return model
  }
}
