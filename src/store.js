import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducers/auth"

export const store = configureStore({reducer})