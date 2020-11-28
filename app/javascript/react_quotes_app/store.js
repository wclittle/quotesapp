import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './reducer'

export const store = configureStore({
  reducer: RootReducer,
  middleware: [thunk], 
})

export default store 