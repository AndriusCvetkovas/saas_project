import React, {useState} from 'react';
import {Line} from 'rc-progress';
import Button from '../../Button';
import { findByLabelText } from '@testing-library/react';
function ItemCard({itemId, itemCol0, itemCol1, itemCol2, itemCol3, itemCol4, itemCol5, itemCol6, sales}){
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
    };
    var butEl = <Button
        type='borderBlue'
        text = 'Order'
    />;
    var color = '#78ED72';
    if(itemCol6 <= 1){
        butEl = <Button
                type='shadowBlue'
                text = 'Order'
            />
        color = '#FF5F5F';
    };

    var status = itemCol6 * 20;

    if(sales){
        return(
        <div className = {cn} onClick={()=>setS(!s)}>
            <div>
                {itemCol0}
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
        </div>
        )
    }else {
    return(
        <div className = {cn} onClick={()=>setS(!s)}>
            <div>
                {itemCol0}
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
            <div style = {{display: 'flex', flexDirection: 'column'}}>
                <Line style = {{marginBottom: '20px',marginTop: '40px'}} percent={status} trailWidth="4" strokeWidth="4" strokeColor={color} />
                {itemCol6}/5
                {butEl}
            </div>
            <div>
                <img className='edit' src={require('../../../imgs/icon-edit.png')} alt='edit'/>
            </div>
        </div>
    )
}
};

ItemCard.defaultProps = {
    itemTitle: 'title',
    itemImage: "",
    itemSKU: 'nn',
    itemCategory: 'nn',
    itemBrand: 'nn',
    itemSeries: 'nn',
    itemVarant: 'nn',
};
export default ItemCard;