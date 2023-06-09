import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_NAME,
  FILTER_BY_BDD,
  FILTER_BY_API,
  SORT_BY_ASC,
  SORT_BY_WEIGHT,
  CURRENT_PAGE,
  TEMPERAMENTS
} from './actions';

const initialState = {
  dogs: [],
  currentPage:1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        dogs: [...action.payload]
      }
    case FETCH_DATA_NAME:
      return {
        ...state,
        dogs: [...action.payload]
      }
    case FILTER_BY_BDD:
      return {
        ...state,
        dogs: [...action.payload]
      }
    case FILTER_BY_API:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          dogs: [...action.payload]
        }
      }else{
        return state
      }
    case SORT_BY_ASC:
      const order = [...state.dogs]
      if (action.payload === 'ASC') {
        order.sort((dog1, dog2) => dog1.name.localeCompare(dog2.name))
      } else {
        order.sort((dog1, dog2) => dog2.name.localeCompare(dog1.name))
      }
      return {
        ...state,
        dogs: order,
      }
      case SORT_BY_WEIGHT:
        const orderWeight = [...state.dogs];
        if (action.payload === 'ASCENDENT') {
          orderWeight.sort((dog1, dog2) => {
            if(dog1.weight<dog2.weight){
              return -1
            }
            if(dog1.weight > dog2.weight){
              return 1
            }
            return 0
          })
        } else{
          orderWeight.sort((dog1, dog2) => {
            if(dog1.weight > dog2.weight){
              return -1
            }
            if(dog1.weight < dog2.weight){
              return 1
            }
            return 0
          }) 
        }
        return {
          ...state,
          dogs: orderWeight,
        }
        case CURRENT_PAGE:
          return {
            ...state,
            currentPage: action.payload
          }
          case TEMPERAMENTS:
            return{
              ...state,
              dogs:action.payload,
            }
    default:
      return { ...state }

  }
}
export default rootReducer