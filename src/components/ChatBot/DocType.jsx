import React from "react";

const DocType = (props) => {

    const handleDocType = (type) => {
        props.actions.handleSelectDoc(type);
    }

    return (
        <>
            <div className='btn-row'>
                <button className='bot_btn' onClick={() => handleDocType("Cardiologist")}>Cardiologist</button>
                <button className='bot_btn' onClick={() => handleDocType("Dermatologist")}>Dermatologist</button>
                <button className='bot_btn' onClick={() => handleDocType("Gynecologist")}>Gynecologist</button>
                <button className='bot_btn' onClick={() => handleDocType("Neurologist")}>Neurologist</button>
                <button className='bot_btn' onClick={() => handleDocType("Ophthalmologist")}>Ophthalmologist</button>
                <button className='bot_btn' onClick={() => handleDocType("Pediatrician")}>Pediatrician</button>
            </div>
        </>
    )
}

export default DocType