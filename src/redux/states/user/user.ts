import { createSlice } from '@reduxjs/toolkit'
import { userDto } from '../../../models'
import { clearLocalStorage, persistLocalStorage } from '../../../utils'

export const InitialValues: userDto = {
  guid: '',
  name: '',
  lastName: '',
  lastSession: '',
  role: []
}
export const UserKey = 'user'

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : InitialValues,
  reducers: {
    createUser: (state, action) => {
      const result = { ...state, ...action.payload }
      persistLocalStorage<userDto>(UserKey, action.payload)
      return result
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload }
      persistLocalStorage<userDto>(UserKey, result)
      return result
    },
    resetUser: () => {
      clearLocalStorage(UserKey)
      return InitialValues
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions
export default userSlice.reducer
