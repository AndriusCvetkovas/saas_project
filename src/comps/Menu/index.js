import React,{useState} from 'react'
import MenuItems from '../Menu/MenuItems/index'

function Menu({items,droparea,variant,placeholder,inputplaceholder,input,quanity_input,smalldrop,costinput,type}){
    const [value , setValue] = useState(placeholder);
    const [drop, setDrop] = useState(false);

    var cn = "MenuItems-container MenuItems-container_active"
    var menu_style= "Menu-container"
    var dropdown_button = "dropdown-button"
    
    if(!drop){
        cn = "MenuItems-container-false"
    }


    if (droparea == false){
        cn ="MenuItems-container-false"
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

    if(input){
        menu_style ="input_menu"
        cn = "MenuItems-container-false"
    }

    if(quanity_input){
        menu_style ="quantity_input"
        cn = "MenuItems-container-false"
    }

    if(smalldrop){
        menu_style = "Small-Menu-container"
        cn = "MenuItems-container-disabled-small"
        if(drop == true){
            cn = "MenuItems-container-active-small"
        }
    }

    if(costinput){
        menu_style = "cost-input"
    }

    if(type == "fat menu"){
        menu_style = "fat-menu"
    }

    if(type == "small-quantity-input"){
        menu_style = "small-quantity-input"
    }

    var currency = "";
    if(type == "Price Menu"){
        menu_style = "price-menu"
        currency = "currency";
    } else {
        currency = "currency-disabled";
    }

    var discount = "";
    if(type == "discount Menu"){
        menu_style = "discount-menu"
        discount = "discount";
    } else {
        discount = "discount-disabled";
    }


 
   
    return (
        <div>
            <div className={menu_style}>
                <p className={currency}>$</p>
                <input className="selected-value" type='text' placeholder={value} ></input>
                <p className={discount}>%</p>
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
     input:false,
     placeholder:"",
     inputplaceholder:"",
     quanity_input:false,
     smalldrop:false,
     costinput:false,
     type:""
}

export default Menu;