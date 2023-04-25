import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import NavBar from "../../NavBar/NavBar"
import { useEffect } from "react"
import { formatImg } from  '../../../utils/FormatImg'



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
   
    <h2>id: {dogDetail.id}</h2>
    <img src = { formatImg(dogDetail) } alt = 'img'/>
    <h2>name: {dogDetail.name}</h2>
    <h2>height: {dogDetail.height ? (dogDetail.height) : ('nada')}</h2>
    <h2>weight: {dogDetail.weight ? (dogDetail.weight) : ('nada')}</h2>
    <h2>temperament: {dogDetail.temperaments ? dogDetail.temperaments : 'desconocido'}</h2>
    <h2>life span: {dogDetail.life_span}{dogDetail.years}</h2>
   </div>
    
  )
}
export default Detail