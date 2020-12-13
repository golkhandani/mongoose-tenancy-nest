import { BaseSchema, MongooseDocument, ModelFactory, MongooseSchema, Prop } from 'src/common/helper/mongoose/mongoose.helper';
import { RolePermissionSchema, RolePermission } from './role-permission.entity';

const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);


@MongooseSchema({
    collection: "role"
})
export class Role extends BaseSchema {
    @Prop({
        type: String
    })
    name: string;

    @Prop({
        type: String,
        default: null
    })
    templateName: string;

    @Prop({
        type: [RolePermissionSchema],
        default: []
    })
    permissions: RolePermission[];

}

export type RoleDocument = Role & MongooseDocument;
export const {
    modelDefinition: RoleDefinition,
    modelSchema: RoleSchema,
} = ModelFactory(Role, [
    {
        plugin: deepPopulate,
        option: {
            populate: {
                "permissions.confirmationRoles": {
                    select: "name quantity count recipes"
                }
            }
        }
    }
]);


