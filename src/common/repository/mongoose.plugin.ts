import { Schema, Document } from "mongoose";

function basicPlugin(schema: Schema) {

    // schema.static("findByIdAndSoftDelete", async function (id: string) {
    //     const obj = await this.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true, useFindAndModify: false });
    //     return obj
    // });


    schema.set("toJSON", {
        versionKey: false,
        virtuals: true,
        transform: (doc) => {
            doc._doc.id = doc._doc._id ? doc._doc._id : doc._doc.id;
            delete doc._doc.__v;
            delete doc._doc._id;
            return doc._doc;
        }
    })
};


export {
    basicPlugin
}