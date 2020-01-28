import React from 'react';

function ItemCard({itemTitle, itemImage}){
    return(
        <div className = 'itemContainer'>
            {itemTitle}
            {itemImage}
        </div>
    )
};

ItemCard.defaultProps = {
    
};
export default ItemCard;