import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Numericrender from '../components/rendering/Numericrender';
import './style.css'

function Numeric() {

  const [value,setValue] = useState("");
  const [label,setLabel] = useState("")

  const handleChange = (e)=>{
    setValue(e.target.value);
    setLabel(e.target.value);
    e.preventDefault();
  }

  return (
    <div>
      
      <form id="mt" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Numeric Input" variant="outlined" value={value} onChange={handleChange}
        
        ></TextField>
        {label?<Numericrender  label={label}/>:null}

      </form>
      
    </div>
  )
}

export default Numeric
