import { ModelDefinition, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { MongooseBaseSchema } from "./mongooseBase.schema";
import { deepPopulate } from "./mongooseDeepPopulate.plugin";
import { MongooseModelFactory } from "./mongooseModel.factory";
import { MongooseSchema } from "./mongooseSchema.decorator";


export {
    ModelDefinition as MongooseModelDefinition,
    Prop as MongooseProp,
    MongooseSchema,
    MongooseModelFactory,
    Document as MongooseDocument,
    MongooseBaseSchema,
    deepPopulate
}

