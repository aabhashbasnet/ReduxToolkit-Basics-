// import Counter from './features/counter/Counter.jsx';
import { useDispatch} from 'react-redux';
import {increment, decrement, reset} from '../features/counter/counterSlice.js'; // Import your actions1
function CounterControl()
{
  const dispatch = useDispatch();
  return(
    <>
    <div>
    <button onClick={()=>dispatch(increment())}>+</button>{" "}
    <button onClick={()=>dispatch(decrement())}>-</button>{" "}
    <br />
    <br />
    <button onClick={()=>dispatch(reset())}> Reset </button>

    </div>
    </>
  )
}
export default CounterControl