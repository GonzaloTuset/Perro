import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions';
import { NavLink } from "react-router-dom";
import { useState } from "react";
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

  return (
    <div>
      <div>
        {
        getCurrentDogs().
        map(({ id, image, name, temperament, temperaments, weight }) => {
          return (
            <NavLink to={`/Detail/${id}`}>
              <div key={id}>
                <img src={image} />
                <h1>{name}</h1>
                <h2>
                  {temperament}
                  {temperaments}
                </h2>
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