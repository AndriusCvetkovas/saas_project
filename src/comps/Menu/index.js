import React,{useState} from 'react'
import MenuItems from '../Menu/MenuItems/index'

function Menu({items,droparea,variant,placeholder,inputplaceholder}){
    const [value , setValue] = useState(placeholder);
    const [drop, setDrop] = useState(false);

    var cn = "MenuItems-container MenuItems-container_active"
    var menu_style= "Menu-container"
    var dropdown_button = "dropdown-button"
    
    if(!drop){
        cn = "MenuItems-container"
    }


    if (droparea == false){
        cn ="MenuItems-container"
        dropdown_button = ""
    }
    else{
        dropdown_button = "dropdown-button"
    }

    if(variant){
        cn = "MenuItems-variant-container"
        menu_style = "Menu-variant-container"
        if(!drop){
            cn = "MenuItems-variant-container MenuItems-variant-container_active"
        }
    }

   
    return (
        <div>
            <div className={menu_style}>
                <p className="selected-value">{value}</p> 
                <div onClick={()=> {setDrop(!drop)}} className={dropdown_button}></div>
            </div>
            <div className={cn}>
                <div className="dropdown-area">
                    {
                        items.map((o,i)=>{
                            return <MenuItems {...o} 
                                    setValue={setValue} 
                                    drop={drop}
                                    setDrop={setDrop}/>
                        })
                    }
                </div>
                    <input type="text" placeholder={inputplaceholder} className="menu-item-inputbox"></input>
                
            </div>
        </div>
    )
}
Menu.defaultProps = {
    items:[{
        CategoryTitle:"CategoryTitle1",
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
     variant:false,
     placeholder:"",
     inputplaceholder:""
}

export default Menu;