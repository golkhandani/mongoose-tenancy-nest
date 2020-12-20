import { Module } from '@nestjs/common';
import { MediaModule } from './Media/media.module';
import { RolePermissionModule } from './RolePermission/role-permission.module';

const components = [
    MediaModule,
    RolePermissionModule
];

@Module({
    imports: components,
    exports: components
})
export class ManagementModule { };