import { createSlice } from '@reduxjs/toolkit' 
import { userDto } from '../../../models'

export const InitialValues: userDto = {
  guid: '',
  name: '',
  lastName: '',
  lastSession: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: InitialValues,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => InitialValues
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions
export default userSlice.reducer
