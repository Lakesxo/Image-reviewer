import { configureStore } from '@reduxjs/toolkit'
import ImageReducer from '../features/ImageReducer'

export const store = configureStore({
  reducer: {
    pictures: ImageReducer
  },
})