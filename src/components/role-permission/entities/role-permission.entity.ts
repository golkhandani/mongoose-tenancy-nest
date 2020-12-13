import { MongooseSchema, Prop, SchemaFactory } from 'src/common/helper/mongoose/mongoose.helper';
import { Permission } from './permission.entity';
import { Role } from './role.entity';



@MongooseSchema({
    _id: false,
    id: false,
    timestamps: false
})
export class RolePermission {
    @Prop({
        type: String,
        ref: Permission.name
    })
    permission: string | Permission;

    @Prop([{
        type: String,
        ref: "Role"
    }])
    confirmationRoles: string[];
}

export const RolePermissionSchema = SchemaFactory.createForClass(RolePermission);
