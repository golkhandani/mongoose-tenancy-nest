import { Provider, Scope } from "@nestjs/common";
import { MongooseTenancy } from "@Common/Mongoose/Mongoose.tenancy";
import { CountryDefinition, CountryModelName } from './Schema/Country.schema'

export const countryProviders: Provider[] = [
  MongooseTenancy.modelProvider(CountryModelName, CountryDefinition),
]



