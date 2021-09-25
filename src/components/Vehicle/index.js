import React,{useContext} from 'react'
import { Wraper,ColumnWraper } from './Vehicle.styles'
import DropDown from '../DropDown'
import TextField from '@mui/material/TextField';
import DatePicker from '../DatePicker'
import RadioField from '../RadioField'
import { FormContext1 } from '../../context/Context';
import {YearListGenretor} from '../../Helper/Helper'


const Vehicle = () => {
  const [make, model, trim, bodytype, chassisNumber,
    manufacture, firstRegState, vehicle, vehicleVal, setmake, setmodel, settrim, setbodytype,
    setchassisNumber,setmanufacture,setfirstRegState,setvehicle,setvehicleVal
    ] = useContext(FormContext1)
    
   

    const MakeIdarray = [1, 2, 3, 4, 5, 6, 7]
    const ModelIdarray = [11, 26, 32, 47, 51, 69, 72]
    const BodytypeIdarray = MakeIdarray
    const ManufactureYearArray = YearListGenretor()
   
    
    
    const makeIdhandleChange = (event) => {
       setmake(event.target.value);
    };
    const modelIdhandleChange = (event) => {
        setmodel(event.target.value);
    };
    const bodytypeIdhandleChange = (event) => {
        setbodytype(event.target.value);
    };
    const manufactureIdhandleChange = (event) => {
        setmanufacture(event.target.value);
    };
    
    return (
        <Wraper>
            <ColumnWraper>
               <DropDown value={make} lable='Make' list={MakeIdarray} change={makeIdhandleChange} width='45%'/>
               <DropDown value={model} lable='Model' list={ModelIdarray} change={modelIdhandleChange} width='45%' />
            </ColumnWraper>

            <TextField id="standard-basic" label="Trim" variant="standard" value={trim} onChange={(event)=>settrim(event.target.value)} style={{ width: '95%', marginLeft: 10, marginBottom: 20 }} />
            
            <DropDown value={bodytype} lable='Bodytype' list={BodytypeIdarray} change={bodytypeIdhandleChange} width='95%' />

            <TextField id="standard-basic" label="Chassis Number - (Optional)" variant="standard" value={chassisNumber} onChange={(event)=>setchassisNumber(event.target.value)} type='number' style={{ width: '95%', marginLeft: 10, marginBottom: 30 }} />
            
            <DropDown value={manufacture} lable='Manufacture Year' list={ManufactureYearArray} change={manufactureIdhandleChange} width='95%' />
            
            <DatePicker lable='First Registration Date' value={firstRegState} change={setfirstRegState} vertical={25} max={new Date()}/>
            
            <RadioField title='User Car ?' lab1='Yes' lab2='No' value={vehicle} change={ setvehicle}/>

            <TextField id="standard-basic" label="Vehicle Value" variant="standard" value={vehicleVal} onChange={event=>setvehicleVal(event.target.value)} type='number' style={{ width: '95%', marginLeft: 10, marginBottom: 30 }} />

            
            
        </Wraper>
    )
}

export default Vehicle
