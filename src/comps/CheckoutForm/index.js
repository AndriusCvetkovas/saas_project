import React from 'react';
import {render} from 'react-dom';
import {StripeProvider} from 'react-stripe-elements';

//import MyStoreCheckout from './MyStoreCheckout';


function CheckOutForm({}){
    return (
        <StripeProvider apiKey="pk_test_l2fIV3ejm9dBSMAZw6qMJLXj00mfPuOeIk">
           {/* <MyStoreCheckout />*/} 
        </StripeProvider>
    )
}
CheckOutForm.defaultProps = {
    
}
export default CheckOutForm;