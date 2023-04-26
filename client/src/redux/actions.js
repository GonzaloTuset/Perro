import axios from 'axios'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_NAME = 'FETCH_DATA_NAME'
export const FILTER_BY_BDD = 'FILTER_BY_BDD'
export const FILTER_BY_API = 'FILTER_BY_API'
export const SORT_BY_ASC = 'SORT_BY_ASC'
export const SORT_BY_WEIGHT = 'SORT_BY_WEIGHT'

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const  fetchDogsname=(data)=>({
  type: FETCH_DATA_NAME,
  payload: data,
})
export const filterBddName=(data)=>({
  type: FILTER_BY_BDD,
  payload: data,
})
export const filterApi = (data) => ({
  type: FILTER_BY_API,
  payload: data,
}) 
export const sortAsc = (data) => ({
  type: SORT_BY_ASC,
  payload: data
})
export const sortWeight = (data) => ({
  type: SORT_BY_WEIGHT,
  payload: data
})

export const fetchData = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/dogs');
    
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchDog = (name) => async dispatch =>{
  try{
    const response = await axios.get(`http://localhost:3001/dogs/?name=${name}`)
    console.log(response.data)
    dispatch(fetchDogsname(response.data))
  
  }catch(error){
    console.log(error);
  }
}

export const filterDogBdd=()=>async dispatch=>{
  try {
    const dogs = await axios.get('http://localhost:3001/dogs')
    const dbDog = dogs.data.filter(dog => dog.id.length >= 2)
    dispatch(filterBddName(dbDog))
  } catch (error) {
    console.log(error)
  }
}

export const filterDogApi=()=>async dispatch=>{
  try {
    const dogs = await axios.get('http://localhost:3001/dogs')
    console.log(dogs.data)
    const dbDog = dogs.data.filter(dog => !(dog.created !== undefined))
    dispatch(filterApi(dbDog))
  } catch (error) {
    console.log(error)
  }
}

