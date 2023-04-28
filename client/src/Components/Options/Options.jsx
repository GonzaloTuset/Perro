import { useState, useEffect } from 'react'
import { currentPag, fetchData, fetchDataTemp, filterDogApi, filterDogBdd, sortAsc, sortWeight } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Style from './Options.modules.css'

const Options = () => {

  const [options, setOptions] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchOptions = async () => {
      const response = await axios.get('http://localhost:3001/temperaments')
      setOptions(response.data.map(options =>
        options.name
      ))
    }

    fetchOptions()
  }, [])

  const selectTemp = (event) => {
    const newTemp = event.target.value;
    dispatch(fetchDataTemp(newTemp));
    dispatch(currentPag(1))
  };

  const handleShow = () => {
    dispatch(fetchData())
  }

  const asdWeight = (event) => {
    if (event.target.value === '---') return
    dispatch(sortWeight(event.target.value))
  }

  function ascOrder(event) {
    if (event.target.value === '---') return
    dispatch(sortAsc(event.target.value))
  }

  const selectssd = (event) => {
    if (event.target.value === '---') return
    if (event.target.value === 'bd') {
      dispatch(filterDogBdd())
      dispatch(currentPag(1))
    }
    if (event.target.value === 'api') {
      dispatch(filterDogApi())
      dispatch(currentPag(1))
    }
  }

  return (
    <div className={Style.container}>
      <select onChange={ascOrder}>
        <option value='---'>alfabetic</option>
        <option value='ASC'> A - Z</option>
        <option value='DES'> Z - A </option>

      </select>
      <select onChange={asdWeight}>
        <option value='---'>ASC / DESC</option>
        <option value='ASCENDENT'> ASC Weight </option>
        <option value='DESCENDENT'> DESC Weight </option>
      </select>

      <button className={Style.button} onClick={handleShow}>Show all</button>
      <select onChange={selectssd}>
        <option value='--'>BDD / API</option>
        <option value={'bd'}>
          Filter by BDD
        </option>
        <option value={'api'}>
          Filter by Api
        </option>
      </select>
      <select name="temp" onChange={selectTemp}>
        <option value='---'>Filter by Temperaments </option>
        {
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Options