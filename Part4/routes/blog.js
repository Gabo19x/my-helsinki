const express = require("express")

const Blog = require("../models/blog.js")
const User = require("../models/user.js")

const rutaBlog = express.Router()

/* FUNCION GET
    Se muestran todos los blogs
*/
rutaBlog.get("/", (req, res, next) => {
    Blog.find({})
        .then((blogs) => { res.status(200).json(blogs) })
        .catch((err) => { next(err) })
})

/* FUNCION POST
    Se crea un nuevo blog.
    Y asigna el id del usuario correspondiente al blog.
    Y al usuario se le asigna la nota completa.
*/
rutaBlog.post("/", async (req, res, next) => {
    try {
        let nuevo = req.body

        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).end("Usuario no encontrado")
        }
        res.json({ 
            title: nuevo.title,
            author: nuevo.author,
            url: nuevo.url,
            likes: nuevo.likes,
            user: user._id
        })

        if(nuevo.content != null) {

            const blog = new Blog({
                title: nuevo.title,
                author: nuevo.author,
                url: nuevo.url,
                likes: nuevo.likes,
                user: user._id
            })

            
            const blogGuardado = await blog.save()
            console.log(`Se creo ${blogGuardado.title}`)

            user.blogs = user.blogs.concat(blogGuardado._id) // Se guarda el blog en el usuario
            await user.save()

            res.status(201).json(blogGuardado)
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
})

module.exports = rutaBlog