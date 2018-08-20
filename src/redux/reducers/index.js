import { combineReducers } from 'redux'
import coworksReducer from './coworks'

const RootReducer = combineReducers({
    coworks: coworksReducer,
  })
  ​
  export default RootReducer