import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import NavBar from "../../NavBar/NavBar"
import { useEffect } from "react"
import { formatImg } from '../../../utils/FormatImg'
import Style from './Detail.module.css'



const Detail = () => {
  const [dogDetail, setDogDetail] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:3001/dogs/${id}`)
      .then(response => setDogDetail(response.data))
  }, [id])
  return (
    <div>
      <header className={Style.headerDetail}>
        <NavBar />
      </header>
      <div className={Style.div}>
        <div className={Style.card} key={dogDetail.id}>
          <div className={Style.imgDiv}>
            <div className={Style.divImg2}>
            <img className={Style.img} src={formatImg(dogDetail)} alt='img' />
            </div>
            <h2>Name: {dogDetail.name}</h2>
            <h2>Life span: {dogDetail.life_span}{dogDetail.years}</h2>
            <h2>Height: {dogDetail.height ? dogDetail.height : ('nada')} Cm</h2>
            <h2>Weight: {dogDetail.weight ? dogDetail.weight : ('nada')} Kg</h2>
          </div>
          <div className={Style.divTemp}>
            <h2>Temperament:</h2>
            <br />
            <div className={Style.tempera}>
              <div className={Style.tempContainer}>
                {Array.isArray(dogDetail.temperaments) ? dogDetail.temperaments.map(temp => (
                  <div key={temp} className={Style.tempSquare}>
                    {temp}
                  </div>
                )) : (dogDetail.temperaments ?
                  dogDetail.temperaments.split(',').map(temp => (
                    <div key={temp} className={Style.tempSquare}>
                      {temp.trim()}
                    </div>
                  )) : <div className={Style.tempSquare}>Unknown</div>)}
              </div>
            </div>
            <div className={Style.divimg}>
              <img className={Style.imgPng} src="https://cdn.discordapp.com/attachments/957507192490180679/1101267598466895953/pngegg.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Detail