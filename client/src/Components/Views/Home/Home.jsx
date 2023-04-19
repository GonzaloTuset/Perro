import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import NavBar from "../../NavBar/NavBar"
import { fetchData } from "../../../redux/actions";

const Home = () =>{
  const dispatch = useDispatch()
  const selector = useSelector(state=>state.dogs)
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return(
    <div>
      <header>
       <NavBar/>
        </header>
    <div>
      {
        selector.map(({id,image,name,temperament,temperaments,weight})=>{
          return(
        <div key={id}>
          <img src={image}/>
          <h1>{name}</h1>
          <h2>{temperament}{temperaments}</h2>
          <h3>{weight}</h3>
        </div>
          )})
      }
    </div>
    
    </div>
  )
}
export default Home