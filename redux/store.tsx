
import { createWrapper } from "next-redux-wrapper";
import {configureStore,ThunkAction,Action, EnhancedStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { authSlice } from "./features/authSlice";//imported as slices even tho there export defaults are reducers 
import {counterSlice} from "./features/counterSlice"
import { iconSlice } from "./features/iconSlice";
// initial states here
import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';

import { spotSlice } from "./features/spotSlice";
const initalState = {};

// middleware
const middleware = [thunk];

// create a slice- a simple slice to understand how the slices work with the rest of our code
//slices are basically a way to structure our logic and actions together with our reducer
//we can call slice.actions or slice.reducer


// creating store, this was originally an arrow functional coimponent

export const MakeStore =()=>{
  const store =configureStore({
    reducer: {
      //for generating the correct queries
      [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,

      //the actual music player
       player: playerReducer,
      //add playerSlice
      [authSlice.name]: authSlice.reducer, // --another shorthand if we forgot the id name of the slice
      icon:iconSlice.reducer,
      [counterSlice.name]: counterSlice.reducer,
      [spotSlice.name]:spotSlice.reducer,


    },
   //middleware,
    //(getDefaultMiddleware)=>getDefaultMiddleware().concat(shazamCoreApi.middleware),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
    devTools: true,
});
  return store;

}



//are these ciodeesw even useful?
export type AppStore = ReturnType<typeof MakeStore>;

//the below line i sbeing used by authslice
export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// assigning store to next wrapper
//const tore = store;
//so far this works, ignore the legacy update warning for now, lets test our store variables
export const wrapper = createWrapper<EnhancedStore>(MakeStore);
export const iconAction = iconSlice.actions
export const counterAction = counterSlice.actions
export const selectAuthState = (state: AppState) => state.auth.authState;
export const selectPageState = (state: AppState) => state.spot.pageState;