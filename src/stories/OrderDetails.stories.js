import React from 'react';
import '../App.scss';

import OrderDetails from '../comps/OrderDetails';

export default {
    title: "OrderDetails",
    component: OrderDetails
}
export const DefaultOrderDetails = () => {
    return <OrderDetails
    />
}
export const OrderDetaisWithDetails = () => {
    return <OrderDetails
    orderNumber = '2245333'
    orderDate = '27 January 2020'
    estimateDate = '2 February 2020'
    customerName = 'Angela Jang'
    phoneNumber = '778.798.3214'
    customerAddress = '5089 Dominion street, Burnaby, BC V5G 1C8'
    />
}