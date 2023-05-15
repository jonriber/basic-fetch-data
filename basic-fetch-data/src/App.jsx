import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({})

  function fetchData(){
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setData(data)) //this is trigger re-render!!!
      .catch(err => console.log(err))
  }

  useEffect(() => { //this one will run while building the component, ONCE!@!!!
    fetchData()
  },[])

  console.log("Data:",data);
  
  return (
    <>
     
      <h1>Fetch data with React</h1>
      <div className="card">
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
