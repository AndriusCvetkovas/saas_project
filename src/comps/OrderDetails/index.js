import React from 'react';

function OrderDetails({orderNumber, orderDate, estimateDate, customerName, customerAddress, phoneNumber}){
    return(
        <div className = 'order_details_container'>
            <div className ='order_details_inner_box'>
                <h1>Order No. {orderNumber}</h1>
                <h2>Order date: </h2>
                <p className='date'>{orderDate}</p>
                <h2>Estimated date: </h2>
                <p className='date'>{estimateDate}</p>
            </div>
            <div className ='order_details_inner_box'>
                <h1>To</h1>
                <h2 className='date'>{customerName}</h2>
                <p className='number'>{phoneNumber}</p>
                <p className='address'>{customerAddress}</p>
            </div>
        </div>
    )
}
OrderDetails.defaultProps ={
    orderNumber: 'default',
    orderDate: '99 Default 9999',
    estimateDate: '99 Default 9999',
    customerName: 'default name',
    phoneNumber: '777.777.7777',
    customerAddress: '5555 Default street, Burnaby, BC V5G 1C8'
};

export default OrderDetails;