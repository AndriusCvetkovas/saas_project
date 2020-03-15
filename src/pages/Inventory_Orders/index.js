import React, {useState, useEffect} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Search from '../../comps/Search';
import Category from '../../comps/Category';
import List from '../../comps/List';
import Checkmark from '../../comps/Checkmark';
function InventoryOrders(){
    
    var titlesSort = [
        {
            title: 'Order No.',
            sort: true,
            onClick:()=>{alert('Sort')},
        },
        {
            title: 'Order Date',
            sort: true,
            onClick:()=>{alert('Sort')},
        },
        {
            title: 'Amount',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Total Quantity',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Total Price',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Manufacturer',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Approval',
            sort: false
        },
    ];
    var orders = [
        {
            itemTitle:'Item 1',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>241240</a>,
            itemCol1: '02/02/20',
            itemCol2: '$ 9,000',
            itemCol3: '4',
            itemCol4: '$ 36,000',
            itemCol5: 'Magniflex',
            sales: true,
            apr: 1,
        },
        {
            itemId:'Item 2',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>241241</a>,
            itemCol1: '02/02/20',
            itemCol2: '$ 12,000',
            itemCol3: '10',
            itemCol4: '$ 120,000',
            itemCol5: 'Magniflex',
            sales: true,
            apr: 1,
        },
        {
            itemId:'Item 2',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>241242</a>,
            itemCol1: '02/02/20',
            itemCol2: '$ 10,000',
            itemCol3: '4',
            itemCol4: '$ 40,000',
            itemCol5: 'Magniflex',
            sales: true,
            apr: 1,
        },
        {
            itemId:'Item 3',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>241243</a>,
            itemCol1: '02/02/20',
            itemCol2: '$ 15,000',
            itemCol3: '3',
            itemCol4: '$ 45,000',
            itemCol5: 'Magniflex',
            sales: true,
            apr: 0,
        },
    ];
    var hide = '';
    var show = 'hide';
    const [showOrder, setShowOrder] = useState(false);
    if(showOrder){
        hide = 'hide';
        show = '';
    }
    const [cc, setCc] = useState(false)
    return(
        <div style = {{marginLeft: '39px', marginTop: '39px', overflowY: 'auto'}}>
            <Header 
                title={'Inventory/Pending Orders'} 
            />
            <Button 
                type='shadowBlue'
                wide={true}
                text='Send All Requests'
            />
            <Search
                shadow={true}
                showplaceholder={true}
                placeholder= 'Search for inventory orders'
                wide={true}
            />
            <div style ={{display: 'flex', flexDirection: 'row', alignItems:'center', marginTop: 30}}>
                <div style={{display: 'relative', maxWidth: 35, flex: 0.5}} onClick={()=>setCc(!cc)}><Checkmark /></div>
                    <Category
                titles={titlesSort}
            />
            </div>
            <List
                    items = {orders}
                    ord = {true}
                    cc = {cc}
            />
        </div>
    )
}
export default InventoryOrders;