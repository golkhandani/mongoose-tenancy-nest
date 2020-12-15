import { Schema as ObjectSchema } from "mongoose";



export function mongooseBasicPlugin(schema: ObjectSchema) {


    schema.static("findByIdAndSoftDelete", async function (id: string) {
        const obj = await this.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true, useFindAndModify: false });
        return obj;
    });
    (schema as any).post(
        ["insertOne", "create", "save"],
        function (doc) {
            return doc.toObject();
        }
    );

    // schema.set("toJSON", {
    //     versionKey: false,
    //     virtuals: true,
    //     transform: function (doc, ret) {
    //         delete ret._id;
    //     }
    // });
    // schema.set("toObject", {
    //     versionKey: false,
    //     virtuals: true,
    //     transform: function (doc, ret) {
    //         delete ret._id;
    //     }
    // });
}
;
