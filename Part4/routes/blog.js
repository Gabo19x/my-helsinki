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

        const user = await User.findById(nuevo.userId)
        
        if(user == null) {
            return res.status(404).end("Usuario no encontrado")
        }
        
        if(nuevo != null) {
            console.log("Crear blog con usuario")
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
        } else {
            return res.status(404).end("Blog vacio")
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
})

/* FUNCION PATCH
    Obtiene el id, y los campos a cambiar
    Actualiza el blog
*/
rutaBlog.patch("/:id", (req, res, next) => {
    const id = req.params.id
    let datos = req.body

    Blog.findById(id)
        .then((blog) => {
            if(!blog) {
                return res.status(404).end("No se encontro el blog")
            }

            const nuevoBlog = Object.fromEntries(
                Object.entries(datos).filter(([_, value]) => value !== undefined)
            )

            Object.assign(blog, nuevoBlog)
            return blog.save()
        })
        .then((blogActualizado) => {
            console.log(`Se actualizo parcialmente: ${blogActualizado.title}`)
            res.status(202).json(blogActualizado)
        })
        .catch((err) => { next(err) })
})

/* FUNCION DELETE 
    Borrar un blog con el id
*/
rutaBlog.delete("/:id", (req, res, next) => {
    const id = req.params
    
    if(id != null) {
        Blog.findByIdAndDelete(id)
            .then(() => {
                console.log("Se elimino");
                res.status(204).end(`Se elimino: ${id}`)
            })
            .catch((err) => next(err) )
    } else {
        res.status(404).end("No existe blog con ese ID")
    }
})

module.exports = rutaBlog