import React, {useState} from 'react';

function ItemCard({itemTitle, itemImage, itemCol1, itemCol2, itemCol3, itemCol4, itemCol5, cn}){
    var varant = '';
    var cn = 'itemContainer';
    if(itemCol5){
        varant = 'Yes';
    }else {
        varant = 'No';
    };

    const [s, setS] = useState(false)
    
    if(s){
        cn ='itemContainer selected'
    }
    return(
        <div className = {cn} onClick={()=>setS(!s)}>
            <div>
                <img src={itemImage} alt={itemTitle}></img>
            </div>
            <div>
                {itemCol1}
            </div>
            <div>
                {itemCol2}
            </div>
            <div>
                {itemCol3}
            </div>
            <div>
                {itemCol4}
            </div>
            <div>
                {varant}
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