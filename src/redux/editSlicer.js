import { createSlice } from '@reduxjs/toolkit'

const initialState ={};

export const editSlice = createSlice({
    name: 'editCrud',
    initialState,
    reducers: {
        
      singleData: (state ,action) => {
        state= action.payload
        return state;
      
      },
    },
  })

export const { singleData } = editSlice.actions

export default editSlice.reducer