//single source of truth for appliocation state
 import { configureStore } from '@reduxjs/toolkit';
 import counterReducer from '../features/counter/counterSlice'; //counter slice had counterReducer
 
 export const store = configureStore({ //configureStore has default dev tools and middleware
    reducer:{
        counter: counterReducer //counter slice is added to the store
    }
 })