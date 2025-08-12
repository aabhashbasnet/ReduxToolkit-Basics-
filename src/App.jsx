import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement} from './features/counter/counterSlice.js'; // Import your actions
function App() {
  const dispatch = useDispatch(); // Import useDispatch if you need to dispatch actions
const counter = useSelector((state)=> state.counter.count)
  return (
    <>
    check redux toolkit
    <h1>Count : {counter}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default App
