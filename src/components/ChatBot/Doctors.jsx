import React, { useEffect } from "react";
import { useGetDoctorsQuery } from "../../redux/api/doctorApi";
import SearchContent2 from "./SearchContent2";



export default function Doctors(props) {
    const { data, isLoading, isError } = useGetDoctorsQuery();
    
    const doctorsData = data?.doctors;   
    
    const handleDocSelect = (item) => {
        console.log(item)
        props.actions.handleSelectDoc(item);
    }

    return (
        <>
            {               
                doctorsData && doctorsData?.map((item, id) => (
                    <SearchContent2 key={id + item.id} data={item} onClick={() => handleDocSelect(id)} />
                ))            
            }
        </>
    )
}