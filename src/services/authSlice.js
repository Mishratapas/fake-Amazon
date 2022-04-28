import { createSlice } from '@reduxjs/toolkit'

import { auth } from '../firebase/firebase'

const initialState = { email: '', password: '' }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const { email, password } = auth
      auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
        state.email = email
        state.password = password
      })
    },
  },
})
