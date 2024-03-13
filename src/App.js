
import './App.css';
import React, {useContext} from 'react';
import FirstStep from './components/firstStep';
import SecondStep from './components/secondStep';
import ThirdStep from './components/thirdStep';
import { createTheme } from '@mui/material/styles';
import {Stepper, StepLabel, Step} from '@material-ui/core';
import {multistepContext} from './stepContext';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#000000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#00df9a',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});

function App() {

  const { currentStep, finalData} = useContext(multistepContext);
  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }

  return (
    <div className="App">

      <h3 style={{color:'black'}}>Enter your details and documents</h3>
      <div className='center-stepper'>
        <Stepper style={{width: '18%'}} activeStep={currentStep- 1} orientation='horizontal' >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
    </div>
  );
}

export default App;