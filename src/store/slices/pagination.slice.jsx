import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const paginationSlice = createSlice({
		name: 'setNumItem',
    initialState: 4,
    reducers: {
         setNumberItem : (state, action) => { // Recibimos la accion por parámetros
          return action.payload // Colocamos la propiedad payload
      }
    }
})

export const { setNumberItem } = paginationSlice.actions;

export default paginationSlice.reducer;