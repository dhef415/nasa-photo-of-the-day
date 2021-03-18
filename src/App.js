import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import styled from 'styled-components'

const StyledDiv = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #3a3737;
  h1{
    text-align: center;
    &:hover{
      background-color: #4c1389;
      transition: all 1s ease-in-out;
    }
    transition: all 1s ease-in-out;
  }

  img{
    align-items:center;
    justify-content:center;
    height:auto;
    width:auto;
    padding:4rem;
  }

  p{
    text-align:center;
  }
`


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
    <StyledDiv>
      <h1> {data.title} </h1>
      <img src= {data.url}></img>
      <p>{data.explanation}</p>
    </StyledDiv>
    
  );


}



export default App;
