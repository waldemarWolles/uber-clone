import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      console.log(action.payload)
      state.origin = action.payload
    },
    setDestination: (state, action) => {
      state.origin = action.payload
    },
    setTravelTimeInformation: (state, action) => {
      state.origin = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export default navSlice.reducer

// Selectors

export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation
