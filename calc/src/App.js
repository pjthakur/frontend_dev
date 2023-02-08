import { useState } from 'react';
import './App.css';

function App() {

  const [calc, setCalc]=useState("");
  const [result, setResult]= useState("");

  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = value =>{
    if(
      ops.includes(value) && ops.includes(calc.slice(-1))  ||
      ops.includes(value) && calc ===' '
      ){
        return;
      }
      setCalc(calc + value);
      if(!ops.includes(value)){
        setResult(eval(calc + value).toString())
      }
  }

  const deleteIt=()=>{
    if(calc===''){
      return
    }
    else{
      const value = calc.slice(0, -1)
      setCalc(value);
    }
  }

  const createDigits=()=>{
    const digits = [];
    for(let i=1; i<10;i++){
      digits.push(
      <button key={i} onClick={()=>updateCalc(i.toString())}>{i}</button>
      )
    }
    return digits;
  }



  return (
    <div className="App">

      <div className='calc'>
        <div className='display'>
          { result ? <span>({result})</span> : ' ' }
          {calc ||"0"}
        </div>

        <div className='operators'>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button  onClick={()=>updateCalc('-')}>-</button>
          <button  onClick={()=>updateCalc('*')}>x</button> 
          <button  onClick={()=>updateCalc('/')}>/</button> 

          <button onClick={deleteIt}>DEL</button>
        </div>

        <div className='digits'>
          {createDigits()}
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={()=>updateCalc('0')}>0</button>

          <button onClick={()=>setCalc(eval(calc.toString()))}>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
