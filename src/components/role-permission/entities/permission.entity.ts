import { v4 } from 'uuid';
import { BaseSchema, ModelFactory, MongooseSchema, Prop } from 'src/common/helper/mongoose/mongoose.helper';
import { Exclude } from 'class-transformer';
const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);


export enum PermissionAction {
    ADD = "ADD",
    DELETE = "DELETE",

}

@MongooseSchema({
    collection: "permission"
})
export class Permission extends BaseSchema {
    @Prop({
        type: String
    })
    entity: string;

    @Prop({
        type: String,
        enum: Object.keys(PermissionAction)
    })
    action: PermissionAction;

    @Prop({
        type: Boolean
    })
    active: boolean;
}

export type PermissionDocument = Permission & Document;
export const {
    modelDefinition: PermissionDefinition,
    modelSchema: PermissionSchema,
} = ModelFactory(Permission,
    [
        {
            plugin: deepPopulate
        }
    ]
);


