import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import CartSummary from './CartSummary';
import CheckoutForm from './CheckoutForm';
import InfoModal from './InfoModal';
import ItemAddedModal from './ItemAddedModal';
import WarningModal from './WarningModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'initial-load',
        params: {}
      },
      cart: [],
      modal: {
        modalView: 'modal-hidden',
        productPhoto: '',
        productName: '',
        productId: null
      }
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.showWarningModal = this.showWarningModal.bind(this);
    this.hideWarningModal = this.hideWarningModal.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  showWarningModal(id, image, name) {
    this.setState({ modal: { modalView: 'info-modal', productPhoto: image, productName: name, productId: id } });
  }

  hideWarningModal() {
    this.setState({ modal: { modalView: 'modal-hidden', productPhoto: '', productName: '', productId: null } });
  }

  setView(name, params) {
    const currentModalView = this.state.modal.modalView;
    if (currentModalView !== 'modal-hidden') {
      this.setState({ view: { name: name, params: params }, modal: { modalView: 'modal-hidden' } });
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
        if (this.state.view.name !== 'cart') {
          this.setState({ cart: currentCart, modal: { modalView: 'info-modal' } });
        } else {
          this.setState({ cart: currentCart });
        }
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

  removeFromCart(product, quantity) {
    const productId = product;
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/cart/${productId}-${quantity}`, config)
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.getCartItems();
        if (this.state.modal.modalView === 'info-modal') {
          this.setState({ modal: { modalView: 'modal-hidden', productId: null, productName: '', productPhoto: '' } });
        }
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
          <WarningModal modalStatus={this.state.modal.modalView} image={this.state.modal.productPhoto} productName={this.state.modal.productName} productId={this.state.modal.productId } hideModal={this.hideWarningModal} deleteItem={this.removeFromCart}/>
          <Header item={itemStatus} quantity={this.state.cart.length} cart={this.state.cart} setView={this.setView}/>
          <CartSummary cartItems={this.state.cart} setView={this.setView} removeItem={this.removeFromCart} addItem={this.addToCart} showWarningModal={this.showWarningModal} />
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
        <ItemAddedModal modalView={this.state.modal.modalView} setView={this.setView}/>
        <Header item={itemStatus} quantity={this.state.cart.length} setView={this.setView} cart={this.state.cart} />
        <ProductDetails setView={this.setView} viewParams={this.state.view.params} addToCart={this.addToCart}/>
      </React.Fragment>
    );
  }
}

export default App;
