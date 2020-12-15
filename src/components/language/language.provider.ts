import { Provider, Scope } from "@nestjs/common";
import { MongooseTenancy } from "src/common/mongoose/mongoose.tenancy";
import { LanguageDefinition } from './entities/language.entity'

export const languageProviders: Provider[] = [
  {
    scope: Scope.REQUEST,
    provide: "LanguageModel",
    useFactory: (mongooseTenancy: MongooseTenancy, request: Request) => {
      return mongooseTenancy.getModelForTenancy(
        request.headers["tenant"] as string,
        LanguageDefinition
      )
    },
    inject: [MongooseTenancy, "REQUEST"]
  },
]

