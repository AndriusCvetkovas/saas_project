import React from 'react'

function MenuItems({CategoryTitle}){
    return (
            <div className="dropdown-items">
                {CategoryTitle}
            </div>
    )
}
MenuItems.defaultProps = {
    CategoryTitle:"Default title"
}

export default MenuItems;