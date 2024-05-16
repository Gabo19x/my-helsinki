import { useEffect, useState } from 'react';

import useApi from '../hooks/useApi';

export default function Form({persons, setPersons, setNot}) {
    const [newName, setNewName] = useState('');
    const [newNumber, setNumber] = useState(0);

    function Add(e) {
        e.preventDefault();
    
        if(!SearchInArray(persons, newName)) {
            let list = [...persons, {name: `${newName}`, num: newNumber}];
            setPersons(list);
            alert(`Se agrego: ${newName} con ${newNumber}`);

            useApi.CreateDB({name: `${newName}`, num: newNumber});

        } else {
            persons.forEach(ele => { 
                if(ele.name === newName) {
                    let newObj = {...ele, num: newNumber}
                    useApi.UpdateDB(ele.id, newObj, setNot); 
                }
            });
        }
    }
    
    function SearchInArray(list, obj) {
        let b = false;
        list.forEach(ele => { if(ele.name === obj) b = true; });
        return b;
    }

    function Change(set, e) {
        set(e.target.value);
    }

    return (
        <form>
            <div>
            name: <input onChange={(e) => Change(setNewName, e)}/>
            Phone: <input onChange={(e) => Change(setNumber, e)} />
            </div>
            <div>
            <button onClick={(e) => Add(e)} type="submit">add</button>
            </div>
        </form>
    );
}