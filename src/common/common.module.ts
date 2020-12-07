import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { AbstractRepository } from "./repository/repository.abstract"

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
