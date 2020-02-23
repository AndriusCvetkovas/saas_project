import React,{useState} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Search from '../../comps/Search';
import Category from '../../comps/Category';
import CategoryStats from '../../comps/CategoryStats';
import List from '../../comps/List';
import Menu from '../../comps/Menu';

var contact = [
    {
        CategoryTitle:"Henry"},
    {
        CategoryTitle:"Ramin"},
    {
        CategoryTitle:"Nico"},
    {
        CategoryTitle:"Heidi"},
    {
        CategoryTitle:"Search contact name",
    },
]

var tax = [
    {
        CategoryTitle:"Tax Inclusive"},
    {
        CategoryTitle:"Tax Exclusive"},
]

var price_list = [
    {
        CategoryTitle:"Wholesale"},
    {
        CategoryTitle:"Retail"},
]

var payment = [
    {
        CategoryTitle:"Cash"},
    {
        CategoryTitle:"Debit"},
    {
        CategoryTitle:"Credit"},
]

var titles = [
    {
        title: 'Item name'
    },
    {
        title: 'Quantity'
    },
    {
        title: 'Available'
    },
    {
        title: 'Price(CAD)'
    },
    {
        title: 'Discount'
    },
    {
        title: 'Total'
    },
];

function AddOrders(){
    return (
        <div className="wrapper">
            <Header 
                title={'Sales/Add Orders'} 
            />
             <div className="back-btn"></div>

             <div className="search-area">
                 <Search
                    showplaceholder={true}
                    placeholder= 'Search customers'
                    wide={true}
                    shadow={true} 
                  />
                  <Button 
                    type='blue'
                    text='+ New Customer'
                    wide={true}
                  />
             </div>

             <div className="info-box">
                 <div className="info-row">
                     <p>Bill to</p>
                     <div style={{position:"absolute", left:"20%"}}>
                        <Menu />
                     </div>
                     <p style={{position:"relative", left:"20%"}}>Ship from</p>
                     <Menu />
                 </div>
                 <div className="info-row">
                     <p>Ship to</p>
                     <div style={{position:"absolute", left:"20%"}}>
                        <Menu />
                     </div>
                     <p style={{position:"relative", left:"19%"}}>Contact</p>
                     <Menu 
                        droparea={true}
                        items={contact}
                        placeholder={"Select a contact"}
                     />
                 </div>
             </div>

             <div className="info-box">
                 <div className="info-row">
                     <p>Issue date</p>
                     <div style={{position:"absolute", left:"20%"}}>
                        <Menu />
                     </div>
                     <p style={{position:"relative", left:"17%"}}>email</p>
                     <Menu />
                 </div>
                 <div className="info-row">
                     <p>Ship date</p>
                     <div style={{position:"absolute", left:"20%"}}>
                        <Menu />
                     </div>
                     <p style={{position:"relative", left:"17.5%"}}>phone</p>
                     <Menu 
                        placeholder={"778 885 9875"}
                     />
                 </div>
             </div>

             <div className="info-box">
                 <div className="info-row">
                     <p>Currency</p>
                     <div style={{position:"absolute", left:"20%"}}>
                        <Menu 
                            placeholder={"Canadian Dollars"}
                        />
                     </div>
                     <p style={{position:"relative", left:"17%"}}>Tax Info</p>
                     <Menu 
                        droparea={true}
                        items={tax}
                        placeholder={"Tax Include"}
                     />
                 </div>
                 <div className="info-row">
                     <p>Price List</p>
                     <div style={{position:"absolute", left:"20%"}}>
                        <Menu 
                            droparea={true}
                            items={price_list}
                            placeholder={"Wholesale"}
                        />
                     </div>
                     <p style={{position:"relative", left:"17.5%"}}>Payment</p>
                     <Menu 
                        droparea={true}
                        items={payment}
                        placeholder={"Cash"}
                     />
                 </div>
             </div>

             <div className="big-info-box">
                 <div className="info-row">
                     <Category 
                        titles={titles}
                     />
                 </div>
                 <div className="item-row" style={{position:"relative"}}>
                     <Menu 
                        placeholder={"Type SKU or name"}
                        type={"fat menu"}
                     />
                     <div style={{position:'absolute', left:"20%"}}>
                        <Menu 
                            placeholder={"1"}
                            type={"small-quantity-input"}
                        />
                     </div>
                     <div style={{position:'absolute', left:"53%"}}>
                        <Menu 
                            placeholder={"0"}
                            type={"Price Menu"}
                        />
                     </div>
                     <div style={{position:'absolute', left:"70.5%"}}>
                        <Menu 
                            placeholder={"0"}
                            type={"discount Menu"}
                        />
                     </div>
                     <div style={{position:'absolute', left:"90%"}}>
                        <p>$855</p>
                     </div>
                 </div>
                 <div className="item-row">
                     <Menu 
                        placeholder={"Add another item"}
                        type={"fat menu"}
                     />
                 </div>
                 <div className="item-row">
                     <Menu 
                        placeholder={"Select Shipping Cost"}
                        type={"fat menu"}
                     />
                 </div>
             </div>

             <div className="Summary-box">
                 <div className="message-box">
                     <input className="message" type="text" placeholder="Message to Customer"></input>
                 </div>
                 <div className="summary-cost-box">
                     <div className="summary-info">
                         <div className="summary-row">
                            <p>Total Units</p>
                            <p>1200</p>
                         </div>
                         <div className="summary-row">
                             <p>Subtotal</p>
                             <p></p>
                         </div>
                         <div className="summary-row">
                            <p>Plus GST(12%)</p>
                            <p></p>
                         </div>
                         <div className="summary-row" style={{marginTop:20}}>
                            <b>Total</b>
                            <b></b>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="bottom-buttons">
                 <Button 
                    type='borderBlue'
                    text='Cancel'
                    wide={true}
                 />
                 <Button 
                    type='borderBlue'
                    text='Save as a Quote'
                    wide={true}
                 />
                 <Button
                    type='blue'
                    wide={true}
                    text='Finish'
                />
             </div>
        </div>
    )
};

export default AddOrders;