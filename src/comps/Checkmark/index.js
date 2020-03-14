import React, {useState, useEffect} from 'react';

import {IoIosCheckmark} from 'react-icons/io';
function Checkmark({stat}){
    var ch = '';
    const [check, setCheck] = useState(stat);
    if(check){
        ch = <IoIosCheckmark style={{minWidth:35, minHeight:35, marginLeft:-5}}/>;
    }
    useEffect(()=> {
        setCheck(!stat)
    }, [stat])
    return(
        <div className='checkmark_container' onClick={()=>setCheck(!check)}>
            {ch}
        </div>
    )
}
Checkmark.defaultProps = {
    
}
export default Checkmark;