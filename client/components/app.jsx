import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import CartSummary from './CartSummary';
import CheckoutForm from './CheckoutForm';
import InfoModal from './InfoModal';
import ItemAddedModal from './ItemAddedModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'initial-load',
        params: {}
      },
      cart: [],
      modalView: 'modal-hidden'
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    const currentModalView = this.state.modalView;
    if (currentModalView !== 'modal-hidden') {
      this.setState({ view: { name: name, params: params }, modalView: 'modal-hidden' });
    } else {
      this.setState({ view: { name: name, params: params } });
    }
  }

  addToCart(product) {
    const productToAdd = JSON.stringify(product);
    const config = {
      method: 'POST',
      body: productToAdd,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/cart', config)
      .then(result => {
        return result.json();
      })
      .then(returnedProduct => {
        const currentCart = [...this.state.cart];
        currentCart.push(returnedProduct);
        this.setState({ cart: currentCart, modalView: 'info-modal' });
      })
      .catch(err => `There was an error: ${err}`);
  }

  getCartItems() {
    fetch('/api/cart')
      .then(data => data.json())
      .then(data => {
        this.setState({ cart: data });
      })
      .catch(err => `There was an error: ${err}`);
  }

  placeOrder(order) {
    const config = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/orders', config)
      .then(data => data.json())
      .then(data => {
        this.setState({ cart: [] });
        this.setView('catalog', {});
      })
      .catch(err => `There was an error: ${err}`);
  }

  removeFromCart(product) {
    const productId = product;
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/cart/${productId}`, config)
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.getCartItems();
      })
      .catch(err => `There was an error: ${err}`);
  }

  render() {
    let itemStatus = 'Items';
    if (this.state.cart.length === 1) {
      itemStatus = 'Item';
    }
    const currentView = this.state.view.name;
    if (currentView === 'catalog') {
      return (
        <React.Fragment>
          <Header item={itemStatus} quantity={this.state.cart.length} cart={this.state.cart} setView={this.setView}/>
          <ProductList setView={this.setView} />
        </React.Fragment>
      );
    } else if (currentView === 'initial-load') {
      return (
        <React.Fragment>
          <InfoModal setView={this.setView} />
          <Header item={itemStatus} quantity={this.state.cart.length} cart={this.state.cart} setView={this.setView} />
          <ProductList setView={this.setView} />
        </React.Fragment>
      );
    } else if (currentView === 'cart') {
      return (
        <React.Fragment>
          <Header item={itemStatus} quantity={this.state.cart.length} cart={this.state.cart} setView={this.setView}/>
          <CartSummary cartItems={this.state.cart} setView={this.setView} removeItem={this.removeFromCart} addItem={this.addToCart}/>
        </React.Fragment>
      );
    } else if (currentView === 'checkout') {
      return (
        <React.Fragment>
          <Header item={itemStatus} quantity={this.state.cart.length} cart={this.state.cart} setView={this.setView} />
          <CheckoutForm placeOrder={this.placeOrder} setView={this.setView}/>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <ItemAddedModal modalView={this.state.modalView} setView={this.setView}/>
        <Header item={itemStatus} quantity={this.state.cart.length} setView={this.setView} cart={this.state.cart} />
        <ProductDetails setView={this.setView} viewParams={this.state.view.params} addToCart={this.addToCart}/>
      </React.Fragment>
    );
  }
}

export default App;
