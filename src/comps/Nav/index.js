import React from 'react';
import { BrowserRouter, Route, NavLink, Link, Switch, useLocation } from "react-router-dom";

function Nav(){
    return(
            <div className="Nav">
                <img></img>
                <div className='company_name'>Inspiration Furniture</div>
                <div>
                <div className='dashboard_section wrap'>
                    <h1>Dashboard</h1>
                    <div>User</div>
                    <div>Profile Settings</div>
                    <div>Billing Settings</div>
                </div>
                <div className='sales_section wrap'>
                    <h1>Sales</h1>
                    <NavLink 
                    activeStyle={{
                        fontWeight: "bold",
                        fontSize: 16
                    }} 
                    to ='/Orders'>Orders</NavLink>
                    <div>Returns</div>
                    <div>Invoice</div>
                    <div>Shipping</div>
                </div>
                <div className='inventory_section wrap'>
                    <h1>Inventory</h1>
                    <NavLink 
                    activeStyle={{
                    fontWeight: "bold",
                    fontSize: 16
                    }} 
                    to='/Inventory'>Overviews</NavLink>
                    <div>Templates</div>
                </div>
                <div className='customer_section wrap'>
                    <h1>Customer</h1>
                </div>
                </div>
            </div>

    )
}
export default Nav;