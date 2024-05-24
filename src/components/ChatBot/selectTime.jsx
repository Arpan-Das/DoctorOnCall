import React from "react";
import SelectDateAndTime from "../Booking/SelectDateAndTime";
import DoctorBooking2 from "../Booking/DoctorBooking/DoctorBooking";


const selectTime = ({doctorIDchat}) => {
    console.log(doctorIDchat)
    return (
        <>
           <DoctorBooking2 doctorIDchat={doctorIDchat}/>
        </>
    )
}


export default selectTime