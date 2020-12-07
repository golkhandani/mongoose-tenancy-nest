import { Injectable } from "@nestjs/common";
import * as mongoose from 'mongoose';


@Injectable()
export class ConnectionProvider {
  private connection: string;

  constructor() {
    this.connection = 'mongodb://localhost:27017';
    this.connectStablishment();
  }

  private connectStablishment() {
    return mongoose.connect(this.connection);
  }
}