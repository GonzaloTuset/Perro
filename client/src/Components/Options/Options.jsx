
import {currentPag, fetchData, filterDogApi, filterDogBdd, sortAsc, sortWeight} from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Options = () =>{
  const dispatch=useDispatch()
  
  const HandleShow = () => {
    dispatch(fetchData())
  }
  const asdWeight =(event)=>{
    dispatch(sortWeight(event.target.value))
  }
  function ascOrder(event) {
    dispatch(sortAsc(event.target.value))
  }
  const selectssd = (event) => {
    if (event.target.value === 'bd') {
      dispatch(filterDogBdd())
      dispatch(currentPag(1))
    }
    if (event.target.value === 'api') {
      dispatch(filterDogApi())
      dispatch(currentPag(1))
    }
  }
  return(
    <div>
      <select onChange={ascOrder}>
        <option value='ASC'> ASC order</option>
        <option value='DES'> DES order</option>

      </select>
      <select onChange={asdWeight}>
        <option value='ASCENDENT'> ASC Weight </option>
        <option value='DESCENDENT'> DES Weight </option>
      </select>

      <button onClick={HandleShow}>Show all</button>
      <select onChange={selectssd}>
        <option value={'bd'}>
          Filter by BDD
        </option>
        <option value={'api'}>
          Filter by Api
        </option>
      </select>
    </div>
  )
}

export default Options