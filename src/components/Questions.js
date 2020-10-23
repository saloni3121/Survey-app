import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Questionsrender from '../components/rendering/Questionsrender';

function Questions() {

  // console.log(type);

  const [opt1,setOpt1] = useState("");
  const [opt2,setOpt2] = useState("");
  const [opt3,setOpt3] = useState("");
  const [opt4,setOpt4] = useState("");

  const [value,setValue] = useState("");
  const [label,setLabel] = useState("")

  const handleChange = (e)=>{
    setValue(e.target.value);
    setLabel(e.target.value);
    e.preventDefault();
  }

  const handleOpt1 = (e)=>{
    setOpt1(e.target.value);
  }

  const handleOpt2 = (e)=>{
    setOpt2(e.target.value);
  }

  const handleOpt3 = (e)=>{
    setOpt3(e.target.value);
  }

  const handleOpt4 = (e)=>{
    setOpt4(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div>
      
      <form id="mt" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Question" variant="outlined" value={value} onChange={handleChange} onClick={handleSubmit}></TextField>
        <TextField id="standard-basic" label="Option 1" onChange={handleOpt1} value={opt1}/>
        <TextField id="standard-basic" label="Option 2" onChange={handleOpt2} value={opt2}/>
        <TextField id="standard-basic" label="Option 3" onChange={handleOpt3} value={opt3}/>
        <TextField id="standard-basic" label="Option 4" onChange={handleOpt4} value={opt4}/>
        {value?<Questionsrender  question={value} opt1={opt1} opt2={opt2} opt3={opt3} opt4={opt4}/>:null}
      </form>
      
    </div>
  )
}

export default Questions
