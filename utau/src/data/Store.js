import { configureStore } from '@reduxjs/toolkit'
import brand from "./brandSlice"

export default configureStore({
  reducer: {
    brand : brand.reducer
   }
})
