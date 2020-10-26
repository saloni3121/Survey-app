import React from 'react'
import TextField from '@material-ui/core/TextField';
import '../style.css';


function Multirender({label,important}) {
    
  
  return (
    <div>
      <form id="live" noValidate autoComplete="off">
      {!important?<TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="outlined"
          id="outlined-basic" label={label} variant="outlined"></TextField>:
          
          <TextField
          required
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="outlined"
          id="outlined-basic" label={label} variant="outlined">
          </TextField>
          }
      </form>
    </div>
  )
}

export default Multirender
