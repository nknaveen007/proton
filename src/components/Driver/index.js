import React,{useContext} from 'react'
import { Wraper,ColumnWraper } from './Driver.styles'
import DropDown from '../DropDown'
import TextField from '@mui/material/TextField';
import DatePicker from '../DatePicker'
import { FormContext3 } from '../../context/Context';
import {YearListGenretor} from '../../Helper/Helper'


const Driver = () => {
    const [nationality,country, dateofbirth, drivingLicence, name, mobile, email,
        setnationality,setcountry,setdateofbirth,setdrivingLicence,setname,setmobile,setemail
    ] = useContext(FormContext3)

   

    const nationalityIdarray = [1, 2, 3, 4, 5, 6, 7]
    const dLCountryIdarray = [91, 12, 113, 41, 55, 68, 71]
    const drivingLicencearray = YearListGenretor(10)

    const nationalityIdhandleChange = (event) => {
        setnationality(event.target.value);
    };
    const dLCountryIdhandleChange = (event) => {
        setcountry(event.target.value);
    };
    const drivingLicencehandleChange = (event) => {
        setdrivingLicence(event.target.value);
    };
    
    return (
        <Wraper>
            <ColumnWraper>
               <DropDown value={nationality}  lable='Nationality' list={nationalityIdarray} change={nationalityIdhandleChange} width='45%'/>
               <DropDown value={country} lable='Country' list={dLCountryIdarray} change={dLCountryIdhandleChange} width='45%' />
            </ColumnWraper>

            <DatePicker lable='Date Of Birth' vertical={20} value={dateofbirth} change={setdateofbirth}/>

            <DropDown lable='Driving License UAE Exp'  value={drivingLicence} list={drivingLicencearray} change={drivingLicencehandleChange}/>
            
            <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={event=>setname(event.target.value)} style={{ width: '95%', marginLeft: 10, marginBottom: 30 }} />
            
            <TextField id="standard-basic" label="Mobile Number" variant="standard" value={mobile} onChange={event=>setmobile(event.target.value)} type='number' style={{ width: '95%', marginLeft: 10, marginBottom: 30 }} />

            <TextField id="standard-basic" label="Email Address" variant="standard" value={email} onChange={event=>setemail(event.target.value)} type='email' style={{ width: '95%', marginLeft: 10, marginBottom: 30 }} />
        </Wraper>
    )
}

export default Driver
