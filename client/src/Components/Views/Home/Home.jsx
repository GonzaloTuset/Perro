import React from "react"
import NavBar from "../../NavBar/NavBar"
import Cards from "../../Cards/Cards"
import SearchBar from '../../SearchBar/SearchBar'
import Style from './Home.module.css'

const Home = () =>{
  return(
    <div>
      <header className={Style.header}>
       <NavBar/>
       <SearchBar/>
      </header>
    <div >
      <Cards/>
    </div>
    
    </div>
  )
}
export default Home