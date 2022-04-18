import { createSlice } from '@reduxjs/toolkit'

const initialState = [];
const singleState ={};

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
  },
})
export const editSlice = createSlice({
  name: 'editCrud',
  singleState,
  reducers: {
    singleData: (state ,action) => {
      console.log(">>>>>>>>>>>>>> Edit")
      // let data = initialState[action.payload];
      //     console.log(initialState);
      //     state.name = data.name;
      //     state.email = data.email;
      //     state.age = data.age;
      //     state.phone = data.phone;  
    },
  },
})




// Action creators are generated for each case reducer function
export const { allData, deleteData } = crudSlice.actions
export const { singleData } = editSlice.actions


export default crudSlice.reducer
