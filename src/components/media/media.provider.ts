import { Provider, Scope } from "@nestjs/common";
import { MongooseTenancy } from "src/common/mongoose/mongoose.tenancy";
import { MediaDefinition } from "./schema/media.schema";

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

