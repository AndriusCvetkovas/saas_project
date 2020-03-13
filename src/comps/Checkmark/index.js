import React, {useState} from 'react';

import {IoIosCheckmark} from 'react-icons/io';
function Checkmark({stat}){
    var ch = '';
    const [check, setCheck] = useState(stat);

    if(check){
        ch = <IoIosCheckmark style={{minWidth:35, minHeight:35, marginLeft:-5}}/>;
    }

    return(
        <div className='checkmark_container' onClick={()=>setCheck(!check)}>
            {ch}
        </div>
    )
}
Checkmark.defaultProps = {
    stat: false
}
export default Checkmark;