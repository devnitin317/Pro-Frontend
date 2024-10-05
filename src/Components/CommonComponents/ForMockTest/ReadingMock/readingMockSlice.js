import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  single: "",
  multiple:""
}

export const readingMockSlice = createSlice({
  name: 'readingMock', 
  initialState,
  reducers: {
    addReadingSingle: (state,action) => {
      state.active = action.payload
    },
    resetCountDown: (state,action) => {
      state.reset = action.payload.reset
    }
  },
})

// Action creators are generated for each case reducer function
export const { addReadingSingle,resetCountDown } = readingMockSlice.actions

export default readingMockSlice.reducer