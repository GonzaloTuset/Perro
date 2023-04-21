import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <NavLink to='/Home'>Home  </NavLink>
    <NavLink to='/Form'>Form</NavLink>
    </div>
  )
}
export default NavBar