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
      currentCart[keyToCheck].quantity += 1;
    } else {
      currentCart[keyToCheck] = {};
      currentCart[keyToCheck].quantity = 1;
      currentCart[keyToCheck].product = cartItems[i];
    }
  }

  const cartItemElements = [];
  for (const key in currentCart) {
    cartItemElements.push(<CartSummaryItem key={key} image={currentCart[key].product.image} productName={currentCart[key].product.name} price={currentCart[key].product.price * currentCart[key].quantity} description={currentCart[key].product.shortDescription} quantity={currentCart[key].quantity} id={currentCart[key].product.productId} removeItem={props.removeItem} />);
  }
  let totalPrice = 0;

  for (const key in currentCart) {
    totalPrice += (currentCart[key].product.price * currentCart[key].quantity);
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
