import React, {useState} from 'react';
import {Line} from 'rc-progress';
import Button from '../../Button';
import { findByLabelText } from '@testing-library/react';
import { Link } from "react-router-dom";
function ItemCard({texture, clr, itemId, itemCol0, itemCol1, itemCol2, itemCol3, itemCol4, itemCol5, itemCol6, itemCol7, sales}){
    var varant = '';
    var cn = 'itemContainer';
    var vn = 'varants hidden';
    if(itemCol5 == true){
        varant = 'Yes';
    }else if(itemCol5 == false) {
        varant = 'No';
    }else {
        varant = itemCol5;
    };

    const [s, setS] = useState(false)
    
    if(s){
        cn ='itemContainer selected';
        vn ='varants';
        if(itemCol5 == false){
            vn ='hidden'
        }
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
    var marginCol0 = 0;
    if(sales){
        marginCol0 = 10;
        return(
        <div className = {cn} onClick={()=>setS(!s)} >
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
                {itemCol5}
            </div>
            <div>
                {itemCol6}
            </div>
            <div>
                {itemCol7}
            </div>
        </div>
        )
    }else {
    return(
        <div>
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
                <Link to='/addeditProduct'><img className='edit' src={require('../../../imgs/icon-edit.png')} alt='edit'/></Link>
            </div>
        </div>
        <div className={vn}>
            <span>Color:  </span>
            <span>{clr}  </span>
            <span>Texture:  </span>
            <span>{texture}  </span>
            <span>Sku:  </span>
            <span>{itemCol1} </span>
            <div>
                <span>Stock: </span>
                <span>1/3</span>
            </div>
            
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