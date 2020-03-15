import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_Rla0UjJuDpACAUkzbJIZXbaG00fFSlyRNd');

function StripeForm({setClosed, paymentfor}){
  console.log(paymentfor)
  const stripe = useStripe();
  const elements = useElements();

  const Pay = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log("error", error)
    } else {
      console.log("payments", paymentMethod);
      sessionStorage.setItem("payment", paymentfor);
      console.log(sessionStorage.getItem('payment'));
      window.location.reload();
    //   var clientSecret = '{sk_test_duIGR4ELH33gZx5YXWgtFIYz00PZoQQNVV}'
    //   var data = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: paymentMethod
    //   });
    //   if (data.success) {
    //     alert('success')
    //   }
    }
  }
  return (
    <form onSubmit={Pay}>
        <p>Cardholder Name</p>
            <input type="text"></input>
            <p>Card Number/Expiration Date/ CVC</p>
                
    <div className='card_div'>
      <CardElement options={{
          style: {
            base: {
              fontFamily: '"Raleway", sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                fontSize: '16px'
              }
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a'
            },
          },
      }} />
        </div>
        <div>
            <p>Billing Address</p>
            <input type="text"></input>
        </div>
        <div className='save-button'>
            <button type='submit' class='pay_button'>Pay Now</button>
            <div style={{color:"#0096A9"}} onClick={()=>setClosed(true)}>Cancel</div>
        </div>
      
    </form>
  )
}

const PaymentStripe = ({setClosed, paymentfor}) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm setClosed={setClosed} paymentfor={paymentfor} />
    </Elements>
  )
}
export default PaymentStripe;