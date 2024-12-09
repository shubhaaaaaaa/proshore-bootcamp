import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlide'

export const store = configureStore({
    reducer: todoReducer
})
