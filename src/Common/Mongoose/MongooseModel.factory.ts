import { ModelDefinition, SchemaFactory } from '@nestjs/mongoose';
import { mongooseBasicPlugin } from "@Common/Mongoose/MongooseBasic.plugin";

export function MongooseModelFactory(modelClass: any, plugins: { plugin: any; option?: any; }[] = []) {
    const modelSchema = SchemaFactory.createForClass(modelClass);
    modelSchema.plugin(mongooseBasicPlugin);
    plugins.forEach((plugin) => {
        modelSchema.plugin(plugin.plugin, plugin.option || {});
    });
    const modelDefinition: ModelDefinition = {
        name: modelClass.name,
        schema: modelSchema
    };
    return {
        injectName: modelClass.name + "Model",
        modelSchema,
        modelDefinition
    };
}
