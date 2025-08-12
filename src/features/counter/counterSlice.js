// every feature has its own slice

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count : 3 //initial state of the counter
};

const counterSlice = createSlice({
    name:'counter', //name of slice
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1;
        },
        decrement:(state)=>{
            state.count -=1;
        },
        // addByAmount:(state, action)=>{
        //     state.counter += action.payload; //action.payload is the value passed to the action
        // }
        reset:(state)=>{
          state.count = initialState.count; //resetting the counter to initial state  
        }
    }
});

export const {increment, decrement,reset} = counterSlice.actions;
export default counterSlice.reducer; //exporting the reducer to be used in the store
//exporting the actions to be used in the components
