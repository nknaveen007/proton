import React,{Fragment} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup({ title, lab1, lab2, value, change, type,lableArray  }) {
  console.log(type)
  return (
    <FormControl component="fieldset" style={{marginLeft:10,marginBottom:15,minWidth:120}}>
      <FormLabel component="legend">{ title}</FormLabel>
      <RadioGroup row aria-label={title} name="row-radio-buttons-group" value={value} onChange={event=>change(event.target.value)}>
        { type==='year'?
        <Fragment>
            {lableArray.map((val, index) => {
              console.log(val)
              return (
                <FormControlLabel key={index} value={val} control={<Radio />} label={val + ' year'} />
             )
           })}
            
          
        </Fragment>
        :
        <Fragment>
          <FormControlLabel value={true} control={<Radio />} label={lab1} />
          <FormControlLabel value={false} control={<Radio />} label={lab2} />
        </Fragment>
        }
        

      </RadioGroup>
    </FormControl>
  );
}
