const mongoose = require('mongoose')

/* SCHEMA
    Un esquema sobre el usuario
*/
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
})

/* Definir el toJson
    Eliminamos las propiedades por default como _id y __v
    Y creamos la propiedad id
*/
userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v

        delete returnedObject.password // Cada vez que se use toJson no mostrara esta propiedad
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User