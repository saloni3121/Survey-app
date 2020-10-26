import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Textrender from '../components/rendering/Textrender';
import Numericrender from '../components/rendering/Numericrender';
import './style.css';
import Multirender from '../components/rendering/Multirender'
// import CloseButton from '@bit/tramsay.react-foundation.close-button';
// import CloseIcon from '@material-ui/icons';

function Options({type, index, handleRemove}) {
  console.log(type);
  const [value,setValue] = useState("");
  const [label,setLabel] = useState("");
  const [impText, setImpText] = useState(false);
  const [impMulti, setImpMulti] = useState(false);
  const [impNumeric, setImpNumeric] = useState(false);

  const handleChange = (e)=>{
    setValue(e.target.value);
    setLabel(e.target.value);
    e.preventDefault();

  }

  const handleSubmit = (e)=>{

    console.log(1+1);
    e.preventDefault();
  }

  const handleImptext = (e)=>{
    setImpText(!impText);
  }
  
  // const formValid = ({ formErrors, ...rest }) => {
  //   let valid = true;

  //   // validate form errors being empty
  //   Object.values(formErrors).forEach(val => {
  //     val.length > 0 && (valid = false);
  //   });

  //   // validate the form was filled out
  //   Object.values(rest).forEach(val => {
  //     val === null && (valid = false);
  //   });

  //   return valid;
  // };


  
  if(type=='Text'){
    // console.log("hi saloni");
    return (
    <div>
      
      <form id="mt" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Single line input" variant="outlined" value={value} onChange={handleChange} onClick={handleSubmit}></TextField>
        <button class="close-button" aria-label="Close alert" type="button" data-close onClick={()=>handleRemove(index)}>
          <span aria-hidden="true">&times;</span>
        </button>
        <Button id="comp"variant="contained" color="secondary" onClick={handleImptext}>
          Make it complusory?
        </Button>
        {label?<Textrender  label={label} important={impText}/>:null}
      </form>
      
    </div>
    )
  }
  if(type=='Multi'){
    return (
    <div>
      
      <form id="mt" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Multiline Input" variant="outlined" value={value} onChange={handleChange} onClick={handleSubmit}></TextField>
        <button class="close-button" aria-label="Close alert" type="button" data-close onClick={()=>handleRemove(index)}>
          <span aria-hidden="true">&times;</span>
        </button>
        <Button id="comp"variant="contained" color="secondary" onClick={handleImptext}>
          Make it complusory?
        </Button>
        {label?<Multirender  label={label} important={impText}/>:null}
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
        <Button id="comp"variant="contained" color="secondary" onClick={handleImptext}>
          Make it complusory?
        </Button>
        {label?<Numericrender  label={label} important={impText}/>:null}

      </form>
      
    </div>
    )
  }
  return(null)
}

export default Options

