import React from 'react'

function MenuItems({CategoryTitle,onClick,setValue,setDrop,drop,type}){

    var cn = "dropdown-items"

    if(type == "plan"){
        cn = "plan-dropdown-items"
    }
    else {
        cn = "dropdown-items"
    }
    return (
            <div onClick={()=>{
                setValue(CategoryTitle)
                setDrop(!drop)
            }} 
            className={cn}>
                {CategoryTitle}
            </div>
    )
}
MenuItems.defaultProps = {
    CategoryTitle:"Default title",
    onClick:()=>{},
}

export default MenuItems;