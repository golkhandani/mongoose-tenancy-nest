import { Module } from "@nestjs/common"
import { MongooseConnection } from "./mongoose";

import { MongooseTenancy } from "./mongoose/mongoose.tenancy";



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
