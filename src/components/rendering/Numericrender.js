import React from 'react'
import TextField from '@material-ui/core/TextField';
import '../style.css'

function Numericrender({label}) {

  return (
    <div id="live">
      <TextField
          id="standard-number"
          label={label}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </div>
  )
}

export default Numericrender
