import { Inject, Injectable } from '@nestjs/common';
import { plainToClass, TransformPlainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import { Permission, PermissionAction, PermissionDocument } from './entities/permission.entity';
import { RoleDocument, Role } from './entities/role.entity';
import { PermissionModel, RoleModel, } from './role-permission.provider';

@Injectable()
export class RolePermissionService {
    constructor(
        @Inject(RoleModel) private readonly roleModel: Model<RoleDocument>,
        @Inject(PermissionModel) private readonly permissionModel: Model<RoleDocument>,
    ) { }

    @TransformPlainToClass(Role)
    async findAll() {




        const result = await this.roleModel
            .find()
            .lean()
            .deepPopulate([
                "permissions.permission",
                "permissions.confirmationRoles"
            ])
        // const r = await this.roleModel
        //     .findOne()
        //     .deepPopulate([
        //         "permissions.permission",
        //         "permissions.confirmationRoles"
        //     ])
        return result;
    }

    @TransformPlainToClass(Role)
    async findOne() {
        const result = await this.roleModel
            .findOne()
            .lean()
            .deepPopulate([
                "permissions.permission",
                "permissions.confirmationRoles"
            ])
        return result;
    }

    @TransformPlainToClass(Role)
    async createNewRole() {
        const permission = new Permission();
        permission.action = PermissionAction.ADD;
        permission.active = true;
        permission.entity = "User";

        const newPermission = await this.permissionModel.create(permission)


        const role = new Role();
        role.name = "Role2";
        role.templateName = null;
        role.permissions = [
            {
                permission: newPermission.id,
                confirmationRoles: [
                    "c2653926-0aa8-4dc9-8d11-ceb169b5b4da"
                ]
            }
        ];
        const result = await this.roleModel.create(role)
        return result.toObject();
    }
}