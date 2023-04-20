import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import NavBar from "../../NavBar/NavBar"
import { useEffect } from "react"



const Detail = () => {
  const [dogDetail,setDogDetail]=useState({})
    const {id} = useParams()
    useEffect(()=>{
      axios.get(`http://localhost:3001/dogs/${id}`)
        .then(response => setDogDetail(response.data))
  },[id])
  return (
    <div>
    <header>
      <NavBar/>
    </header>
   
    <h2>id:{dogDetail.id}</h2>
    <img src={dogDetail.reference  ? (`https://cdn2.thedogapi.com/images/${dogDetail.reference}.jpg`):('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Missing_dog_photo.svg/1165px-Missing_dog_photo.svg.png')} alt='img'/>
    <h2>name:{dogDetail.name}</h2>
    <h2>height:{dogDetail.height?(dogDetail.height.metric):('nada')}</h2>
    <h2>weight:{dogDetail.weight?(dogDetail.weight.metric):('nada')}</h2>
    <h2>temperament:{dogDetail.temperaments}{dogDetail.temperament}</h2>
    <h2>life span:{dogDetail.life_span}{dogDetail.years}</h2>
   </div>
    
  )
}
export default Detail