import React from 'react'
import TextField from '@material-ui/core/TextField';
import '../style.css';


function Textrender({label}) {
    
  
  return (
    <div>
      <form id="live" noValidate autoComplete="off">
        <TextField id="outlined-basic" label={label} variant="outlined"></TextField>
      </form>
    </div>
  )
}

export default Textrender
