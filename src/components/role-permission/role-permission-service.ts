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

        const result = await this.roleModel
            .findById("e3cd609b-fae7-4d7c-aa81-40becb9c8e7c")
            .deepPopulate([
                "permissions.permission",
                "permissions.confirmationRoles"
            ]).exec((err, role) => {
                console.log(err, role);
                console.log(role.permissions);

            })
        return result.toObject()
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
                    "c74b904f-d85a-4125-927b-5610c0d52ed9"
                ]
            }
        ];
        return await this.roleModel.create(role);
    }
}