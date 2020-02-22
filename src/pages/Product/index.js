import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Search from '../../comps/Search';
import Category from '../../comps/Category';
import CategoryStats from '../../comps/CategoryStats';
import List from '../../comps/List';

function ProductPage(){
    var titles = [{
        title: 'Category',
    }];
    var titlesSort = [
        {
            title: 'Product',
            sort: false,
            
        },
        {
            title: 'SKU',
            sort: true,
            onClick:()=>{alert('Sort')},
        },
        {
            title: 'Category',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Brand',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Series',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Variant',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Inventory',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
    ];
    var cat = [
        {
            itemTitle1: 'Sofa/Chair',
            itemTitle2: 'Sold:',
            value1: 23334.44,
            value2: 12355.32,
            month1: 'June',
            month2: 'July',
            dollar: true
        },
        {
            itemTitle1: 'Bed',
            itemTitle2: 'Sold:',
            value1: 15612.89,
            value2: 5000.5,
            month1: 'June',
            month2: 'July',
            dollar: true
        },
        {
            itemTitle1: 'Accessory',
            itemTitle2: 'Sold:',
            value1: 14578.3,
            value2: 5659.5,
            month1: 'June',
            month2: 'July',
            dollar: true
        },
        {
            itemTitle1: 'Table/Desk',
            itemTitle2: 'Sold:',
            value1: 13334.44,
            value2: 12355.32,
            month1: 'June',
            month2: 'July',
            dollar: true
        },
        {
            itemTitle1: 'Cabinet',
            itemTitle2: 'Sold:',
            value1: 14334.44,
            value2: 8985.32,
            month1: 'June',
            month2: 'July',
            dollar: true
        },
    ]
    var items = [
        {
            itemId:'Item 1',
            itemCol0: <img src={require('../../imgs/furnitures/chair-01.jpeg')} alt={'chair'}></img>,
            itemCol1: 'MTRS-M1',
            itemCol2: 'Sofa',
            itemCol3: 'Magniflex',
            itemCol4: '-',
            itemCol5: true,
            itemCol6: 4,
            sales: false
        },
        {
            itemId:'Item 2',
            itemCol0: <img src={require('../../imgs/furnitures/chair-02.jpeg')} alt={'chair'}></img>,
            itemCol1: 'MTRS-M2',
            itemCol2: 'Chair',
            itemCol3: 'Magniflex',
            itemCol4: 'Mono',
            itemCol5: false,
            itemCol6: 3,
            sales: false
        },
        {
            itemId:'Item 2',
            itemCol0: <img src={require('../../imgs/furnitures/desk-01.jpeg')} alt={'desk'}></img>,
            itemCol1: 'MTRS-M2',
            itemCol2: 'Chair',
            itemCol3: 'Magniflex',
            itemCol4: 'Mono',
            itemCol5: false,
            itemCol6: 1,
            sales: false
        },
        {
            itemId:'Item 2',
            itemCol0: <img src={require('../../imgs/furnitures/sofa-01.jpg')} alt={'sofa'}></img>,
            itemCol1: 'MTRS-M2',
            itemCol2: 'Chair',
            itemCol3: 'Magniflex',
            itemCol4: 'Mono',
            itemCol5: false,
            itemCol6: 3,
            sales: false
        },
    ];

    return(
        <div className = 'productP_wrapper' style = {{marginLeft: '39px', marginTop: '39px', overflowY: 'auto'}}>
            <Header 
                title={'Inventory/Overview'} 
            />
            <Button
                type='shadowBlue'
                wide={true}
                text={'+ Add Products'}
            />
            <Search
                showplaceholder={true}
                placeholder= 'Search your products'
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
export default ProductPage;