import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    allData: (state,action) => {
        let copyArr= state;
        copyArr.push(action.payload)
        state=copyArr
    },
    deleteData: (state,action) => {
        let deleteArr= state;
        deleteArr.splice(action.payload,1)
        state = deleteArr
    },
    updateData: (state,action) => {
    
      state = action.payload;
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { allData, deleteData , updateData} = crudSlice.actions

export default crudSlice.reducer