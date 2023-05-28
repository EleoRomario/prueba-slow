import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
  isAuthenticated: !!Cookies.get('auth'), // Indica si el usuario esta autenticado
  userType: Cookies.get('userType') ? Cookies.get('userType') : null, // Indica el tipo de usuario
  user: null, // Contiene los datos del usuario
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload.user
      state.isAuthenticated = true
      state.user = { username, password }
      Cookies.set('auth', state)
    },
    logout: state => {
      state.isAuthenticated = false
      state.userType = null
      state.user = null
      Cookies.remove('auth')
    },
    selectTypeUser: (state, action) => {
      state.userType = action.payload.userType
      Cookies.set('userType', state.userType)
    },
  },
})

export const { login, logout, selectTypeUser } = authSlice.actions

export default authSlice.reducer
