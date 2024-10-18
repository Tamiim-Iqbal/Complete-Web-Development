import './App.css'
import Counter from './Counter';
import Users from './Users';

function App() {

  function handleClick(){
    alert('Button clicked');
  }

   

  return (
    <>
      <h1>React 2</h1>

      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addFive(4)}>Add Five</button>
    </>
  )
}

export default App
