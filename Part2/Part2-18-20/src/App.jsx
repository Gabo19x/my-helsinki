import { useEffect, useState } from 'react';

import Form from './components/Form';

function App() {
  const[countrys, setCountrys] = useState();
  const[render, setRender] = useState();
  
  useEffect(() => {
    if(countrys != null) {
      let cs = countrys.map((obj) => {
        return (
          <details key={obj.population}>
            <summary>{obj.name.common} {obj.flag}</summary>
            <p>Real name: {obj.name.official}. Ubication: {obj.continents[0]}. Capital: {obj.capital[0]}</p>
            <img src={obj.flags.png} alt="Country flag" />

          </details>
        );
      });

      setRender(cs);
    }
    
  }, [countrys])

  return (
    <>
      <h1>Countrys</h1>

      <Form countrys={countrys} setCountrys={setCountrys} />

      <hr />
      {
        (render)
        ? <><h2>Results:</h2> {render}</>
        : <></>
      }
    </>
  )
}

export default App
