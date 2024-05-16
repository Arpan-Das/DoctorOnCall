import React, {useState, useEffect} from "react";


export default function Location (props){

    const handleSelect = (loc) => {
        console.log(loc)
        props.actions.handleSelectLoc(loc);
    }

    return (
        <>
            <div className='btn-row'>
                <button className='bot_btn' onClick={() => handleSelect('Barasat')}>Barasat</button>
                <button className='bot_btn' onClick={() => handleSelect('Barrackpur')}>Barrackpur</button>
                <button className='bot_btn' onClick={() => handleSelect('Dum Dum')}>Dum Dum</button>
                <button className='bot_btn' onClick={() => handleSelect('Kolkata')}>Kolkata</button>
                <button className='bot_btn' onClick={() => handleSelect('Kalyani')}>Kalyani</button>
                <button className='bot_btn' onClick={() => handleSelect('New Town')}>New Town</button>
            </div>
            <div onClick={() => handleSelect('kol')}>kolkata</div>
        </>
    )
}