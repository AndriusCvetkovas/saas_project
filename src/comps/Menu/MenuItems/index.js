import React from 'react'

function MenuItems({CategoryTitle,onClick}){
    return (
            <div onClick={onClick} className="dropdown-items">
                {CategoryTitle}
            </div>
    )
}
MenuItems.defaultProps = {
    CategoryTitle:"Default title",
    onClick:()=>{},
}

export default MenuItems;