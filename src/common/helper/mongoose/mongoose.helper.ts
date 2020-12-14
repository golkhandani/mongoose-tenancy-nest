import { ModelDefinition, Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document, Schema as ObjectSchema } from "mongoose";
import { v4 as uuid } from 'uuid';


function basicPlugin(schema: ObjectSchema) {

    schema.static("findByIdAndSoftDelete", async function (id: string) {
        const obj = await this.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true, useFindAndModify: false });
        return obj
    });


    schema.set("toJSON", {
        versionKey: false,
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._id;
        }
    })
    schema.set("toObject", {
        versionKey: false,
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._id;
        }

    })
};


function ModelFactory(modelClass: any, plugins: { plugin: any, option?: any }[] = []) {
    const modelSchema = SchemaFactory.createForClass(modelClass);
    modelSchema.plugin(basicPlugin);
    plugins.forEach((plugin) => {
        modelSchema.plugin(plugin.plugin, plugin.option || {});
    })
    const modelDefinition: ModelDefinition = {
        name: modelClass.name,
        schema: modelSchema
    };
    return {
        modelSchema,
        modelDefinition
    }
}
const MongooseSchema = (options?: SchemaOptions) => {
    const defaultOptions = {
        timestamps: true,
    }
    return Schema(Object.assign(defaultOptions, options))
}

@MongooseSchema()
export class BaseSchema {
    @Prop({
        type: String,
        default: uuid,
        alias: "id"
    })
    _id?: string;
    id?: string;


    @Prop({
        type: Date,
        default: new Date()
    })
    createdAt?: Date;

    @Prop({
        type: Date,
        default: new Date()
    })
    updatedAt?: Date;

    @Prop({
        type: Date,
        default: null
    })
    @Exclude()
    deletedAt?: Date;
}

export {
    ModelDefinition,
    Prop,
    MongooseSchema,
    SchemaFactory,
    ModelFactory,
    Document as MongooseDocument,
    basicPlugin
}

