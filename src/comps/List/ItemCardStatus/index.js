import React, {useState} from 'react';

function ItemCardStatus({itemCol0, itemCol1, invoiced, packed, fullfilled, paid, amount, total}){
    var iS = <img className='status' src={require('../../../imgs/btn-clock.png')} alt ={'success'} />;
    if (invoiced == true){
        iS = <img className='status' src={require('../../../imgs/icon-success.png')} alt ={'success'} />;
    };
    var pS = <img className='status' src={require('../../../imgs/btn-clock.png')} alt ={'success'} />;
    if (packed == true){
        pS = <img className='status' src={require('../../../imgs/icon-success.png')} alt ={'success'} />;
    };
    var fS = <img className='status' src={require('../../../imgs/btn-clock.png')} alt ={'success'} />;
    if (fullfilled == true){
        fS = <img className='status' src={require('../../../imgs/icon-success.png')} alt ={'success'} />;
    };
    var paidS = <img className='status' src={require('../../../imgs/btn-clock.png')} alt ={'success'} />;
    if (paid == true){
        paidS = <img className='status' src={require('../../../imgs/icon-success.png')} alt ={'success'} />;
    };
    var cn = 'itemContainer';
    const [s, setS] = useState(false)
    
    if(s){
        cn ='itemContainer selected'
    };
    return(
        <div className = {cn} onClick={()=>setS(!s)} >
            <div>
                {itemCol0}
            </div>
            <div>
                {itemCol1}
            </div>
            <div>
                {iS}
            </div>
            <div>
                {pS}
            </div>
            <div>
                {fS}
            </div>
            <div>
                {paidS}
            </div>
            <div>
                {amount}
            </div>
            <div>
                {total}
            </div>

        </div>
    )
}
export default ItemCardStatus;