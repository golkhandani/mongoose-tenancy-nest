import { v4 } from 'uuid';

import { Exclude } from 'class-transformer';
import { deepPopulate, MongooseBaseSchema, MongooseModelFactory, MongooseProp, MongooseSchema } from '@Application/Common/Mongoose';



export enum PermissionAction {
    ADD = "ADD",
    DELETE = "DELETE",

}

@MongooseSchema({
    collection: "permission"
})
export class Permission extends MongooseBaseSchema {
    @MongooseProp({
        type: String
    })
    entity: string;

    @MongooseProp({
        type: String,
        enum: Object.keys(PermissionAction)
    })
    action: PermissionAction;

    @MongooseProp({
        type: Boolean
    })
    active: boolean;
}

export type PermissionDocument = Permission & Document;
export const {
    modelDefinition: PermissionDefinition,
    modelSchema: PermissionSchema,
} = MongooseModelFactory(Permission,
    [
        {
            plugin: deepPopulate
        }
    ]
);


