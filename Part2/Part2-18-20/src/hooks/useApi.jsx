import axios from 'axios';
const url = "https://studies.cs.helsinki.fi/restcountries/api/all";

/* FUNCION
    Usa la libreria axios y el metodo get, para obtener todos los datos del servidor
*/
function GetDB() {
    return axios.get(url);
}

export default { 
    GetDB: GetDB
}