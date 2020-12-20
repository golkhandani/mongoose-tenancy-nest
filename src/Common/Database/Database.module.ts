import { Module, Provider } from "@nestjs/common";
import { ModelDefinition } from "@nestjs/mongoose";
import { Connection } from "mongoose";
import { DatabaseProviders } from "./Database.provider";


@Module({
    imports: [],
    providers: [
        ...DatabaseProviders
    ],
    exports: [
        ...DatabaseProviders
    ]
})

export class DatabaseModule {
    public static ModelSymbol(name: string) {
        return Symbol(name + "_MODEL");
    }
    public static ModelProvider(modelDefinition: ModelDefinition): Provider {
        return {
            provide: modelDefinition.name,
            useFactory: (connection: Connection) => {
                console.log("GET MODEL");

                return connection.model(modelDefinition.name, modelDefinition.schema)
            },
            inject: ['DATABASE_CONNECTION']
        }
    }
}
