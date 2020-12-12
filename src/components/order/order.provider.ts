import { Provider, Scope } from "@nestjs/common";
import { AbstractRepository } from "src/common/repository/repository.abstract";
import { MenuItemDefinition } from "./schema/MenuItem";
import { OrderDefinition } from "./schema/Order";
import { RecipeDefinition } from "./schema/Recipe";
import { Table, TableDefinition } from "./schema/Table";
import { UserDefinition } from "./schema/User";

export const OrderProviders: Provider[] = [
    {
        scope: Scope.REQUEST,
        provide: "Order_Model",
        useFactory: (abstractRepository: AbstractRepository, request: Request) => {
            console.log(request.headers["tenant"]);

            return abstractRepository.setModel(
                request.headers["tenant"] as string,
                OrderDefinition,
                [
                    UserDefinition,
                    TableDefinition,
                    MenuItemDefinition,
                    RecipeDefinition
                ]
            )
        },
        inject: [AbstractRepository, "REQUEST"]
    },
    {
        scope: Scope.REQUEST,
        provide: "Table_Model",
        useFactory: (abstractRepository: AbstractRepository, request: Request) => {
            console.log(request.headers["tenant"]);

            return abstractRepository.setModel(
                request.headers["tenant"] as string,
                TableDefinition
            )
        },
        inject: [AbstractRepository, "REQUEST"]
    }
]