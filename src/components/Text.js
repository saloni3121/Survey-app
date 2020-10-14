import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Textrender from '../components/rendering/Textrender';
import './style.css';


function Text() {

  const [value,setValue] = useState("");
  const [label,setLabel] = useState("")

  const handleChange = (e)=>{
    setValue(e.target.value);
    setLabel(e.target.value);
    e.preventDefault();
  }

  const handleSubmit = (e)=>{

    console.log(1+1);
    e.preventDefault();
  }

  return (
    <div>
      
      <form id="mt" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Label" variant="outlined" value={value} onChange={handleChange} onClick={handleSubmit}></TextField>
        {label?<Textrender  label={label}/>:null}
      </form>
      
    </div>
  )
}

export default Text