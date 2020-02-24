import React,{useState} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Search from '../../comps/Search';
import Category from '../../comps/Category';
import CategoryStats from '../../comps/CategoryStats';
import List from '../../comps/List';
import Menu from '../../comps/Menu';

//npm packages
import Switch from "react-switch";

var furniture_Category = [
    {
        CategoryTitle:"Bed"},
    {
        CategoryTitle:"Cabinet"},
    {
        CategoryTitle:"Desk/Table"},
    {
        CategoryTitle:"Accessory"},
    {
        CategoryTitle:"+ Add more Category",
    },
]

var series = [
    {
        CategoryTitle:"Alpha"},
    {
        CategoryTitle:"Beta"},
    {
        CategoryTitle:"Omiga"},
    {
        CategoryTitle:"Swan"},
    {
        CategoryTitle:"+ Add new Series",
    },
]

var brand = [
    {
        CategoryTitle:"Magniflex"},
    {
        CategoryTitle:"Poromen"},
    {
        CategoryTitle:"Noble Home"},
    {
        CategoryTitle:"Limitless"},
    {
        CategoryTitle:"+ Add new brand",
    },
]

var texture = [
    {
        CategoryTitle:"Leather"},
    {
        CategoryTitle:"Velvet"},
    {
        CategoryTitle:"Fabric"},
    {
        CategoryTitle:"Woven"},
    {
        CategoryTitle:"+ Add new Back Texture",
    },
]

var color = [
    {
        CategoryTitle:"Orange"},
    {
        CategoryTitle:"Red"},
    {
        CategoryTitle:"Blue"},
    {
        CategoryTitle:"White"},
    {
        CategoryTitle:"+ Add new Color",
    },
]




function AddProductPage(){
    const [checked,setChecked] = useState(false);
    var cn = "right right-disabled"
    
    if(checked == true){
        cn ="right"
    }

    return (
        <div className="wrapper">
            <Header 
                title={'Inventory/Overview/Add Product'} 
            />
            <div className="back-btn"></div>

            <div className="Detail_container">
                <div className="image_holder">
                    <img src={require('../../imgs/furnitures/chair-02.jpg')}></img>
                </div>
                <div className="product_dimensions">
                    <p>Dimensions(inches)</p>
                    <div className="dimension_inputs">
                        <Menu 
                            placeholder={"width"}
                            input={true}
                            droparea={false}
                        />
                        <span>X</span>
                        <Menu 
                            placeholder={"height"}
                            input={true}
                            droparea={false}
                        />
                        <span>X</span>
                        <Menu 
                            placeholder={"depth"}
                            input={true}
                            droparea={false}
                        />
                    </div>

                    <div className="quantity_section">
                        <p>Min Quantity you would like to keep in the warehouse:</p>
                        <p style={{color:"grey",fontSize:15,marginTop:-15}}>(For order request purpose)</p>
                        <div className="quantity_info">
                            <p style={{marginRight:30}}>Units:</p>
                            <Menu 
                                placeholder={"3"}
                                quanity_input={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div classNam style={{display:"flex",marginTop:50,height:"65%"}}>
                <div className="left">
                    <div className="selection_area">
                        <div className="selection_line">
                            <p style={{}}>SKU</p>
                            <Menu 
                                placeholder={"MTRS-M-1"}

                            />
                        </div>
                        <div className="selection_line">
                            <p>Category</p>
                                <Menu 
                                    droparea={true} 
                                    placeholder={"--"}
                                    inputplaceholder={"New Category"}
                                    items={furniture_Category}
                                />
                        </div>
                        <div className="selection_line">
                            <p>Brand</p>
                                <Menu 
                                droparea={true} 
                                placeholder={"--"}
                                inputplaceholder={"New Brand"}
                                items={brand}
                                />
                        </div>
                        <div className="selection_line">
                            <p>Series</p>
                                <Menu 
                                droparea={true} 
                                placeholder={"--"}
                                inputplaceholder={"New Series"}
                                items={series}
                                />
                        </div>
                        <div className="selection_line">
                            <p>Variant</p>
                            <Switch 
                                uncheckedIcon={false}
                                checkedIcon={false}
                                checked={checked}
                                onChange={()=>{
                                    if(checked == false) {
                                        setChecked(true);
                                    }
                                    if(checked == true) {
                                        setChecked(false);
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="textarea_container">
                        <p>Description</p>
                        <div className="textarea">
                            <p style={{top:"5%", position:"absolute", left:10,fontSize:15}}>This chair only has orange, other colors are discontinued</p>
                        </div>
                    </div>
                </div>
                <div className={cn}>
                    <div style={{marginLeft:25}}>
                        <h3 style={{marginTop:35, marginBottom:0}}>Variant Option</h3>
                        <div className="variant_button_cont">
                            <div className="button_cont">
                                <Button
                                    type='blue'
                                    text='Black Texture'
                                    wide={true}
                                />
                                <div className="delete_btn">
                                    <Button 
                                        type='delete'
                                        text='-'
                                        />
                                </div>
                            </div>
                        </div>

                        <p>+ Add new Option</p>
                        <div className="newoption_input">
                            <Menu 
                                placeholder={"Leg texture"}
                            />
                            <div style={{marginLeft:15}}>
                                <Button
                                    text='Add'
                                    type = 'blue'
                                />
                            </div>
                        </div>
                        
                        <div style={{width:"95%"}}>
                            <hr></hr>
                        </div>

                        <h3>Option Value</h3>

                        <div className="option_row">
                            <p>Back Texture</p>
                            <div style={{position:"absolute", right:"30%"}}>
                                <Menu 
                                    smalldrop={true} 
                                    droparea={true}
                                    placeholder={"--"}
                                    inputplaceholder={"New Texture"}
                                    items={texture}
                                />
                            </div>

                            <div style={{display:"flex",alignItems:"center",right:20,position:"absolute"}}>
                                <p style={{marginRight:5}}>$</p>
                                <Menu 
                                    costinput={true}
                                    placeholder={"--"}
                                />
                            </div>
                        </div>
                        <div className="option_row">
                            <p>Color</p>
                            <div style={{position:"absolute", right:"30%"}}>
                                <Menu 
                                    smalldrop={true} 
                                    droparea={true}
                                    placeholder={"--"}
                                    inputplaceholder={"New Texture"}
                                    items={color}
                                />
                            </div>

                            <div style={{display:"flex",alignItems:"center",right:20,position:"absolute"}}>
                                <p style={{marginRight:5}}>$</p>
                                <Menu 
                                    costinput={true}
                                    placeholder={"--"}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="action_btns">
                    <Button
                        type='borderBlue'
                        text='Cancel'
                        wide={true}
                    />
                    <Button
                        type='blue'
                        text='Add Product'
                        wide={true}
                    />
            </div>


        </div>
    )
}

export default AddProductPage;