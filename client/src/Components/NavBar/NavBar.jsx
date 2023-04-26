import { NavLink } from "react-router-dom"
import  Style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={Style.nav}>
      <NavLink className={Style.navLink1} to='/Home'>Home</NavLink>
    <NavLink className={Style.navLink2} to='/Form'>Form</NavLink>
    </div>
  )
}
export default NavBar