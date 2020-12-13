import { Provider, Scope } from "@nestjs/common";
import { AbstractRepository } from "src/common/repository/repository.abstract";
import { MediaDefinition } from "./schema/media.schema";

export const mediaProviders: Provider[] = [
    {
        scope: Scope.REQUEST,
        provide: "Media_Model",
        useFactory: (abstractRepository: AbstractRepository, request: Request) => {
            return abstractRepository.setModel(
                request.headers["tenant"] as string,
                MediaDefinition
            )
        },
        inject: [AbstractRepository, "REQUEST"]
    },
]

