import React,{useContext} from 'react'
import { Wraper } from './Policy.styles'
import DropDown from '../DropDown'
import DatePicker from '../DatePicker'
import RadioField from '../RadioField'
import { FormContext2 } from '../../context/Context'

const Policy = () => {
    const [startDate, currentPolicy, repairType, ncl, claim, claimDate,
        setstartDate,setcurrentPolicy,setrepairType,setncl,setclaim,setclaimDate
       ] = useContext(FormContext2)
    
    

    const repairTypeIdarray = [1, 2, 3, 4, 5, 6, 7]
    const claimYears = [1,2,3,4,5]
    
    
    const repairTypeIdhandleChange = (event) => {
       setrepairType(event.target.value);
    };
    
    return (
        <Wraper>
            <DatePicker lable='Start Date' vertical={25} value={startDate} change={ setstartDate}/>
            
            <RadioField title='Current Policy Expired' lab1='Yes' lab2='No' value={currentPolicy} change={ setcurrentPolicy}/>

            <DropDown value={repairType} lable='Repair Type' list={repairTypeIdarray} change={repairTypeIdhandleChange} width='95%' bottom={ 3}/>
            
            <RadioField title='NCL Provided' lab1='Yes' lab2='No' value={ncl} change={ setncl}/>
               
            <RadioField title='Claim Ever Made' lab1='Yes' lab2='No'  value={claim} change={setclaim} type='year' lableArray={claimYears}/>
            
            <DatePicker lable='Last Claim Date' vertical={10} value={claimDate} change={setclaimDate}/>
           
        </Wraper>
    )
}

export default Policy
