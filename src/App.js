import './App.css';
import {useState} from 'react';
import Todos from './Component/Todos'

function App() {
  return (
    <div className="App">
       <h1
     style={{color:"#ff5050"}}
     >Todos React function Component App!</h1>
     <Todos/>
    </div>
  );
}

export default App;
