import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

export default function BasicDatePicker({lable,vertical,max,value,change}) {
  

    return (
      
<LocalizationProvider dateAdapter={AdapterDateFns} >
<Stack spacing={3} style={{width:'95%',marginLeft:10,marginTop:vertical,marginBottom:vertical}}>
               
      <DatePicker
        label={lable}
        value={value}
        onChange={(newValue) => {
          change(newValue);
            }}
          maxDate={max?max:null}
          renderInput={(params) => <TextField {...params} />}
              
      />
    </Stack> 
    </LocalizationProvider>
  );
}
