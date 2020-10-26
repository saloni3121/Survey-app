import React from 'react'
import {TextField} from '@material-ui/core';
import '../style.css';

function Textrender({label,important}) {
    
  
  return (
    <div>
      <form id="live" noValidate autoComplete="off">
        {!important?
        <TextField
        label={label}
        variant="outlined"
        id="validation-outlined-input"
        />:
      <TextField
        required
        label={label}
        required
        variant="outlined"
        id="validation-outlined-input"
      />}
      </form>
    </div>
  )
}

export default Textrender
