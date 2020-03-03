import React from 'react';
import CartSummaryItem from './CartSummaryItem';

function CartSummary(props) {
  const cartItems = props.cartItems;
  // Create an empty object
  const currentCart = {};
  // Iterate through the cartItems array
  for (let i = 0; i < cartItems.length; i++) {
    const keyToCheck = cartItems[i].productId;
    if (keyToCheck in currentCart) {
      currentCart[keyToCheck] += 1;
    } else {
      currentCart[keyToCheck] = 1;
    }
    console.log(currentCart);
  }
  // If there isn't a key with a name of the array item.productId, create a new object property with the key of item.productId and a value of 1
  // If there is a key with the name of the array item.productId, increase the value by 1
  const cartItemElements = cartItems.map(item => {
    return <CartSummaryItem key={item.productId} image={item.image} productName={item.name} price={item.price} description={item.shortDescription} quantity="1"/>;
  });
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price;
  }
  if (cartItemElements.length === 0) {
    return (
      <div>
        <p className="text-muted" onClick={() => props.setView('catalog', {})}>{'< Back to catalog'}</p>
        <h4>There are no items in your cart</h4>
      </div>);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="text-muted" onClick={() => props.setView('catalog', {})}>{'< Back to catalog'}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>My Cart</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {cartItemElements}
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h4>Item Total $ {(totalPrice / 100).toFixed(2)}</h4>
        </div>
        <div><button className="btn btn-primary" onClick={() => props.setView('checkout', {})}>Checkout</button></div>
      </div>
    </div>);
}

export default CartSummary;
