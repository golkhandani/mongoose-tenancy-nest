import { Provider, Scope } from "@nestjs/common"
import { AbstractRepository } from "src/common/repository/repository.abstract"
import { PermissionDefinition } from "./entities/permission.entity"
import { RoleDefinition } from "./entities/role.entity"

export const RoleModel = Symbol("RoleModel");
export const PermissionModel = Symbol("PermissionModel");

export const RolePermissionProviders: Provider[] = [
    {
        scope: Scope.REQUEST,
        provide: RoleModel,
        useFactory: (abstractRepository: AbstractRepository, request: Request) => {
            return abstractRepository.setModel(
                request.headers["tenant"] as string,
                RoleDefinition,
                [
                    PermissionDefinition
                ]
            )
        },
        inject: [AbstractRepository, "REQUEST"]
    },
    {
        scope: Scope.REQUEST,
        provide: PermissionModel,
        useFactory: (abstractRepository: AbstractRepository, request: Request) => {
            return abstractRepository.setModel(
                request.headers["tenant"] as string,
                PermissionDefinition
            )
        },
        inject: [AbstractRepository, "REQUEST"]
    }
]