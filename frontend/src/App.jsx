import { useEffect, useState } from "react"

function App() {

  const [data,setdata]=useState([]);
  
  useEffect( ()=>{
    const fetchdata=async ()=>{
    const ans= await fetch("http://localhost:3000");
    const res= await ans.json();
    setdata(res);
  };
  fetchdata();
},[]);

  return (
    <>
      <h1>Data from server is </h1>
      <ul>
        {
          data.map((item,index)=>(
            <li key={index}>{item.name}-{item.age}-{item.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
