import { useState, useEffect } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [data, setData] = useState([]) //data is expected to be an array

  function fetchData(){
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setData(data.results)) //this is trigger re-render!!!
      .catch(err => console.log(err))
  }

  useEffect(() => { //this one will run while building the component, ONCE!@!!!
    fetchData()
  },[])

  useEffect(() =>{
    if(data.length) document.title = data[0]["name"]["first"]
  },[data])

  console.log("Data:",data);

  return (
    <>
     
      <h1>Fetch data with React</h1>
      <div className="card">
       {data.length>0 ?
        <UserProfile data={data[0]}/>
      :
        <h3>Loading content</h3>
      }
       
      </div>
      <p className="read-the-docs">
        Check the code ate github repo:<a href='https://github.com/jonriber/basic-fetch-data'>HERE</a>
      </p>

      <footer><b>Jonatas Ribeiro</b>.2023#</footer>
    </>
  )
}

export default App
