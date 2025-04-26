const mongoose = require('mongoose')

/* SCHEMA
    Un esquema sobre una entrada de blog
*/
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

/* Definir el toJson
    Eliminamos las propiedades por default como _id y __v
    Y creamos la propiedad id
*/
blogSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
})

const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog
  