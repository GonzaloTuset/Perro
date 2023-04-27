import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchData} from '../../redux/actions';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { formatImg } from "../../utils/FormatImg";
import Style from './Cards.module.css'

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
    <div className={Style.backGround}>
      <div className={Style.cards}>
        {
          getCurrentDogs().
            map(({ id, name, temperaments, weight, image, reference }) => {
              return (
                <NavLink key={id+name} className={Style.navLink} to={`/Detail/${id}`}>
                    <img  className={Style.img} src={formatImg({ image, reference })} alt='img' />
                    <h1 className={Style.goDetail}>{name}</h1>
                    <h2 className={Style.goDetail}>{temperaments}</h2>
                    <h3 className={Style.goDetail}>{weight}</h3>
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
