//single source of truth for appliocation state
 import { configureStore } from '@reduxjs/toolkit';
 import counterReducer from '../features/counter/counterSlice'; //counter slice had counterReducer
 import authReducer from '../features/auth/authSlice'
 import usersReducer from '../features/users/usersSlice'

 const loggerMiddleware = storeApi => next => action => { //logger middleware
    console.log('Dispatching actio',action);
    const result=next(action);
    console.log('Next state', storeApi.getState());
    return result
 }
 
 export const store = configureStore({ //configureStore has default dev tools and middleware
    reducer:{
        counter: counterReducer, //counter slice is added to the store
        auth: authReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
    // devTools: true this is for redux only not redux toolkit
 })