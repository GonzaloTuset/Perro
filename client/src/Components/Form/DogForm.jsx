import { useState, useEffect } from 'react';
import axios from 'axios';

const CreateDogForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const currentTarget = event.currentTarget
    const newDog = {
      name: currentTarget.name.value,
      height: currentTarget.maxHeight.value + ' - ' + currentTarget.minHeight.value,
      weight: currentTarget.maxWeight.value + ' - ' + currentTarget.minWeight.value,
      years: currentTarget.years.value,
      temperaments: [currentTarget.temp.value],
      image: currentTarget.image.value
    }
    axios.post('http://localhost:3001/dogs',newDog)
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='name' name='name'/>
        <input placeholder='only Url Img' name='image'/>
        <input placeholder='max-height' name='maxHeight'/>
        <input placeholder='min-height' name='minHeight'/>
        <input placeholder='max-weight' name='maxWeight'/>
        <input placeholder='min-weight' name='minWeight'/>
        <input placeholder='years' name='years'/>
        <input placeholder='temperaments' name='temp'/>
        <button>crear nueva raza</button>
      </form>
    </div>
  )
}

export default CreateDogForm;