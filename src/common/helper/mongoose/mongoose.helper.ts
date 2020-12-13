import { ModelDefinition, Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document, Schema as ObjectSchema } from "mongoose";
import { v4 as uuid } from 'uuid';


function basicPlugin(schema: ObjectSchema) {

    schema.static("findByIdAndSoftDelete", async function (id: string) {
        const obj = await this.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true, useFindAndModify: false });
        return obj
    });
    schema.virtual('id')
        .get(function () {
            return this._id;
        })
        .set(function (v: string) {
            console.log("SET ID: ", v);

            this._id = v;
        });

    schema.set("toJSON", {
        versionKey: false,
        virtuals: false,
        transform: (doc) => {
            doc._doc.id = doc._doc._id ? doc._doc._id : doc._doc.id;
            delete doc._doc.__v;
            delete doc._doc._id;
            return doc._doc;
        }
    })
    schema.set("toObject", {
        versionKey: false,
        virtuals: false,
        transform: (doc) => {
            doc._doc.id = doc._doc._id ? doc._doc._id : doc._doc.id;
            delete doc._doc.__v;
            delete doc._doc._id;
            return doc._doc;
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
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
    return Schema(Object.assign(defaultOptions, options))
}

@MongooseSchema()
export class BaseSchema {
    @Exclude()
    @Prop({
        type: String,
        default: uuid
    })
    _id?: string;
    @Expose()
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

