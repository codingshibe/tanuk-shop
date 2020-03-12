import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      creditCard: '',
      month: '',
      year: '',
      cvv: '',
      address: '',
      city: '',
      state: '',
      zip: ''

    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleCreditCardInput = this.handleCreditCardInput.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleOrder = this.handleOrder.bind(this);

  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  handleCreditCardInput(e) {
    this.setState({ creditCard: e.target.value });
  }

  handleAddressInput(e) {
    this.setState({ address: e.target.value });
  }

  handleOrder(e) {
    e.preventDefault();
    const orderToBeSent = {};
    orderToBeSent.name = this.state.name;
    orderToBeSent.creditCard = this.state.creditCard;
    orderToBeSent.shippingAddress = this.state.address;
    this.props.placeOrder(orderToBeSent);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">First Name</div>
                  <div className="form-group col-md-6">Last Name</div>
                  <div className="form-group">Address</div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">City</div>
                  <div className="form-group col-md-4">State</div>
                  <div className="form-group col-md-2">Zip</div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">Credit Card</div>
                  <div className="form-group col-md-2">Month</div>
                  <div className="form-group col-md-2">Year</div>
                  <div className="form-group col-md-2">CVV</div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">Checkbox</div>
                  <button className="btn btn-success">Submit</button>
                </div>

              </form>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <br />
              <p className="text-muted" onClick={() => this.props.setView('catalog', {})}>{'< Continue Shopping'}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckoutForm;
