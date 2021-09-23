import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

export default function YearPicker({label,value,change}) {
  

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3} style={{width:'95%',marginLeft:10}}>
        <DatePicker
          
          views={['year']}
          label={label}
          value={value}
          onChange={(newValue) => {
            change(newValue);
          }}
          maxDate={new Date()}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      
      </Stack>
    </LocalizationProvider>
  );
}
