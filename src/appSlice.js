import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 baseUrl:"",
 userData:""
}

export const appSlice = createSlice({
  name: 'app', 
  initialState,
  reducers: {
    changeBaseUrl: (state,action) => {
      state.baseUrl = action.payload
    },
    userDataFunc: (state,action) => {
      state.userData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeBaseUrl,userDataFunc } = appSlice.actions

export default appSlice.reducer