import { ModelDefinition, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { MongooseBaseSchema } from "./mongooseBase.schema";
import { deepPopulate } from "./mongooseDeepPopulate.plugin";
import { MongooseModelFactory } from "./mongooseModel.factory";
import { MongooseSchema } from "./mongooseSchema.decorator";
import { MongooseModule } from "@nestjs/mongoose"
import * as mongoose from "mongoose";


// const __setOptions = mongoose.Query.prototype.setOptions;

// mongoose.Query.prototype.setOptions = function (options) {
//   __setOptions.apply(this, arguments);
//   if (this.options.lean == null) this.options.lean = true;
//   return this;
// };

mongoose.set("debug", true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const MongooseConnection = MongooseModule.forRoot('mongodb://localhost:30003',
    {
        w: 'majority',
        useFindAndModify: false
    }
);
export {
    MongooseConnection,
    ModelDefinition as MongooseModelDefinition,
    Prop as MongooseProp,
    MongooseSchema,
    MongooseModelFactory,
    Document as MongooseDocument,
    MongooseBaseSchema,
    deepPopulate
}

