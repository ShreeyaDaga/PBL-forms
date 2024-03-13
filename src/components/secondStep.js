import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core';
import { multistepContext } from '../stepContext';

export default function SecondStep() {
    const {setStep, userData, setUserData} = useContext(multistepContext);
  return (
    <div className='step'>
      <div>
        <TextField label="First Name" margin="normal" variant="outlined" color="secondary" style={{ width: '30ch' }}/>
      </div>
      <div>
        <TextField label="Last Name" margin="normal" variant="outlined" color="secondary" style={{ width: '30ch' }}/>
      </div>
      <div>
        <TextField label="Roll Number" margin="normal" variant="outlined" color="secondary" style={{ width: '30ch' }}/>
      </div>
      <div>
        <TextField label="Category" margin="normal" variant="outlined" color="secondary" style={{ width: '30ch' }}/>
      </div>
      <div>
      <Button variant="contained" onClick={()=>setStep(1)} color="secondary.main" style={{ marginTop: '12px', marginRight: '16px' }}>Back</Button> 
      <Button variant="contained" onClick={()=>setStep(3)} color="primary" style={{ marginTop: '12px', marginLeft: '16px', backgroundColor: '#00df9a', color: 'black'}}>Next</Button> 
      
      </div>
      
    </div>
  )
}
