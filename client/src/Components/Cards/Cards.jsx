import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, currentPag} from '../../redux/actions';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { formatImg } from "../../utils/FormatImg";
import Style from './Cards.module.css'

const Cards = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.dogs)
  const currentPage = useSelector((state)=>state.currentPage)
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
  if(selector.length > 8){
    for (let i = 1; i <= Math.ceil(selector.length / dogsPerPage); i++) {
      pageNumbers.push(i)
    }
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
                    <div className={Style.giDetailName}>
                      <h2 className={Style.title}>{name}</h2>
                    </div>
                    <div className={Style.goDetail1}>
                      <h3 className={Style.temperamentName}>{temperaments}</h3>
                    </div>
                    <div className={Style.goDetail}>
                      <h3>{weight}</h3>
                    </div>
                    
                </NavLink>
              );
            })}
      </div>
      <div>
        {
        pageNumbers.map((number) => (
          <button className={Style.Botton} key={number} onClick={() => dispatch(currentPag(number))}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Cards
