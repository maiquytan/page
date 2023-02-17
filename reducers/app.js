import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
})

export const { actions } = slice

export default slice.reducer
