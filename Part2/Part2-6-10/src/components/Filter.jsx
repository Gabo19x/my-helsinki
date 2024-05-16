import { useState } from "react";

export default function Filter({persons}) {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    function Change(set, e) {
        set(e.target.value);
    }

    function Search(e) {
        e.preventDefault();

        let newList = persons.filter((ele) => ele.name.toLowerCase() == search.toLowerCase() );
        console.log(newList);
        setList(newList);
    }

    return(
        <>
        <form>
            <div>
            Search: <input onChange={(e) => Change(setSearch, e)}/>
            </div>
            <div>
            <button onClick={(e) => Search(e)} type="submit">search</button>
            </div>
        </form>

        {
            list.map((ele) => (
                <p key={ele.num}>○ {ele.name} 📱{ele.num}</p>
            ))
        }
        </>
    );
}