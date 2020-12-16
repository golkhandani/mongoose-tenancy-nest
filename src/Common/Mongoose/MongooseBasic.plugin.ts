import { Schema as ObjectSchema } from "mongoose";
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');



export function mongooseBasicPlugin(schema: ObjectSchema) {
    schema.plugin(mongooseLeanVirtuals)

    schema.static("findByIdAndSoftDelete", async function (id: string) {
        const obj = await this.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true, useFindAndModify: false });
        return obj;
    });
    (schema as any).pre(
        ["find", "findOne", "save"],
        function () {
            this.option = this.option && { lean: true }
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
