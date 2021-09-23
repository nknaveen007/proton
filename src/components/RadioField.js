import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup({ title, lab1, lab2, value, change }) {
  return (
    <FormControl component="fieldset" style={{marginLeft:10,marginBottom:10,minWidth:120}}>
      <FormLabel component="legend">{ title}</FormLabel>
      <RadioGroup row aria-label={title} name="row-radio-buttons-group" value={value} onChange={event=>change(event.target.value)}>
        <FormControlLabel value={true} control={<Radio />} label={lab1} />
        <FormControlLabel value={false} control={<Radio />} label={lab2} />
      </RadioGroup>
    </FormControl>
  );
}
