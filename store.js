import { configureStore } from '@reduxjs/toolkit'
import navReducer from './redux/navSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
})
