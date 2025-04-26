const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require("../models/user.js")

/* FUNCION GET
    Se muestran todos los usuarios
*/
router.get("/", (req, res, next) => {
    User.find({})
        .then((users) => { res.status(200).json(users) })
        .catch((err) => { next(err) })
})

/* FUNCION POST
    Crea un usuario
    Se usa async y await para usar el hash
*/
router.post("/", async (req, res) => {
  try {
    const nuevo = req.body;
    
    if (!nuevo.password) {
      return res.status(400).json({ error: "No se puede crear: falta contraseña" });
    }
    
    const existente = await User.findOne({ username: nuevo.username });
    if (existente) {
        return res.status(409).json({ error: "Ya existe ese usuario" });
    }

    const rondas = 10 // Es la complejidad del Hash (mas seguro pero mas costoso)
    let passwordHash = await bcrypt.hash(nuevo.password, rondas)

    const user = new User({
        username: nuevo.username,
        name: nuevo.name,
        password: passwordHash,
        blogs: []
    })

    const userGuardado = await user.save()
    res.status(201).json(userGuardado)
    
    res.json({ message: "Todo funcionó correctamente" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;