import React,{Fragment, useContext} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Wraper,Header} from './Home.styles'
import Vehicle from '../../components/Vehicle';
import Driver from '../../components/Driver';
import Policy from '../../components/Policy'
import { FormContext1, FormContext2, FormContext3 } from '../../context/Context';

const steps = [
  
  {
    label: 'Vehicle',
    
  },
  {
    label: 'Policy',
    
  },
  {
    label: 'Driver',
    
  },
];

const Home = () => {

  const [make, model, trim, bodytype, chassisNumber,
       manufacture, firstRegState, vehicle, vehicleVal, setmake, setmodel, settrim, setbodytype,
        setchassisNumber,setmanufacture,setfirstRegState,setvehicle,setvehicleVal
] = useContext(FormContext1)

  const [startDate, currentPolicy, repairType, ncl, claim, claimDate,
         setstartDate,setcurrentPolicy,setrepairType,setncl,setclaim,setclaimDate
  ] = useContext(FormContext2)
  
  const [nationality,country, dateofbirth, drivingLicence, name, mobile, email,
    setnationality,setcountry,setdateofbirth,setdrivingLicence,setname,setmobile,setemail
] = useContext(FormContext3)

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setmake(null)
    setmodel(null)
    settrim(null)
    setbodytype(null)
    setchassisNumber(null)
    setmanufacture(null)
    setfirstRegState(null)
    setvehicle(null)
    setvehicleVal(null)
    setstartDate(null)
    setcurrentPolicy(null)
    setrepairType(null)
    setncl(null)
    setclaim(null)
    setclaimDate(null)
    setnationality(null)
    setcountry(null)
    setdateofbirth(null)
    setdrivingLicence(null)
    setname(null)
    setmobile(null) 
    setemail(null)
    setActiveStep(0);
  };

  return (
    <Fragment>
       <Header/>
      <Wraper>
      
        <Box sx={{ maxWidth: 400 }}>
         
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step  key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {step.label === 'Vehicle' ? <Vehicle /> : null}
              {step.label === 'Driver' ? <Driver /> : null}
              {step.label === 'Policy' ? <Policy /> : null}
              
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
            </Box>
      </Wraper>
      </Fragment>
  );
}

export default Home