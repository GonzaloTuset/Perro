import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, filterDogApi, filterDogBdd, sortAsc, sortWeight} from '../../redux/actions';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { formatImg } from "../../utils/FormatImg";
const Cards = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.dogs)

  const [currentPage, setCurrentPage] = useState(1)
  const dogsPerPage = 8

  useEffect(() => {
    dispatch(fetchData());
  }, [])


  const getCurrentDogs = () => {
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    return selector.slice(indexOfFirstDog, indexOfLastDog);
  }


  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(selector.length / dogsPerPage); i++) {
    pageNumbers.push(i)
  }
  const HandleShow = () => {
    dispatch(fetchData())
  }
  const asdWeight =(event)=>{
    dispatch(sortWeight(event.target.value))
  }
  function ascOrder(event) {
    dispatch(sortAsc(event.target.value))
  }
  const selectssd = (event) => {
    if (event.target.value === 'bd') {
      dispatch(filterDogBdd())
    }
    if (event.target.value === 'api') {
      dispatch(filterDogApi())
    }
  }

  return (
    <div>
      <select onChange={ascOrder}>
        <option value='ASC'> ASC order</option>
        <option value='DES'> DES order</option>

      </select>
      <select onChange={asdWeight}>
        <option value='ASCENDENT'> ASC Weight </option>
        <option value='DESCENDENT'> DES Weight </option>
      </select>

      <button onClick={HandleShow}>Show all</button>
      <select onChange={selectssd}>
        <option value={'bd'}>
          Filter by BDD
        </option>
        <option value={'api'}>
          Filter by Api
        </option>
      </select>
      <div>
        {
          getCurrentDogs().
            map(({ id, name, temperaments, weight, image, reference }) => {
              return (
                <NavLink to={`/Detail/${id}`}>
                  <div key={id}>
                    <img src={formatImg({ image, reference })} alt='img' />
                    <h1>{name}</h1>
                    <h2>{temperaments}</h2>
                    <h3>{weight}</h3>
                  </div>
                </NavLink>
              );
            })}
      </div>
      <div>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Cards
