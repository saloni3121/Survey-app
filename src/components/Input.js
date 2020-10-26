import React from 'react'
import Textfield from '@material-ui/core'


export default function Input(props){
    const{name,label,value,error=null,onchnage}=props;
    return(
        <Textfield
          error
          variant="filled"
          id="filled-error-helper-text"
          label={label}
          value={value}
          onChange={onchange}
          {...(error && {error:true,helperText:"validation"})}
        />
    )
}
