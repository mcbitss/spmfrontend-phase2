import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import login from './LoginReducer'

export default combineReducers({
  routing: routerReducer,
  login: login
});
