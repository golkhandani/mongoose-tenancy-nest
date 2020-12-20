import * as mongoose from "mongoose";
import { Request } from "express";
import { REQUEST } from "@nestjs/core";
import { Scope, NotFoundException } from "@nestjs/common";

export const mongoConnections = new Map();


export const DatabaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        scope: Scope.REQUEST,
        useFactory: async (req: Request): Promise<typeof mongoose> => {
            const tenantDB: string = req.headers["x-tenant"] as string;
            if (!tenantDB) {
                throw new NotFoundException('AppName does not exits');
            }
            console.log("GET CONNECTION");

            let connection = mongoConnections.get(tenantDB);
            if (!connection) {
                console.log("CREATE CONNECTION");

                connection = mongoose.createConnection(`mongodb://localhost:27017/${tenantDB}`, { useNewUrlParser: true })
                mongoConnections.set(tenantDB, connection)
            }
            return connection;

        },
        inject: [REQUEST]
    }
];