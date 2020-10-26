import React from 'react'
import TextField from '@material-ui/core/TextField';
import '../style.css'

function Numericrender({label,important}) {

  return (
    <div id="live">
      {!important?<TextField
          id="standard-number"
          label={label}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />:
        <TextField
          required
          id="standard-number"
          label={label}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        }
    </div>
  )
}

export default Numericrender
