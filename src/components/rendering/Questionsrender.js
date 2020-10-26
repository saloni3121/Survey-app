import React,{useState} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Questionsrender({question, opt1, opt2, opt3, opt4,important}) {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
    
    <FormControl style={{marginLeft : 230}}component="fieldset" required={important}> 
      <FormLabel style={{marginTop :20}}component="legend">Question</FormLabel>
      <div>{question}</div>
      <RadioGroup aria-label="Question" value={value} onChange={handleChange}>
        <FormControlLabel value={opt1} control={<Radio />} label={opt1} />
        <FormControlLabel value={opt2} control={<Radio />} label={opt2} />
        <FormControlLabel value={opt3} control={<Radio />} label={opt3} />
        <FormControlLabel value={opt4} control={<Radio />} label={opt4} />
      </RadioGroup>
    </FormControl>
  )
}

export default Questionsrender
