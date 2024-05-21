import { useState } from "react";

import useApi from "../hooks/useApi";

export default function Form({countrys, setCountrys}) {
    const[country, setCountry] = useState();

    function Change(set, e) {
        set(e.target.value);
    }

    /* FUNCION
        Obtiene los datos de la API.
        Luego los filtra segun el pais buscado.
        Entonces, mira si tiene mas de 10 elementos y si asi es:
        Lo guarda para ser mostrado.
        @params evento
     */
    function Search(event) {
        event.preventDefault();

        useApi.GetDB()
        .then((res) => {
            let search = res.data.filter((ele) => ele.name.common.toLowerCase().includes(country.toLowerCase()) );

            if (search.length > 10) {
                alert("❕❕ Hay demasiados paises. Por favor, sea mas especifico.");
            } else {
                setCountrys(search);
            }
            
        })
        .catch((error) => { alert("❌ No se ha podido cargar los datos"); console.log(error); })
    }
    
    return(
        <form>
            <div>
            Country: <input onChange={(e) => Change(setCountry, e)}/>
            </div>

            <div>
            <button onClick={(e) => Search(e)} type="submit">🔎 Search</button>
            </div>
        </form>
    );
}