import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Text from './components/Text';
import Numeric from './components/Numeric';
import Mcq from './components/Mcq';

function App() {

  const [value,setValue] = useState("Choose");

  const [text, setText] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [mcq,setMcq] = useState(false);

  const handleChange=(e)=>{

      console.log("uvhbdisvbdfivbiybfrvyuhb");

      setValue(e.target.value);

      if(e.target.value=="Text"){
        setText(true);
      }

      if(e.target.value=="Numeric"){
        setNumeric(true);
      }

  }

  return (
    <div className="App">
      <InputLabel id="label">What kind of input do you want to receive?</InputLabel>
      <TextField
          // label="Saloni"
          select
          value={value}
          onChange={handleChange}
          helperText="Please select what kind of input you want"
        >
            <MenuItem key="Text" value="Text">
              Text
            </MenuItem>
            <MenuItem key="Numeric" value="Numeric">
              Numeric
            </MenuItem>
            <MenuItem key="Multiple Choice" value="Multiple Choice">
              Multiple choice
            </MenuItem>
        </TextField>
        {text?<Text />:null}
        {numeric?<Numeric />:null}
        {mcq?<Mcq />:null}
    </div>
  );
}

export default App;
