import { useState, useEffect } from 'react';
import axios from 'axios';

const CreateDogForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const currentTarget = event.currentTarget
    const newDog = {
      name: currentTarget.name.value,
      height: currentTarget.minHeight.value + ' - ' + currentTarget.maxHeight.value,
      weight: currentTarget.minWeight.value + ' - ' + currentTarget.maxWeight.value,
      years: currentTarget.years.value,
      temperaments: [currentTarget.temp.value],
      image: currentTarget.image.value
    }
    axios.post('http://localhost:3001/dogs',newDog)
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input autoFocus  placeholder='name' type = 'text' name='name'/>
        <input placeholder='only Url Img, max size: 30'type='url' name='image'/>
        <input placeholder='min-height' autoComplete='off' type='number' name='minHeight' />
        <input placeholder='max-height' autoComplete='off' type='number' name='maxHeight' />
        <input placeholder='min-weight' autoComplete='off' type='number' name='minWeight' />
        <input placeholder='max-weight' autoComplete='off' type='number' name='maxWeight' />
        <input placeholder='years' autoComplete='off' type='number' name='years' />
        <input placeholder='temperaments' name='temp' />
        <button>crear nueva raza</button>
      </form>
    </div>
  )
}

export default CreateDogForm;