import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './userReducer'
import mealReducer from './mealReducer'
import orderReducer from './orderReducer'
import redeemableOrderReducer from './redeemableOrderReducer'

const reducer = combineReducers({
  user: userReducer,
  meals: mealReducer,
  orders: orderReducer,
  redeemableOrders: redeemableOrderReducer
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './userReducer'
export * from './mealReducer'
export * from './orderReducer'
export * from './redeemableOrderReducer'
