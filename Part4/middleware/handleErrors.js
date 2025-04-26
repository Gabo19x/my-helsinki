/* MIDDLEWARE
    Al haber un error en los procedimientos HTTP
    Maneja, segun el error, una cosa u otra
 */
module.exports = (err, req, res, next) => {
    console.log("Entro al middle");
    console.log("ERROR:", err.name);
    
    if(err.name == "CastError") {
        res.status(404).end("Error en la busqueda")
    } else {
        res.status(500).end(`Error desconocido: ${err.name}`)
    }
}