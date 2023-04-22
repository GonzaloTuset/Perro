import axios from 'axios'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_NAME = 'FETCH_DATA_NAME'

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const  fetchDogsname=(data)=>({
  type: FETCH_DATA_NAME,
  payload: data,
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
    dispatch(fetchDogsname(response.data))
  }catch(error){
    console.log(error);
  }
}