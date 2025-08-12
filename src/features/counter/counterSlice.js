// every feature has its own slice

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    counter: 0
};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter +=1;
        },
        decrement:(state)=>{
            state.counter -=1;
        },
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer; //exporting the reducer to be used in the store
//exporting the actions to be used in the components
