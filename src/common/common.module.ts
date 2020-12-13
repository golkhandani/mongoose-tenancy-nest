import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { AbstractRepository } from "./repository/repository.abstract"
import * as mongoose from "mongoose";

mongoose.set("debug", true);

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017')
  ],
  controllers: [],
  providers: [
    AbstractRepository
  ],
  exports: [
    AbstractRepository
  ],
})

export class CommonModule { };
