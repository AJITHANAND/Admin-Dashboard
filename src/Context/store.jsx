import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './reducer'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer
  }
})
