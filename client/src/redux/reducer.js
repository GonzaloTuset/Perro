import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_NAME
} from './actions';

const initialState = {
  dogs:[],
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_DATA_SUCCESS:
    return{
      ...state,
      dogs:[...action.payload]
    }
    case FETCH_DATA_NAME:
      return{
        ...state,
        dogs:[...action.payload]
      }
    default:
      return { ...state };
  
  }
}
export default rootReducer