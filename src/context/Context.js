import React,{useState,createContext} from 'react'

export const FormContext1 = createContext()
export const FormContext2 = createContext()
export const FormContext3 = createContext()

export const FormProvider1 = (props) => {
    const [make, setmake] = useState('')
    const [model, setmodel] = useState('')
    const [trim, settrim] = useState('')
    const [bodytype, setbodytype] = useState('')
    const [chassisNumber, setchassisNumber] = useState(null)
    const [manufacture, setmanufacture] = useState(null)
    const [firstRegState, setfirstRegState] = useState(null)
    const [vehicle, setvehicle] = useState(null)
    const [vehicleVal, setvehicleVal] = useState(null)


    return (
        <FormContext1.Provider
            value={[make, model, trim, bodytype, chassisNumber,
                manufacture, firstRegState, vehicle, vehicleVal, setmake, setmodel, settrim, setbodytype,
                setchassisNumber,setmanufacture,setfirstRegState,setvehicle,setvehicleVal
            ]}>
            {props.children}
        </FormContext1.Provider>
    )
}

export const FormProvider2 = (props) => {
    const [startDate, setstartDate] = useState(null)
    const [currentPolicy, setcurrentPolicy] = useState(null)
    const [repairType, setrepairType] = useState('')
    const [ncl, setncl] = useState(null)
    const [claim, setclaim] = useState(null)
    const [claimDate, setclaimDate] = useState(null)
    
    return (
        <FormContext2.Provider value={[startDate, currentPolicy, repairType, ncl, claim, claimDate,
         setstartDate,setcurrentPolicy,setrepairType,setncl,setclaim,setclaimDate
        ]}>
            {props.children}
        </FormContext2.Provider>
    )
}

export const FormProvider3 = (props) => {
    const [nationality, setnationality] = useState('')
    const [country, setcountry] = useState('')
    const [dateofbirth, setdateofbirth] = useState(null)
    const [drivingLicence, setdrivingLicence] = useState(null)
    const [name, setname] = useState(null)
    const [mobile, setmobile] = useState(null)
    const [email, setemail] = useState(null)

    return (
        <FormContext3.Provider
            value={[nationality,country, dateofbirth, drivingLicence, name, mobile, email,
            setnationality,setcountry,setdateofbirth,setdrivingLicence,setname,setmobile,setemail
        ]}>
            {props.children}
        </FormContext3.Provider>
    )
}