import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import Text from './components/Text';
import Mcq from './components/Mcq';
import Options from './components/Options';

function App() {

  const [questions, setQuestions] = useState(null);
  const [bool,setBool] = useState(false);
  const [single, setSingle] = useState(null);
  const [list, setList] = useState([]);
  const [value,setValue] = useState("Choose");

  const [text, setText] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [mcq,setMcq] = useState(false);

  


  const handleText = (e)=>{
    
    let newList1 = {type:"Text"};
    console.log(e.target);
    setList([...list, newList1]);    
    
    e.preventDefault();
  }

  const handleNumeric = (e)=>{
    
    let newList1 = {type:"Numeric"};
    setList([...list, newList1]);
    
    e.preventDefault();
  }

  const handleRemove = (index)=>{
    const newTodos = [...list];
    newTodos.splice(index,1);
    setList(newTodos);
  }

  const handleMCQ = (e)=>{
    console.log(typeof e.target.value);
    setQuestions(Number(e.target.value));
  }

  return (
    <div className="App">
      <InputLabel id="label">What kind of input do you want to receive?</InputLabel>
        
    <div class="btn-group" role="group" aria-label="Basic example">
      <button class ="button but" type="button text" onClick={handleText}>Text</button>
      <button class="button but" type="button numeric"  onClick={handleNumeric}>Numeric</button>
    </div>
        {list?list.map((item,index)=>{
          return(
            <>
              <div>
                <Options 
                  type={item.type}
                  index={index}
                  handleRemove={handleRemove}
                />
              </div>
              <div>
              <TextField
                id="standard-number"
                label="Number Of Questions"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleMCQ}
              />
              </div>
            </>
          )
        }):null}
        {/* {text?<Text />:null}
        {numeric?<Numeric />:null}
        {mcq?<Mcq />:null} */}
    </div>
  );
}

export default App;
