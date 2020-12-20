import { Provider, Scope } from "@nestjs/common";
import { MongooseTenancy } from "@Application/Common/Mongoose/Mongoose.tenancy";
import { MediaDefinition } from "./Schema/media.schema";

export const mediaProviders: Provider[] = [
    {
        provide: "Media_Model",
        useFactory: (mongooseTenancy: MongooseTenancy, request: Request) => {
            return mongooseTenancy.getModelForTenancy(
                request.headers["tenant"] as string || "Fabizi_1",
                MediaDefinition
            )
        },
        inject: [MongooseTenancy, "REQUEST"]
    },
]

