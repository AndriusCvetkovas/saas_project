import React from 'react';

function SalesPage(){
    return(
        <div style = {{marginLeft: '39px', marginTop: '39px', overflowY: 'auto'}}>
            <Header 
                title={'Sales/Orders'} 
            />
            <Button
                type='shadowBlue'
                wide={true}
                text={'+ Add Orders'}
            />
            <Search
                showplaceholder={true}
                placeholder= 'Search orders with order#, customer information, SKU, etc.'
                wide={true}
                shadow={true}
            /> 
        </div>
    )
}
export default SalesPage;