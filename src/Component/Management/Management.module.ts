import { Module } from '@nestjs/common';
import { MediaModule } from './media/media.module';
import { RolePermissionModule } from './role-permission/role-permission.module';

const components = [
    MediaModule,
    RolePermissionModule
];

@Module({
    imports: components,
    exports: components
})
export class ManagementModule { };