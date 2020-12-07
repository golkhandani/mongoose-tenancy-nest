import { Document } from 'mongoose';

export interface IRepository<T extends Document> {
  getModel(tenantDatabaseName: string);
}
