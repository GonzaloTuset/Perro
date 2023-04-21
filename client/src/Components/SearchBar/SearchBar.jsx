import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [searchName, setSearchName] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchName);
  }

  return (
    <form onSubmit={handleSearch}>
      <input placeholder="Search a dog..." type="search" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}
export default SearchBar