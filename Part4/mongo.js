const mongoose = require('mongoose');
const password = require("./clave.js");

const url = `mongodb+srv://geo:${password}@cluster8000.aranb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster8000`;
mongoose.set('strictQuery',false);

mongoose.connect(url)
.then(() => { console.log("Conexion a la DB");
})
.catch((err) => { console.error(`ERROR: ${err}`);
});