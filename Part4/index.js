const express = require("express"); // Usar la libreria de express
const app = express();
const cors = require('cors')

require("./mongo.js");
const handleErrors = require("./middleware/handleErrors.js")

app.use(cors())
app.use(express.json())

// Toda la seccion de blogs
const rutaBlog = require("./routes/blog.js")
app.use("/api/blogs", rutaBlog)

// Toda la seccion de usuarios
const nuevo = require("./routes/user.js");
app.use("/api/users", nuevo);

// app.get("/test", (req, res, next) => {
//   res.status(200).json({ message: 'El servidor está funcionando' })
// })

// app.post('/api/test-db', (req, res) => {
//   console.log('Cuerpo de la solicitud:', req.body);
//   res.json({ message: 'POST recibido correctamente', body: req.body });
// });

// MIDDLEWARE
app.use(handleErrors)

const port = 9000;
app.listen(port, () => {
    console.log(`Servidor activo: http://localhost:${port}`);
})