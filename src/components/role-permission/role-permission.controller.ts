import { Controller, Get, Post } from '@nestjs/common';
import { RolePermissionService } from './role-permission-service';

@Controller('role-permission')
export class RolePermissionController {
    constructor(
        private readonly rolePermissionService: RolePermissionService
    ) { }

    @Get()
    async findAll() {
        return await this.rolePermissionService.findAll();
    }

    @Post()
    async addNewRole() {
        return this.rolePermissionService.createNewRole();
    }
}