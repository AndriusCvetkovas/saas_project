import React from 'react';
import '../App.scss';

import PaymentInfo from '../comps/PaymentInfo';

export default {
    title: "PaymentInfo",
    component: PaymentInfo
}
export const DefaultPaymentInfo = () => {
    return <PaymentInfo
    />
}
export const PaymentInfoWithAmounts = () => {
    return <PaymentInfo
        discount = '$ 0'
        subtotal = '$ 3,500'
        gst = '$ 175'
        pst= '$ 245'
        shipping= '$ 100'
        shippingGST= '$ 5'
        total= '$ 7,525'
        paid= '$ 7,525'
    />
}