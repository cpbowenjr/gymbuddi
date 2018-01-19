import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import stripe from 'stripe';
import axios from 'axios';

// const {STRIPE_PUBLISH_KEY, STRIPE_SECRET_KEY} = process.env;


export default class Payments extends Component {
    onToken = (token) => {
      token.card = void 0;
      console.log('token', token);
      axios.post('http://localhost:3535/api/payment', { token, amount: 100 } ).then(response => {
        alert('GIMMIE DAT MONAY')
      });
    }
  
    render() {
      var stripe ='pk_live_EmmA9Ig5J7I04dTpijhLIgvD'    
      return (
        <div className="stripe-frisbee">
          <StripeCheckout
            token={this.onToken}
            STRIPE_PUBLISH_KEY={stripe.pub_key}
            amount={1000}
          />
        </div>
      );
    }
  }