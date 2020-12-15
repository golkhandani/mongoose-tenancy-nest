import { Provider, Scope } from "@nestjs/common";
import { MongooseTenancy } from "src/common/mongoose/mongoose.tenancy";
import { CountryDefinition } from './entities/country.schema'

export const countryProviders: Provider[] = [
  {
    scope: Scope.REQUEST,
    provide: "CountryModel",
    useFactory: (mongooseTenancy: MongooseTenancy, request: Request) => {
      return mongooseTenancy.getModelForTenancy(
        request.headers["tenant"] as string,
        CountryDefinition
      )
    },
    inject: [MongooseTenancy, "REQUEST"]
  },
]

