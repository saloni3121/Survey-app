import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Questions from './components/Questions';
import Options from './components/Options';
// import bg from './images/bgcover';

function App() {

  const [questions, setQuestions] = useState(0);
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

  
  const handleMulti = (e)=>{
    
    let newList1 = {type:"Multi"};
    setList([...list, newList1]);
    
    e.preventDefault();
  }

  const handleRemove = (index)=>{
    const newTodos = [...list];
    newTodos.splice(index,1);
    setList(newTodos);
  }

  const handleMCQ = (e)=>{
    console.log(Number(e.target.value));
    setQuestions(Number(e.target.value));
  }

  var rows = [];

  for(let i=0;i<questions;i++){
    rows.push(<Questions />);
  }

  return (
    <div className="App ">
      <InputLabel id="label">What kind of input do you want to receive?</InputLabel>
        
    <div class="btn-group" role="group" aria-label="Basic example">
      <button class ="button but" type="button text" onClick={handleText}>SingleLine</button>
      <button class="button but" type="button numeric"  onClick={handleNumeric}>Numeric</button>
      <button class="button but" type="button multi"  onClick={handleMulti}>MultiLine</button>
      <TextField
      style={{marginTop: "28px"}}
      // style={{marginLeft: "50px"}}
            // className={app.ml25}
            // className="ml25"
            id="standard-number "
            label="How many MCQ type of questions do you need?"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleMCQ}
          />
        <div>
          {rows}
        </div>
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
            </>
          )
        }):null}
        {/* <div>
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
        <div>
          {rows}
        </div> */}
        
    </div>
  );
}

export default App;
