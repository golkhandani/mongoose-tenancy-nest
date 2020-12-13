import { Provider, Scope } from "@nestjs/common";
import { AbstractRepository } from "src/common/repository/repository.abstract";
import { languageDefinition } from './entities/language.entity'

export const languageProviders: Provider[] = [
  {
    scope: Scope.REQUEST,
    provide: "LanguageModel",
    useFactory: (abstractRepository: AbstractRepository, request: Request) => {
      return abstractRepository.setModel(
        request.headers["tenant"] as string,
        languageDefinition
      )
    },
    inject: [AbstractRepository, "REQUEST"]
  },
]
