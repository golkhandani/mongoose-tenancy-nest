import { Connection } from 'mongoose';
import { InjectConnection, ModelDefinition } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';




@Injectable()
export class AbstractRepository {

  constructor(@InjectConnection() private readonly connection: Connection) { }


  setModel(tenantDatabaseName: string, MainModelDefinition: ModelDefinition, DependencyModelDefinitions?: ModelDefinition[]) {
    const connection = this.connection

    const db = connection.useDb(tenantDatabaseName, { useCache: true })

    if (DependencyModelDefinitions) {
      for (let index = 0; index < DependencyModelDefinitions.length; index++) {
        const ModelDefinition = DependencyModelDefinitions[index];
        db.model(ModelDefinition.name, ModelDefinition.schema);
      }
    }

    const model = db.model(MainModelDefinition.name, MainModelDefinition.schema);
    return model as any
  }
}
