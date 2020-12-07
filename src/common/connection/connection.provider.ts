import { Injectable } from "@nestjs/common";
import * as mongoose from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';



@Injectable()
export class ConnectionProvider {
  private connection: string;

  constructor(@InjectConnection() connection: Connection) {
    // this.connection = 'mongodb://localhost:27017';
    this.getConnection();
  }

  private getConnection() {
    return this.connection
  }
}