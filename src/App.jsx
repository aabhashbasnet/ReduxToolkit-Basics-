import CounterControl from './components/CounterControl';
import CounterDisplay from './components/CounterDisplay';
import AuthControl from './components/AuthControl';
function App()
{ 
  return(
    <>
    <div style ={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Welcome to Redux Toolkit Counter</h1>
      <CounterDisplay />
      <CounterControl />
      <AuthControl />
    </div>
    {/* <Counter /> */}
    </>
  );
}
export default App