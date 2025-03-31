const express = require("express"); // Usar la libreria de express
const app = express();
const cors = require('cors')

require("./mongo.js");

const Blog = require("./models/blog.js")
const handleErrors = require("./middleware/handleErrors.js")

app.use(cors())
app.use(express.json())

/* FUNCION GET
    Se muestran todos los blogs
*/
app.get("/api/blogs", (req, res, next) => {
    Blog.find({})
        .then((blogs) => { res.status(200).json(blogs) })
        .catch((err) => { next(err) })
})

/* FUNCION POST
    Se crea un nuevo blog
*/
app.post("/api/blogs", (req, res, next) => {
    let nuevo = req.body

    if(nuevo.title != null) {

        const blog = new Blog({
            title: nuevo.title,
            author: nuevo.author,
            url: nuevo.url,
            likes: nuevo.likes
        })

        blog.save()
            .then((blog) => {
                console.log(`Se creo ${blog.title}`);
                res.status(204).json(blog)
            })
            .catch((err) => { console.log(err) })
    } else {
        res.status(400).end("No se puede crear")
    }
})

// MIDDLEWARE
app.use(handleErrors)

const port = 9000;
app.listen(port, () => {
    console.log(`Servidor activo: http://localhost:${port}`);
})