import { useEffect, useState } from 'react';

import Form from './components/Form';
import Render from './components/Render';
import Filter from './components/Filter';
import useApi from './hooks/useApi';
import Notification from './components/not';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [not, setNot] = useState("");

  /* USEFFECT
      Antes, se necesita un servidor, yy se esta usando uno JSON.
      Primero se usa el componente useApiGetDB para obtener el JSON completo.
      Segundo, hacemos un fetch para obtener los datos y actualizar la variable persons.
  */
  useEffect(() => {
    useApi
    .GetDB()
    .then(res => {
      // console.log('Promise fulfilled', res.data);
      setPersons(res.data)
    })
  }, []);

 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}></Filter>
      <hr />
      <h2>Numbers</h2>
      <Form persons={persons} setPersons={setPersons} setNot={setNot} />
      <Render persons={persons} setNot={setNot} />
      <hr />
      <Notification not={not} />
    </div>
  )
}

export default App
