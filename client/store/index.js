import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './userReducer'
import mealReducer from './mealReducer'
import userMealReducer from './userMealReducer'
import ordersReducer from './ordersReducer'
import redeemableOrderReducer from './redeemableOrderReducer'
import currentMealReducer from './currentMealReducer'

const reducer = combineReducers({
  user: userReducer,
  meals: mealReducer,
  userMeals: userMealReducer,
  orders: ordersReducer,
  redeemableOrders: redeemableOrderReducer,
  currentMeal: currentMealReducer
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './userReducer'
export * from './mealReducer'
export * from './userMealReducer'
export * from './ordersReducer'
export * from './redeemableOrderReducer'
export * from './currentMealReducer'
