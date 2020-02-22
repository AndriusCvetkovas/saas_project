import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Search from '../../comps/Search';
import Category from '../../comps/Category';
import CategoryStats from '../../comps/CategoryStats';
import List from '../../comps/List';

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
            sort: false,
            
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
    var items = [
        {
            itemTitle:'Item 1',
            itemCol0: <a href='#'>234535</a>,
            itemCol1: '02/02/20',
            itemCol2: 'Credit',
            itemCol3: '$ 500',
            itemCol4: '$ 1,500',
            sales: true
        },
        {
            itemId:'Item 2',
            itemCol0: <a href='#'>234535</a>,
            itemCol1: '02/02/20',
            itemCol2: 'Credit',
            itemCol3: '$ 500',
            itemCol4: '$ 1,500',
            sales: true
        },
        {
            itemId:'Item 2',
            itemCol0: <a href='#'>234535</a>,
            itemCol1: '02/02/20',
            itemCol2: 'Credit',
            itemCol3: '$ 500',
            itemCol4: '$ 1,500',
            sales: true
        },
        {
            itemId:'Item 3',
            itemCol0: <a href='#'>234535</a>,
            itemCol1: '02/02/20',
            itemCol2: 'Credit',
            itemCol3: '$ 500',
            itemCol4: '$ 1,500',
            sales: true
        },
    ];
    return(
        <div style = {{marginLeft: '39px', marginTop: '39px', overflowY: 'auto'}}>
            <Header 
                title={'Sales/Orders'} 
            />
            <Button
                type='shadowBlue'
                wide={true}
                text={'+ Add Orders'}
            />
            <Search
                showplaceholder={true}
                placeholder= 'Search orders with order#, customer information, SKU, etc.'
                wide={true}
                shadow={true}
            /> 
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
                items = {items}
                i = {true}
            />
        </div>
    )
}
export default SalesPage;