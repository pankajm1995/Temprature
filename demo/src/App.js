import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [value,Setvalue]=useState(10);
  const [color,setColor]=useState('cool')

  const Incre=()=>
  {
    const newvalue=value+1;
    if(newvalue>=15)
    {
      setColor('hot');
    }
    Setvalue(newvalue)
  }

  const Decre=()=>
  {
    const newvalue=value-1;
    if(newvalue<15)
    {
      setColor('cool');
    }
    Setvalue(newvalue)
  }
  return (
    <div className="App">
     <h1><div>
      Temporature Effect
     </div></h1>
     <div className='Area'>
     <div className={`text ${color}`}><h2 id='use'>{value}<span>&#176;</span>C</h2></div>
     </div>
     <div >

      <button className='btn' onClick={()=>Incre()}>+</button>
      <button className='btn' onClick={()=>Decre()}>-</button>
     </div>
    </div>
  );
}

export default App;
