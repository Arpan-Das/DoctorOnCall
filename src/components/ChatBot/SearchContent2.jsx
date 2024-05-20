import React from 'react';
import { Link } from 'react-router-dom';
// import showImg from '../../../images/specialities/specialities-01.png'
import StarRatings from 'react-star-ratings';
import { Tag } from 'antd';
import '../Doctor/SearchDoctor/index.css';
import './bot_style.css'
import { FaLocationArrow, FaRegThumbsUp, FaDollarSign, FaComment } from "react-icons/fa";
import selectLoc from './selectLoc';
// import { truncate } from '../../../utils/truncate';

const SearchContent2 = ({ data, setSelectDoc }) => {
    const services = data?.services?.split(',');

    
    return (
        <div className="mb-4 rounded bot_doc" style={{ background: '#f3f3f3' }} >
            <div className='d-flex p-3 justify-content-between'>
                <div className='d-flex gap-3' onClick={() => setSelectDoc(data)}>
                    <div className='doc-img-fluid d-flex align-items-center'>
                        { data?.img && <img src={data?.img} className="" alt="User Image"  style={{ width: '60px', height: '60px' }}/>}
                    </div>
                    <div className="doc-info">
                        <h5 className='mb-0'>Dr. {data?.firstName + ' ' + data?.lastName}</h5>
                        <p className='m-0 form-text'>{data?.designation}</p>
                        <p className="doc-department m-0">{data?.specialization}</p>                                             
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default SearchContent2