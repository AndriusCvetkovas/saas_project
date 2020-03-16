import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Button from '../../Button';
import Checkmark from '../../Checkmark';
function OrderCard({hide, texture, cc, itemId, itemCol0, itemCol1, itemCol2, itemCol3, itemCol4, itemCol5, itemCol7, sales, apr, setIsOpen3}){
    var itemCol6 = <img className='status_icon' src={require('../../../imgs/btn-clock.png')} alt='icon' ></img>;
    var butType = '';
    var butFunc = '';
    if (apr == 1){
        butType = 'shadowBlue';
        butFunc = setIsOpen3;
        itemCol6 =<img className='status_icon' src={require('../../../imgs/icon-success.png')} alt ='icon' ></img>;
    }
    var checkmarkCont = ''
    if(hide){
        checkmarkCont = 'hide'
    }

    const [s, setS] = useState(false)
    var cn = 'itemContainer';
    var vn = 'varants hide';
    var clr = 'black'
    if(s){
        cn ='itemContainer selected';
        vn ='varants';
    };
    return(
        <div style ={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
            <div className={checkmarkCont} style={{flex: 0.5,minWidth: 50, marginTop: -40, marginRight: -12}}>
                <Checkmark stat={cc}/>
            </div>
            <div className={cn} onClick={()=>setS(!s)}>
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
            {/* <div className={vn}>
                <span>Color:  </span>
                <span>{clr}  </span>
                <span>Texture:  </span>
                <span>  </span>
                <span>Sku:  </span>
                <span>{itemCol1} </span>
                <div>
                    <span>Stock: </span>
                    <span>1/3</span>
                </div>
            
            </div> */}
        </div>
        
    )
}

export default OrderCard;