import React from 'react';
import { Link } from "react-router-dom";
import Button from '../../Button';
import Checkmark from '../../Checkmark';
import { findByLabelText } from '@testing-library/react';
function OrderCard({texture, clr, itemId, itemCol0, itemCol1, itemCol2, itemCol3, itemCol4, itemCol5, itemCol7, sales, apr}){
    var itemCol6 = <img className='status_icon' src={require('../../../imgs/btn-clock.png')} alt='icon' ></img>;
    var butType = '';
    var butFunc = '';
    if (apr == 1){
        butType = 'shadowBlue';
        butFunc = ()=>{alert('Order')};
        itemCol6 =<img className='status_icon' src={require('../../../imgs/icon-success.png')} alt ='icon' ></img>;
    }
    return(
        <div style ={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
            <div style={{flex: 0.5, marginTop: -40}}>
                <Checkmark />
            </div>
            <div className='itemContainer'>
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
            <div >
                {itemCol6}
            </div>
            <div>
                <Button 
                type={butType}
                text = {'Order'}
                onClick ={butFunc}
                />
            </div>
        </div>
        </div>
        
    )
}

export default OrderCard;