import React from 'react';
import {useState} from 'react';


import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Search from '../../comps/Search';
import Category from '../../comps/Category';
import CategoryStats from '../../comps/CategoryStats';
import List from '../../comps/List';
import OrderDetails from '../../comps/OrderDetails';
import PaymentInfo from '../../comps/PaymentInfo';
import Notes from '../../comps/Notes';
import { Link } from "react-router-dom";
function SalesPage(){
    var titles = [{
        title: 'Category',
    }];
    var cat = [
        {
            itemTitle1: 'All',
            itemTitle2: '',
            value1: 38,
            value2: 37,
            month1: 'All',
            month2: 'Process',
            dollar: false,
        },
        {
            itemTitle1: 'Active',
            itemTitle2: '',
            value1: 23,
            value2: 15,
            month1: 'Finalized',
            month2: 'Active',
            dollar: false
        },
        {
            itemTitle1: 'To Invoice',
            itemTitle2: '',
            value1: 66,
            value2: 59,
            month1: 'All',
            month2: 'Invoice',
            dollar: false
        },
        {
            itemTitle1: 'To Ship',
            itemTitle2: '',
            value1: 20,
            value2: 12,
            month1: 'Ready',
            month2: 'Ship',
            dollar: false
        }
    ];
    var titlesSort = [
        {
            title: 'Order No.',
            sort: true,
            
        },
        {
            title: 'Order Date',
            sort: true,
            onClick:()=>{alert('Sort')},
        },
        {
            title: 'Payment',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Amount',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Total',
            sort: true,
            onClick:()=>{alert('Sort')}
        }
    ];
    var titlesSortItems = [
        {
            title: 'Order Item',
            sort: false,
            
        },
        {
            title: 'SKU',
            sort: true,
            onClick:()=>{alert('Sort')},
        },
        {
            title: 'Invoiced',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Packed',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Fulfiled',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Paid',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Amount',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Total',
            sort: true,
            onClick:()=>{alert('Sort')}
        }
    ];
    var orders = [
        {
            itemTitle:'Item 1',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>234535</a>,
            itemCol1: '02/02/20',
            itemCol2: 'Credit',
            itemCol3: '$ 500',
            itemCol4: '$ 1,500',
            sales: true,
            orderNumber: '234535',
            orderDate: '06 February 2020',
            estimateDate: '22 February 2020',
            customerName: 'Angela Jang',
            phoneNumber: '778.798.3214',
            customerAddress: '5089 Dominion street, Burnaby, V5G 1C8',
            itemDetails: [
                {
                    itemId:'Item 1',
                    itemCol0: <img src={require('../../imgs/furnitures/sofa-01.jpg')} alt={'chair'}></img>,
                    itemCol1: 'MTRS-M-CC12KSP-1',
                    invoiced: true,
                    packed: true,
                    fullfilled: true,
                    paid: true,
                    amount: '$500',
                    total: '$500',
                },
                {
                    itemId:'Item 2',
                    itemCol0: <img src={require('../../imgs/furnitures/chair-01.jpeg')} alt={'chair'}></img>,
                    itemCol1: 'MTRS-M1',
                    invoiced: true,
                    packed: false,
                    fullfilled: false,
                    paid: true,
                    amount: '$1500',
                    total: '$1500',
                },
                {
                    itemId:'Item 3',
                    itemCol0: <img src={require('../../imgs/furnitures/sofa-02.jpeg')} alt={'desk'}></img>,
                    itemCol1: '920-123',
                    invoiced: false,
                    packed: false,
                    fullfilled: false,
                    paid: true,
                    amount: '$1500',
                    total: '$1500',
                }
        ]
        },
        {
            itemId:'Item 2',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>234535</a>,
            itemCol1: '02/02/20',
            itemCol2: 'Credit',
            itemCol3: '$ 500',
            itemCol4: '$ 1,500',
            sales: true,
            orderNumber: '234535',
            orderDate: '06 February 2020',
            estimateDate: '22 February 2020',
            customerName: 'Angela Jang',
            phoneNumber: '778.798.3214',
            customerAddress: '5089 Dominion street, Burnaby, V5G 1C8'
        },
        {
            itemId:'Item 2',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>234535</a>,
            itemCol1: '02/02/20',
            itemCol2: 'Credit',
            itemCol3: '$ 500',
            itemCol4: '$ 1,500',
            sales: true,
            orderNumber: '234535',
            orderDate: '02 February 2020',
            estimateDate: '09 February 2020',
            customerName: 'Jeff Bezos',
            phoneNumber: '777.727.7707',
            customerAddress: '5555 Dunbar street, Vancouver, BC V6T 1C8'
        },
        {
            itemId:'Item 3',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>234535</a>,
            itemCol1: '02/02/20',
            itemCol2: 'Credit',
            itemCol3: '$ 500',
            itemCol4: '$ 1,500',
            sales: true,
            orderNumber: '234535',
            orderDate: '02 February 2020',
            estimateDate: '09 February 2020',
            customerName: 'Jeff Bezos',
            phoneNumber: '777.727.7707',
            customerAddress: '5555 Dunbar street, Vancouver, BC V6T 1C8'
        },
    ];


    var hide = '';
    var show = 'hide';
    const [showOrder, setShowOrder] = useState(false);
    if(showOrder){
        hide = 'hide';
        show = '';
    }
    return(
        <div style = {{marginLeft: '39px', marginTop: '39px', overflowY: 'auto'}}>
            <Header 
                title={'Sales/Orders'} 
            />
            <Link to='/addOrder'>
                <Button 
                    type='shadowBlue'
                    wide={true}
                    text={'+ Add Orders'}
                />
            </Link>
            <Search
                showplaceholder={true}
                placeholder= 'Search orders with order#, customer information, SKU, etc.'
                wide={true}
                shadow={true}
            />
            <div className = {hide}>
                <Category
                    titles={titles}
                />
                <div className='stats_container' style = {{display: 'flex', flexDirection:'row'}}>
                {cat.map((o, i)=>{
                            return <CategoryStats {...o}/>
                    })}
                </div>
                <Category
                    titles={titlesSort}
                />
                <List
                    items = {orders}
                    i = {true}
                />
            </div>
            <div className = {show}>
                <OrderDetails 
                />
                <Category
                    titles={titlesSortItems}
                />
                <List
                    items = {orders[0].itemDetails}
                    i = {false}
                />
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20}}>
                    <Notes
                        content =''
                        placeholder = 'Delivery notes'
                        />
                    <PaymentInfo
                        discount = '$ 0'
                        subtotal = '$ 3,500'
                        gst = '$ 175'
                        pst= '$ 245'
                        shipping= '$ 100'
                        shippingGST= '$ 5'
                        total= '$ 7,525'
                        paid= '$ 7,525'
                    />
                    
                </div>
                
            </div>
            
        </div>
    )
}
export default SalesPage;