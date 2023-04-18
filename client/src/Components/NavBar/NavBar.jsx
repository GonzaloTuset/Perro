import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
const NavBar = () => {
  return (
    <div>
    <NavLink to='/Detail'>detail </NavLink>
    
    <NavLink to='/Form'>Form</NavLink>
    <SearchBar/>
    </div>
  )
}
export default NavBar