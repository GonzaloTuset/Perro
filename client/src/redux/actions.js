import axios from 'axios'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchData = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3001/dogs');
    
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};