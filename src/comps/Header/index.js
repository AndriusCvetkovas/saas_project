import React from 'react';

function Header({title}){
    return (
        <div className = 'header_container'>
            {title}
        </div>
    )
}
Header.defaultProps = {
    title: 'default'
}
export default Header;