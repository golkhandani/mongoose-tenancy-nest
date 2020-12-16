import { Module } from "@nestjs/common"
import { MongooseConnection } from "./Mongoose";

import { MongooseTenancy } from "@Common/Mongoose/Mongoose.tenancy";



@Module({
  imports: [
    MongooseConnection
  ],
  controllers: [],
  providers: [
    MongooseTenancy
  ],
  exports: [
    MongooseTenancy
  ],
})

export class CommonModule { };
