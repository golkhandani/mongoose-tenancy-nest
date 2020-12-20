import { Type } from 'class-transformer';
import { deepPopulate, MongooseBaseSchema, MongooseDocument, MongooseModelFactory, MongooseProp, MongooseSchema } from '@Application/Common/Mongoose';

import { RolePermissionSchema, RolePermission } from './role-permission.entity';




@MongooseSchema({
    collection: "role",
})
export class Role extends MongooseBaseSchema {
    @MongooseProp({
        type: String
    })
    name: string;

    @MongooseProp({
        type: String,
        default: null
    })
    templateName: string;

    @MongooseProp({
        type: [RolePermissionSchema],
        default: []
    })
    @Type(() => RolePermission)
    permissions: RolePermission[];

}

export type RoleDocument = Role & MongooseDocument;
export const {
    modelDefinition: RoleDefinition,
    modelSchema: RoleSchema,
} = MongooseModelFactory(Role, [
    {
        plugin: deepPopulate,
        option: {
            populate: {
                "permissions.confirmationRoles": {
                    select: "name"
                },
                "permissions.permission": {
                    select: "-_id action active entity"
                }
            }
        }
    }
]);


