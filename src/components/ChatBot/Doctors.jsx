import React, { useState, useEffect } from "react";
import { useGetDoctorsQuery } from "../../redux/api/doctorApi";
import SearchContent2 from "./SearchContent2";



export default function Doctors(props) {
    console.log(props)
    const { data, isLoading, isError } = useGetDoctorsQuery({specialist: `${props.state.item}` });
    
    const doctorsData = data?.doctors;  
    const [selectDoc, setSelectDoc] = useState([]);
    
    const handleDocSelect = (item) => {
        console.log("yesdf",item)
        props.actions.handleSelectTime(item?.id);
    }

    // useEffect(() => {
    //     console.log(selectDoc)
    //     if(selectDoc.length > 0 ){
    //         props.actions.handleSelectDoc(selectDoc);
    //     }
    // },[selectDoc])

    return (
        <>
            {               
                doctorsData && doctorsData?.map((item, id) => (
                    <SearchContent2 key={id + item.id} data={item} setSelectDoc={handleDocSelect} />
                ))            
            }
        </>
    )
}