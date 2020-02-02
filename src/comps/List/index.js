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
        itemTitle:'Item 1',
        itemImage: '',
        itemSKU: 'MTRS-M1',
        itemCategory: 'Sofa',
        itemBrand: 'Magniflex',
        itemSeries: '-',
        itemVarant: true
    },
    {
        itemTitle:'Item 2',
        itemImage: '',
        itemSKU: 'MTRS-M2',
        itemCategory: 'Chair',
        itemBrand: 'Magniflex',
        itemSeries: 'Mono',
        itemVarant: false
    },
    ]
};

export default List;
