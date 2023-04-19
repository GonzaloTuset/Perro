import {
  FETCH_DATA_SUCCESS
} from './actions';

const initialState = {
  dogs:[]
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_DATA_SUCCESS:
    return{
      ...state,
      dogs:[...state.dogs, ...action.payload]
    }
    default:
      return { ...state };
  
  }
}
export default rootReducer