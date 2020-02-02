import React from 'react';
import ItemCard from './ItemCard';

function List({items, orders, i}){
    if(i){
        return(
            <div className='container'>
                {items.map((o, i)=>{
                        return <ItemCard {...o}/>
                })}
            </div>
        )
    } else {
        return(
            <div className='container'>
                {orders.map((o, i)=>{
                        return <ItemCard {...o}/>
                })}
            </div>
        )
    }
    
}

List.defaultProps = {
    items:[{
        itemTitle:'Item 1',
        itemImage: '',
        itemCol1: 'nn',
        itemCol2: 'nn',
        itemCol3: 'nn',
        itemCol4: 'nn',
        itemCol5: true,
    },
    {
        itemTitle:'Item 2',
        itemImage: '',
        itemCol1: 'nn',
        itemCol2: 'nn',
        itemCol3: 'nn',
        itemCol4: 'nn',
        itemCol5: false,
    },
    ]
};

export default List;
