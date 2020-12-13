import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Permission, PermissionAction } from './entities/permission.entity';
import { RoleDocument, Role } from './entities/role.entity';
import { PermissionModel, RoleModel, } from './role-permission.provider';

@Injectable()
export class RolePermissionService {
    constructor(
        @Inject(RoleModel) private readonly roleModel: Model<RoleDocument>,
        @Inject(PermissionModel) private readonly permissionModel: Model<RoleDocument>,
    ) { }

    async findAll() {
        return await this.roleModel.find()
    }
    // 871866ca-548d-4fa7-bc35-f18db5413bd9

    async findOne() {
        const r = await this.roleModel.findById("6b207966-0c21-4c06-ad0b-b6820dd44a77");
        console.log(r);

        return await this.roleModel
            .findById("00be7f05-3846-43e8-9b10-bb46c9b5a860")
            .deepPopulate([
                "permissions.permission",
                "permissions.confirmationRoles"
            ]).exec((err, role) => {
                console.log(err, role);
                console.log(role.permissions);

            })
    }

    async createNewRole() {
        const permission = new Permission();
        permission.action = PermissionAction.ADD;
        permission.active = true;
        permission.entity = "User";

        const newPermission = await this.permissionModel.create(permission)


        const role = new Role();
        role.name = "Role1";
        role.templateName = null;
        role.permissions = [
            {
                permission: newPermission.id,
                confirmationRoles: [
                    "6b207966-0c21-4c06-ad0b-b6820dd44a77"
                ]
            }
        ];
        return await this.roleModel.create(role);
    }
}