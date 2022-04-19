import { configureStore } from '@reduxjs/toolkit'
import crudReducer from './slicer'
import editCrudReducer from './editSlicer'

export const store = configureStore({
  reducer: {
    crud: crudReducer,
    editCrud : editCrudReducer
  },
})