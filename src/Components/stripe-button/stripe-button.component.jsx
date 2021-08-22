import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100 ;
    const publishableKey = 'pk_test_51JR9AdK93CgjXdxPrLUGmubJ23HQ5BQetiqBMHIJYons7V86uN7yMNvgWt4SL0qU7BgI5U3BpJUWO24SAlrkuZpd00WJixV6hi' ;
    
    const onToken = token =>{
        console.log(token);
        alert('Payment is Successful');
    }
    return  (
        <StripeCheckout 
        label = 'Pay Now'
        name = 'CROWN CLOTHING Ltd.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {` Your total is ${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
