import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { checkOut } from './test';
import { useParams } from 'react-router';
import useUserStore from '../stores/userStore';

const stripePromise = loadStripe("pk_test_51R1NHoFWX5EVFtiE0XvV80N3RkykDsTAw3rIGsk3VHdGRPh8H9CfVUPPxVCmdgzbKJUgnsapNS9vcG4FOy7JZBbH00iEmZbJRN");




function Checkout() {

const {id} = useParams()
const token = useUserStore(state=>state.token)


const fetchClientSecret = async()=>{

try {
  const res = await checkOut(token,id)
return res.data.clientSecret
  
} catch (error) {
  console.log(error);
  
}



}


  const options = {fetchClientSecret};

  
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export default Checkout