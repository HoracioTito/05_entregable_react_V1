import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',
    initialState: "",
    reducers: {
      registerUser: (state , action )=>{
        return action.payload
      }
    }
})

export const { registerUser } = userNameSlice.actions;

export default userNameSlice.reducer;