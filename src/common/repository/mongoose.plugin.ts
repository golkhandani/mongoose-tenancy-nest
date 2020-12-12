import { Schema, Document } from "mongoose";

function loadedAtPlugin(schema: Schema) {
    // schema.post('find', function (docs: Document[]) {
    //     console.log(docs);
    // });


    // schema.post('findOne', function (docs: Document[]) {
    //     console.log(docs);
    // });

    // schema.set('toObject', {
    //     virtuals: false, transform: (doc) => {
    //         doc._doc.Id = doc._id
    //         delete doc._doc._id;
    //         return doc._doc;
    //     }
    // })

    schema.set('toJSON', {
        virtuals: false, transform: (doc) => {
            doc._doc.Id = doc._id
            delete doc._doc._id;
            return doc._doc;
        }
    })
};


export {
    loadedAtPlugin
}