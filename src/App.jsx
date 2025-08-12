import CounterControl from './components/CounterControl';
import CounterDisplay from './components/CounterDisplay';
function App()
{ 
  return(
    <>
    <div style ={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Welcome to Redux Toolkit Counter</h1>
      <CounterDisplay />
      <CounterControl />
    </div>
    {/* <Counter /> */}
    </>
  );
}
export default App