import { ModelDefinition, Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';


@MongooseSchema()
export class Table {
    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: String
    })
    status: string;

    @Prop({
        type: Number
    })
    capacity: number;
}
export type TableDocument = Table & Document;
export const TableSchema = SchemaFactory.createForClass(Table);
export const TableDefinition: ModelDefinition = {
    collection: "table",
    name: "Table",
    schema: TableSchema
};
