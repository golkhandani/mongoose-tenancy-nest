import {
    MongooseModelFactory,
    MongooseProp,
    MongooseSchema
} from '@Common/Mongoose';
import { Exclude, Type } from 'class-transformer';
import { Permission } from './permission.entity';
import { Role } from './role.entity';



@MongooseSchema({
    _id: false,
    id: false,
    timestamps: false
})
export class RolePermission {
    @MongooseProp({
        type: String,
        ref: Permission.name
    })
    @Type(() => Permission)
    permission: string | Permission;

    @MongooseProp([{
        type: String,
        ref: "Role"
    }])
    @Type(() => Role)
    confirmationRoles: string[] | Role[];
}
export const {
    modelSchema: RolePermissionSchema,
} = MongooseModelFactory(RolePermission)