import { Exclude, Type } from 'class-transformer';
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
    @Type(() => Permission)
    permission: string | Permission;

    @Prop([{
        type: String,
        ref: "Role"
    }])
    @Type(() => Role)
    confirmationRoles: string[] | Role[];
}

export const RolePermissionSchema = SchemaFactory.createForClass(RolePermission);
