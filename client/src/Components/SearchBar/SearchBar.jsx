import { useDispatch } from "react-redux";
import { fetchDog } from "../../redux/actions";
import  Style  from './SearchBar.module.css';

const SearchBar = () => {
  const dispatch = useDispatch()
  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.currentTarget.search.value
    dispatch(fetchDog(search))
   console.log(search)
  }

  return (
    <form onSubmit={handleSearch}>
      <input className={Style.input} placeholder="Search a dog..." type="search" name="search"/>
      <button type="submit">Search</button>
    </form>
  )
}
export default SearchBar