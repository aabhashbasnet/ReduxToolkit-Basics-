import CounterControl from './components/CounterControl';
import CounterDisplay from './components/CounterDisplay';
import AuthControl from './components/AuthControl';
import UserComponent from './components/UserComponent';
function App()
{ 
  return(
    <>
    <div style ={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Welcome to Redux Toolkit Counter</h1>
      <CounterDisplay />
      <CounterControl />
      <AuthControl />
      <UserComponent />
    </div>
    {/* <Counter /> */}
    </>
  );
}
export default App