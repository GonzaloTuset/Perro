import axios from 'axios';
import { useEffect, useState } from 'react';


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
    const regex = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$')
    const { name, years, image, minHeight, minWeight, maxHeight, maxWeight } = event.currentTarget
    const newDog = {
      name: name.value,
      height: minHeight.value + ' - ' + maxHeight.value,
      weight: minWeight.value + ' - ' + maxWeight.value,
      years: years.value,
      temperaments: temps,
      image: image.value
    }
    if (minHeight.value > maxHeight.value) {
      alert('el valor de minHeight no puede ser mayor al de maxHeight')
      return
    }
    if (minWeight.value > maxWeight.value) {
      alert('el valor de minWeight no puede ser mayor al de maxWeight')
      return
    }
    if (!regex.test(image.value)) {
      alert('tiene que ser una URl si o si')
      return
    }
    axios.post('http://localhost:3001/dogs', newDog)
    console.log('perro creado')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input autoFocus placeholder='name' type='text' name='name' />
        <label htmlFor="image"> Image: </label>
        <input name='image' />
        <label htmlFor="Height"> Height: </label>
        <input placeholder='min-height' type='number' name='minHeight' />-
        <input placeholder='max-height' type='number' name='maxHeight' />
        <label htmlFor="name"> Weight: </label>
        <input placeholder='min-weight' type='number' name='minWeight' />-
        <input placeholder='max-weight' type='number' name='maxWeight' />
        <label htmlFor="name"> Life Spam: </label>
        <input placeholder='life-Spam' type='number' name='years' />
        <label htmlFor="name"> Temperaments: </label>
        <select name="temp" onChange={selectTemp}>
          {
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
        <button>crear nueva raza</button>
      </form>
      <br />
      <div>
          {temps.map((tmp, index)=> (
            <span key={index}>{tmp}</span>
          ))}
      </div>
    </div>
  )
}

export default CreateDogForm;