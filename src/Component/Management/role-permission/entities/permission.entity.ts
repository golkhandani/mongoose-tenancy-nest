
import {
    deepPopulate,
    MongooseBaseSchema,
    MongooseDocument,
    MongooseModelFactory,
    MongooseProp,
    MongooseSchema
} from '@Common/Mongoose';



export enum PermissionAction {
    ADD = "ADD",
    DELETE = "DELETE",

}

@MongooseSchema({
    collection: "permission"
})
export class Permission extends MongooseBaseSchema {
    @MongooseProp({
        type: String
    })
    entity: string;

    @MongooseProp({
        type: String,
        enum: Object.keys(PermissionAction)
    })
    action: PermissionAction;

    @MongooseProp({
        type: Boolean
    })
    active: boolean;
}

export type PermissionDocument = Permission & MongooseDocument;
export const {
    modelDefinition: PermissionDefinition,
    modelSchema: PermissionSchema,
} = MongooseModelFactory(Permission,
    [
        {
            plugin: deepPopulate
        }
    ]
);


