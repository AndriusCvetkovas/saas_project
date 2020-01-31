import React from 'react';
import ItemCard from './ItemCard';

function List({items}){
    return(
        <div className='container'>
            {items.map((o, i)=>{
                    return <ItemCard {...o}/>
            })}
        </div>
    )
}

List.defaultProps = {
    items:[{
        itemTitle:'Item 1'
    },
    {
        itemTitle:'Item 2'
    },
    ]
};

export default List;
