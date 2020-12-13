import { Provider, Scope } from "@nestjs/common";
import { AbstractRepository } from "src/common/repository/repository.abstract";
import { CountryDefinition } from './entities/country.schema'

export const countryProviders: Provider[] = [
  {
    scope: Scope.REQUEST,
    provide: "CountryModel",
    useFactory: (abstractRepository: AbstractRepository, request: Request) => {
      return abstractRepository.setModel(
        request.headers["tenant"] as string,
        CountryDefinition
      )
    },
    inject: [AbstractRepository, "REQUEST"]
  },
]

