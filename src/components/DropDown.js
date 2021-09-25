import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';


const DropDown = ({value,lable,list,change,width,bottom}) => {
    return (
      <FormControl sx={{ m: 1, minWidth: 100,width:width,marginBottom:bottom }}>
        <p style={{color:'gray',marginLeft:5}}>{ lable}</p>
        <Select
          value={value}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={change}
          placeholder={lable}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
                    {list.map((val, index) => {
                        return (
                            <MenuItem key={index} value={val}>{val}</MenuItem>
              )
          })}
        </Select>
            
      </FormControl>
    )
}

export default DropDown
