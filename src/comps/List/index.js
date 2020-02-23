import React from 'react';
import ItemCard from './ItemCard';
import ItemCardStatus from './ItemCardStatus';

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
                {items.map((o, i)=>{
                        return <ItemCardStatus {...o}/>
                })}
            </div>
        )
    }
    
}

List.defaultProps = {
    items:[{
        itemTitle:'Item 1',
        itemImage: "require('../../../imgs/furnitures/chair-01.jpeg')",
        itemCol1: 'nn',
        itemCol2: 'nn',
        itemCol3: 'nn',
        itemCol4: 'nn',
        itemCol5: true,
    }
    ]
};

export default List;
