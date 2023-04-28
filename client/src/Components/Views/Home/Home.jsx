import React from "react"
import NavBar from "../../NavBar/NavBar"
import Cards from "../../Cards/Cards"
import SearchBar from '../../SearchBar/SearchBar'
import Style from './Home.module.css'
import Options from "../../Options/Options"

const Home = () => {
  return (
    <div>
      <header className={Style.header}>
        <NavBar />
        <Options />
        <SearchBar />
      </header>
      <div >
        <Cards />
      </div>

    </div>
  )
}
export default Home