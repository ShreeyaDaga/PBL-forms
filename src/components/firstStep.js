import React,{useContext} from 'react';
import { Button, TextField, MenuItem, Box} from '@material-ui/core';
import { multistepContext } from '../stepContext';

const category = [
  {
    value: 'Teacher',
    label: 'Teacher',
  },
  {
    value: 'Student',
    label: 'Student',
  },
];

export default function FirstStep() {
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
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            style={{ marginTop: '12px' }}
          >
            
            <div>
              <TextField
                id="select-category"
                select
                label="Category"
                defaultValue="Teacher"
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your category"
                variant="filled"
              >
                {category.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            
          </Box>
      <div>
      <Button variant="contained" onClick={()=>setStep(2)} color="secondary.main" style={{ marginTop: '12px', backgroundColor: '#00df9a', color: 'black'  }}>Next</Button> 
      </div>
      
    </div>
  );
}