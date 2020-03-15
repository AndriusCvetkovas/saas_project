import React, {useState, useEffect} from 'react';

import {IoIosCheckmark} from 'react-icons/io';
function Checkmark({stat, hide}){
    var ch = '';
    const [check, setCheck] = useState(stat);
    var cn = 'checkmark_container'
    if(check){
        ch = <IoIosCheckmark style={{minWidth:35, minHeight:35, marginLeft:-5}}/>;
    }
    if(hide){
        cn = 'hide'
    }
    useEffect(()=> {
        setCheck(!stat)
    }, [stat])
    return(
        <div className={cn} onClick={()=>setCheck(!check)}>
            {ch}
        </div>
    )
}
Checkmark.defaultProps = {
    
}
export default Checkmark;