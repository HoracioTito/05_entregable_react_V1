import { configureStore } from '@reduxjs/toolkit'

/* Import varaible*/
import userName from './slices/userName.slice'
import setNumItem from './slices/pagination.slice'


export default configureStore({
  reducer: {
       userName,
       setNumItem
	}
})