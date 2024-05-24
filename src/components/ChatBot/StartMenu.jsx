import React from 'react';

export default function StartMenu(props) {
    const handleAppointment = () => {
        props.actions.handleDocType();
    }

    const handleTrack = () => {
        props.actions.handleTrack();
    } 

    const handleNearByLoc = () => {
        props.actions.handleNearByLoc();
    }

    return (
        <div className='btn-row'>
        <button className='bot_btn' onClick={() => handleAppointment()}>Book An Appointment</button>
        <button className='bot_btn' onClick={() => handleTrack()}>Track An Appointment</button>
        <button className='bot_btn' onClick={() => handleNearByLoc()}>Find Near by Doctor</button>
        </div>
    )
}