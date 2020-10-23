import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Textrender from '../components/rendering/Textrender';
import Numericrender from '../components/rendering/Numericrender';
import './style.css';
// import CloseButton from '@bit/tramsay.react-foundation.close-button';
// import CloseIcon from '@material-ui/icons';

function Options({type, index, handleRemove}) {
  console.log(type);
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

  
  if(type=='Text'){
    // console.log("hi saloni");
    return (
    <div>
      
      <form id="mt" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Label" variant="outlined" value={value} onChange={handleChange} onClick={handleSubmit}></TextField>
        <button class="close-button" aria-label="Close alert" type="button" data-close onClick={()=>handleRemove(index)}>
          <span aria-hidden="true">&times;</span>
        </button>
        {label?<Textrender  label={label}/>:null}
      </form>
      
    </div>
    )
  }
  if(type=='Numeric'){
    return (
      <div>
      
      <form style={
        {
          marginTop: 70
        }
      } 
        noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Numeric Input" variant="outlined" value={value} onChange={handleChange}></TextField>
        <button class="close-button" aria-label="Close alert" type="button" data-close onClick={()=>handleRemove(index)}>
          <span aria-hidden="true">&times;</span>
        </button>
        {label?<Numericrender  label={label}/>:null}

      </form>
      
    </div>
    )
  }
  return(null)
}

export default Options