import { Schema, SchemaOptions } from '@nestjs/mongoose';

export const MongooseSchema = (options?: SchemaOptions) => {
    const defaultOptions: SchemaOptions = {
        timestamps: true,
        versionKey: false,
        minimize: true,
    };
    return Schema(Object.assign(defaultOptions, options));
};
