import { Provider, Scope } from "@nestjs/common"
import { MongooseTenancy } from "src/common/mongoose/mongoose.tenancy";
import { PermissionDefinition } from "./entities/permission.entity"
import { RoleDefinition } from "./entities/role.entity"

export const RoleModel = Symbol("RoleModel");
export const PermissionModel = Symbol("PermissionModel");

export const RolePermissionProviders: Provider[] = [
    {
        scope: Scope.REQUEST,
        provide: RoleModel,
        useFactory: (mongooseTenancy: MongooseTenancy, request: Request) => {
            return mongooseTenancy.getModelForTenancy(
                request.headers["tenant"] as string,
                RoleDefinition,
                [
                    PermissionDefinition
                ]
            )
        },
        inject: [MongooseTenancy, "REQUEST"]
    },
    {
        scope: Scope.REQUEST,
        provide: PermissionModel,
        useFactory: (mongooseTenancy: MongooseTenancy, request: Request) => {
            return mongooseTenancy.getModelForTenancy(
                request.headers["tenant"] as string,
                PermissionDefinition
            )
        },
        inject: [MongooseTenancy, "REQUEST"]
    }
]