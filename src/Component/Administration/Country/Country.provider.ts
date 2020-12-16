import { Provider, Scope } from "@nestjs/common";
import { MongooseTenancy } from "@Common/Mongoose/Mongoose.tenancy";
import { CountryDefinition } from './Schema/Country.schema'

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

