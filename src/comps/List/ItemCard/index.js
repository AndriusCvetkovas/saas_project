import React from 'react';

function ItemCard({itemTitle, itemImage, itemSKU, itemCategory, itemBrand, itemSeries, itemVarant}){
    return(
        <div className = 'itemContainer'>
            <div>
                <img src={itemImage} alt={itemTitle}></img>
            </div>
            <div>
                {itemSKU}
            </div>
            <div>
                {itemCategory}
            </div>
            <div>
                {itemBrand}
            </div>
            <div>
                {itemSeries}
            </div>
            <div>
                {itemVarant}
            </div>
        </div>
    )
};

ItemCard.defaultProps = {
    itemTitle: 'title',
    itemImage: '',
    itemSKU: 'nn',
    itemCategory: 'nn',
    itemBrand: 'nn',
    itemSeries: 'nn',
    itemVarant: 'nn',
};
export default ItemCard;