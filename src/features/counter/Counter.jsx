import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement,reset} from './counterSlice.js'; // Import your actions
//use selectpr to access the state and useDispatch to dispatch actions
//use dispatch to dispatch actions to the store or to update and change the state
function Counter() {
  const dispatch = useDispatch(); // Import useDispatch if you need to dispatch actions
const counter = useSelector((state)=> state.counter.count)
  return (
    <>
    <h1>Count : {counter}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <br />
    <button onClick={()=>dispatch(reset())}> Reset </button>
    </>
  )
}

export default Counter
