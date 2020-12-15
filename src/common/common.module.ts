import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import * as mongoose from "mongoose";
import { MongooseTenancy } from "./mongoose/mongoose.tenancy";

mongoose.set("debug", true);

const __setOptions = mongoose.Query.prototype.setOptions;

mongoose.Query.prototype.setOptions = function (options) {
  __setOptions.apply(this, arguments);
  if (this.options.lean == null) this.options.lean = true;
  return this;
};

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:30003', { w: 'majority' })
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
