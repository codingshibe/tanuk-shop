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
      zip: '',
      error: {
        name: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        creditCard: '',
        month: '',
        year: '',
        cvv: '',
        agree: ''
      }

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
                  <h2>Checkout Form</h2>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">First Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.name}/>
                    <small className="form-text">{this.state.error.name}</small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" value={this.state.lastName} />
                    <small className="form-text">{this.state.error.lastName}</small>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" value={this.state.address} />
                    <small className="form-text">{this.state.error.address}</small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" value={this.state.city} />
                    <small className="form-text">{this.state.error.city}</small>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="state">State</label>
                    <select className="form-control" id="state">
                      <option>CA</option>
                      <option>NV</option>
                    </select>
                    <small className="form-text">{this.state.error.state}</small>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" value={this.state.zip} />
                    <small className="form-text">{this.state.error.zip}</small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="creditCard">Credit Card</label>
                    <input type="text" className="form-control" maxLength="16" id="creditCard" placeholder="XXXX XXXX XXXX XXXX" value={this.state.creditCard} />
                    <small className="form-text">{this.state.error.creditCard}</small>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="month">Month</label>
                    <select className="form-control" id="month">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                    <small className="form-text">{this.state.error.month}</small>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="year">Year</label>
                    <select className="form-control" id="year">
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                    <small className="form-text">{this.state.error.year}</small>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" className="form-control" maxLength="3" id="cvv" value={this.state.cvv} />
                    <small className="form-text">{this.state.error.cvv}</small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="agree" />
                      <label htmlFor="agree"> I understand that this site is only for demonstration purposes and have not used real contact and/or credit card information. I do not hold the developer of this site responsible if real contact and/or credit card information was used </label>
                      <small className="form-text">{this.state.error.agree}</small>
                    </div>
                  </div>
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
