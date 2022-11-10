import { createSlice } from "@reduxjs/toolkit";
//import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    /*extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },*/

  },
});

export const { setAuthState } = authSlice.actions;

//if authslice isnt added to our store's reducers then the belo state.auth will noty be recognized
//meaning, both store and authslice.tsx recognize each other to help fix errors. AMazing!
//export const selectAuthState = (state: AppState) => state.auth.authState;
//always return the reducers from our slice files, eg slice.reducer
export default authSlice.reducer;