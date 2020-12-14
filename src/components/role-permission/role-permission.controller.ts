import { Controller, Get, Post } from '@nestjs/common';
import { TransformPlainToClass } from 'class-transformer';
import { Role } from './entities/role.entity';
import { RolePermissionService } from './role-permission-service';

@Controller('role-permission')
export class RolePermissionController {
    constructor(
        private readonly rolePermissionService: RolePermissionService
    ) { }

    @Get()
    @TransformPlainToClass(Role)
    async findAll() {
        return this.rolePermissionService.findOne();
    }



    @Post()
    async addNewRole() {
        return this.rolePermissionService.createNewRole();
    }
}