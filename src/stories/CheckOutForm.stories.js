import React from 'react';
import '../App.scss';

import CheckOutForm from '../comps/CheckoutForm';

export default {
    title: "CheckOutForm",
    component: CheckOutForm
};
export const DefaultCheckOut = () => {
    return <CheckOutForm
    />
}
