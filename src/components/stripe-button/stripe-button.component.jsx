import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PUBLISHABLE_KEY =
    'pk_test_51KAr1xCqlKmAPQmXAUsWAf3hVPfFsU34gyUaxfVhOoTJ7xmFuUzZ1og427nF9LMC9WDdDOrny5l7EpRKgh50E2JZ00jASZXwA7';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Success!');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='FMZN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLable='Pay Now'
      token={onToken}
      currency='USD'
      stripeKey={PUBLISHABLE_KEY}
    />
  );
};
export default StripeCheckoutButton;
