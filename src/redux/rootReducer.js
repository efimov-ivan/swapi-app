import {
  FETCH_SHIPS_REQUEST,
  FETCH_SHIPS_SUCCESS,
  FETCH_SHIPS_ERROR
} from './constants';

const initialState = {
  error: '',
  loading: true,
  content: []
}

function rootReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_SHIPS_REQUEST:
      return {
        ...state,
        loading: true,
        content: []
      }
    case FETCH_SHIPS_SUCCESS:
      return {
        ...state,
        content: action.content,
        loading: false
      }

    case FETCH_SHIPS_ERROR:
        return {
          ...state,
          error: action.message,
          loading: false
        }

    default:
      return state;
  }
}

export default rootReducer
