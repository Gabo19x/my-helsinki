import axios from 'axios'
const urlApi = "http://localhost:3001/users";

/* FUNCION
    Usa la libreria axios y el metodo get, para obtener todos los datos del servidor
*/
function GetDB() {
    return axios.get(urlApi);
}

/* FUNCION
    Usa la libreria axios y el metodo post, para crear y agregar un objeto nuevo al servidor.
    @params el objeto a agregar
*/
function CreateDB(obj) {
    return axios.post(urlApi, obj);
}

/* FUNCION
    Usa la libreria axios y el metodo delete, para borrar un objeto, con confirmacion.
    @params el id del objeto; el objeto
 */
function DeleteDB(id, obj, setNot) {
    if(window.confirm(`Quieres borrar ${obj.name}`)) {
        axios.delete(urlApi + `/${id}`)
        .then(res => { SendNotification(`✅ Se ha borrado: ${obj.name}`, setNot); })
        .catch(error => {
            console.log("ERROR:", error);
            SendNotification(`❌ No se ha podido borrar a: ${obj.name}`, setNot);
        });
    }
}

/* FUNCION
    [...] y el metodo put, para actualizar
    @params el id; y el objeto
*/
function UpdateDB(id, obj, setNot) {
    if(window.confirm(`Quieres actualizar ${obj.name}`)) {
        axios.put(urlApi + `/${id}`, obj)
        .then(res => { SendNotification(`✅ Se ha actualizado: ${obj.name}`, setNot); } )
        .catch(error => {
            console.log("ERROR:", error);
            SendNotification(`❌ No se ha podido actualizar a: ${obj.name}`, setNot);
        });
    }
}

function SendNotification(men, set) {
    set(men);
    setTimeout(() => set(null), 5000);
}

export default { 
  GetDB: GetDB, 
  CreateDB: CreateDB,
  DeleteDB: DeleteDB,
  UpdateDB: UpdateDB
}