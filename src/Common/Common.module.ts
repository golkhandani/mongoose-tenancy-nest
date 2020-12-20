import { Module } from "@nestjs/common"
import { MongooseConnection } from "./Mongoose";

import { MongooseTenancy } from "@Common/Mongoose/Mongoose.tenancy";
import { DatabaseModule } from "./Database/Database.module";



@Module({
  imports: [
    MongooseConnection,
    DatabaseModule
  ],
  controllers: [],
  providers: [
    MongooseTenancy
  ],
  exports: [
    MongooseTenancy,
    DatabaseModule
  ],
})

export class CommonModule { };
