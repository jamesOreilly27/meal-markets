import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './userReducer'
import mealReducer from './mealReducer'
import userMealReducer from './userMealReducer'
import orderReducer from './orderReducer'
import redeemableOrderReducer from './redeemableOrderReducer'
import sellableOrderReducer from './sellableOrderReducer'
import currentMealReducer from './currentMealReducer'

const reducer = combineReducers({
  user: userReducer,
  meals: mealReducer,
  userMeals: userMealReducer,
  orders: orderReducer,
  redeemableOrders: redeemableOrderReducer,
  sellableOrders: sellableOrderReducer,
  currentMeal: currentMealReducer
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))
const store = createStore(reducer, middleware)

export default store
export * from './userReducer'
export * from './mealReducer'
export * from './userMealReducer'
export * from './orderReducer'
export * from './redeemableOrderReducer'
export * from './sellableOrderReducer'
export * from './currentMealReducer'
