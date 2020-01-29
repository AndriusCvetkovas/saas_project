import React from 'react'
import MenuItems from '../Menu/MenuItems/index'

function Menu({value, furniture_Category,droparea}){
    var menu_container;

    if (droparea == false){
        menu_container = 'hide-MenuItems-container'
    }
    else {
        menu_container = 'MenuItems-container'
    }
    return (
        <div>
            <div className="Menu-container">
            <p className="selected-value">{value}</p> 
            </div>
            <div className={menu_container}>
                <div className="dropdown-area">
                    {
                        furniture_Category.map((o,i)=>{
                            return <MenuItems {...o} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
Menu.defaultProps = {
    value:"--",
    furniture_Category:[{
        CategoryTitle:"CategoryTitle1"
    }, {
        CategoryTitle:"CategoryTitle2"
    }, {
        CategoryTitle:"CategoryTitle3"
    }, {
        CategoryTitle:"CategoryTitle4"
    }, {
        CategoryTitle:"CategoryTitle5"
    }],
     droparea:false,
}

export default Menu;