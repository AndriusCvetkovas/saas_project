import React from 'react'

function MenuItems({CategoryTitle,onClick,setValue,setDrop,drop}){
    return (
            <div onClick={()=>{
                setValue(CategoryTitle)
                setDrop(!drop)
            }} 
            className="dropdown-items">
                {CategoryTitle}
            </div>
    )
}
MenuItems.defaultProps = {
    CategoryTitle:"Default title",
    onClick:()=>{},
}

export default MenuItems;