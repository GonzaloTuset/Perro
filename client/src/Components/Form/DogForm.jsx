import axios from 'axios';
import { useEffect, useState } from 'react';
import Style from './DogForm.module.css'

const CreateDogForm = () => {
  const [options, setOptions] = useState([])
  const [temps, setTemps] = useState([])
  useEffect(() => {
    const fetchOptions = async () => {
      const response = await axios.get('http://localhost:3001/temperaments');
      setOptions(response.data.map(options =>
        options.name
      ));
    };

    fetchOptions();
  }, []);

  const selectTemp = (event) => {
    if(temps.includes(event.target.value)){
      return
    }
    setTemps([...temps, event.target.value])
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, years, image, minHeight, minWeight, maxHeight, maxWeight } = event.currentTarget
    const newDog = {
      name: name.value,
      height: minHeight.value + ' - ' + maxHeight.value,
      weight: minWeight.value + ' - ' + maxWeight.value,
      years: years.value + ' Years',
      temperaments: temps,
      image: image.value
    }
    if(!name.value){
      alert('El nombre no puede estar vacio')
    }
    if (minHeight.value > maxHeight.value) {
      alert('el valor de minHeight no puede ser mayor al de maxHeight')
      return
    }else if(minHeight.value === maxHeight.value){
      alert('el valor de minHeight no puede ser igual al de maxHeight')
      return
    }
    if (minWeight.value > maxWeight.value) {
      alert('el valor de minWeight no puede ser mayor al de maxWeight')
      return
    }else if(minWeight.value === maxWeight.value){
      alert('el valor de minHeight no puede ser igual al de maxHeight')
      return
    }
    if (!image.value.includes('http')) {
      alert('tiene que ser una URl')
      return
    }
    axios.post('http://localhost:3001/dogs', newDog)
  }

  return (
    <div className={Style.container}>
      <div className={Style.containerForm}>
        <form onSubmit={handleSubmit} className={Style.form} >
          <div className={Style.inputs}>
            <label htmlFor="name">Name: </label>
            <input autoFocus placeholder='name' type='text' name='name' />
          </div>
          <div className={Style.inputs}>
            <label htmlFor="image"> Image: </label>
            <input name='image' />
          </div>
          <div className={Style.inputs}>
            <label htmlFor="Height"> Height: </label>
            <div>
              <input placeholder='min-height' type='number' name='minHeight' />-
              <input placeholder='max-height' type='number' name='maxHeight' />
            </div>
          </div>
          <div className={Style.inputs}>
            <label htmlFor="name"> Weight: </label>
            <div>
              <input placeholder='min-weight' type='number' name='minWeight' /> -
              <input placeholder='max-weight' type='number' name='maxWeight' />
            </div>
          </div>
          <div className={Style.inputs}>
            <label htmlFor="name"> Life Spam: </label>
            <input placeholder='life-Spam' type='number' name='years' />
          </div>
          <div className={Style.inputs}>
            <label htmlFor="name"> Temperaments: </label>
            <select name="temp" onChange={selectTemp}>
              {
                options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>
          <button> Create a new Dog </button>
        </form>
        <br />
        <div className={Style.temperament}>
            <h3>Temperaments</h3>
            {
              temps.length === 0 ? <span>You don't have tempreamentes selecteds</span>: null
            }
            <div className={Style.allTemperaments}>
              {temps.map((tmp, index)=> (
                
                <span className={Style.temp} key={index}>{tmp}</span>
                
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateDogForm;