import React from "react";
import SearchContent2 from "./SearchContent2";
import { useGetDoctorsQuery } from "../../redux/api/doctorApi";

// function useCustomHook(query) {
//     const { data, isLoading, isError } = useCustomHook({ ...query })   
//     return data?.doctors;
//   }

export default function selectLoc (props){

    console.log('df',props)
    // const query = {};
    // // loc !== '' && (query["city"] = propschildren.props.state.checker);
     
    // const doctorsData = useCustomHook();   
    
    

    return (
        <>
            {               
                // doctorsData && doctorsData?.map((item, id) => (
                //     <SearchContent2 key={id + item.id} data={item} />
                // ))            
            }
        </>
    )
}