import { Schema, Document } from "mongoose";

function basicPlugin(schema: Schema) {
    // (schema as any).post(["save", "create", "insert", "insertMany"], function (docs) {
    //     console.log("INSERT", docs);

    //     if (!Array.isArray(docs)) {
    //         docs = [docs];
    //     }
    //     const data = docs.map(doc => {
    //         console.log(doc._doc);

    //         doc._doc["Id"] = doc._doc._id;
    //         delete doc._doc._id;
    //         delete doc._doc.__v;
    //         return doc._doc;
    //     })
    //     console.log("data", data);

    //     return data;
    // })
    // schema.post('find', function (docs: Document[]) {
    //     console.log(docs);
    //     return docs.map(doc => {
    //         doc["Id"] = doc._id;
    //         delete doc._id;
    //         return doc;
    //     })
    // });
    // schema.post('findOne', function (doc: Document) {
    //     console.log(doc);
    //     doc["Id"] = doc._id;
    //     delete doc._id;
    //     return doc;
    // });

    schema.set("timestamps", {
        createdAt: true,
        updatedAt: true,
        currentTime: () => {
            return new Date()
        }
    });
    // schema.set("toObject", {
    //     versionKey: false,
    //     virtuals: false,
    //     transform: (doc) => {
    //         console.log("ToObject: ", doc._doc);

    //         // doc._doc._id = doc._doc.uid
    //         delete doc._doc.__v;
    //         delete doc._doc._id;
    //         return doc._doc;
    //     }
    // });
    schema.set("toJSON", {
        versionKey: false,
        virtuals: false,
        transform: (doc) => {

            console.log("doc before: ", doc._doc);

            doc._doc.id = doc._doc._id ? doc._doc._id : doc._doc.id;
            console.log("doc after subsitute: ", doc._doc);
            delete doc._doc.__v;
            console.log("doc after delete __v: ", doc._doc);

            delete doc._doc._id;

            return doc._doc;
        }
    })
};


export {
    basicPlugin
}