import useApi from '../hooks/useApi';

export default function Render({persons, setNot}) {
    let list = persons.map((ele) => (
          <p key={ele.id}>• {ele.name} 📱{ele.num} <button onClick={() => { useApi.DeleteDB(ele.id, ele, setNot) }}>❌</button></p>
        ))
      
    return(
        <>{list}</>
    );
}