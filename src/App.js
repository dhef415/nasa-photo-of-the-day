import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";




function App() {
  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=bo5ljKilOEHCCYg0CsBLmWMVfKwHhZsv4S8cCpIS')
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])



  return (
    <div className="App">
      <h1> {data.title} </h1>
      <img src= {data.url}></img>
    </div>
    
  );


}

export default App;
