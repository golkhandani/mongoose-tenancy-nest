import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { RolePermissionService } from './role-permission-service';
import { RolePermissionController } from './role-permission.controller';
import { RolePermissionProviders } from './role-permission.provider';

@Module({
    imports: [
        CommonModule,
    ],
    controllers: [
        RolePermissionController
    ],
    providers: [
        RolePermissionService,
        ...RolePermissionProviders
    ],
})
export class RolePermissionModule { };