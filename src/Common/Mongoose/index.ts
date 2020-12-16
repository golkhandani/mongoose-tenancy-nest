import * as mongoose from "mongoose";
import { Model, Document } from 'mongoose';
import { MongooseModule, ModelDefinition, Prop } from "@nestjs/mongoose"
import { MongooseSchema } from "@Common/Mongoose/MongooseSchema.decorator";
import { MongooseModelFactory } from "@Common/Mongoose/MongooseModel.factory";
import { MongooseBaseSchema } from "@Common/Mongoose/MongooseBase.schema";
import { deepPopulate } from "@Common/Mongoose/MongooseDeepPopulate.plugin";


// mongoose.set("debug", true);
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
    Model as MongooseModel,
    deepPopulate
}

