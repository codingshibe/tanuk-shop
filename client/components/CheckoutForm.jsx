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
      agree: false,
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
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
    this.handleCreditCardInput = this.handleCreditCardInput.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleStateInput = this.handleStateInput.bind(this);
    this.handleZipInput = this.handleZipInput.bind(this);
    this.handleMonthInput = this.handleMonthInput.bind(this);
    this.handleYearInput = this.handleYearInput.bind(this);
    this.handleCVVInput = this.handleCVVInput.bind(this);
    this.handleAgreeInput = this.handleAgreeInput.bind(this);
    this.handleOrder = this.handleOrder.bind(this);

  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  handleLastNameInput(e) {
    this.setState({ lastName: e.target.value });
  }

  handleCreditCardInput(e) {
    this.setState({ creditCard: e.target.value });
  }

  handleAddressInput(e) {
    this.setState({ address: e.target.value });
  }

  handleCityInput(e) {
    this.setState({ city: e.target.value });
  }

  handleStateInput(e) {
    this.setState({ state: e.target.value });
  }

  handleZipInput(e) {
    this.setState({ zip: e.target.value });
  }

  handleMonthInput(e) {
    this.setState({ month: e.target.value });
  }

  handleYearInput(e) {
    this.setState({ year: e.target.value });
  }

  handleCVVInput(e) {
    this.setState({ cvv: e.target.value });
  }

  handleAgreeInput(e) {
    this.setState({ agree: e.target.value });
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
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.state.handleNameInput} />
                    <small className="form-text">{this.state.error.name}</small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleLastNameInput} />
                    <small className="form-text">{this.state.error.lastName}</small>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" value={this.state.address} onChange={this.handleAddressInput} />
                    <small className="form-text">{this.state.error.address}</small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" value={this.state.city} onChange={this.handleCityInput} />
                    <small className="form-text">{this.state.error.city}</small>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="state">State</label>
                    <select className="form-control" value={this.state.state} id="state" onChange={this.handleStateInput}>
                      <option>CA</option>
                      <option>NV</option>
                    </select>
                    <small className="form-text">{this.state.error.state}</small>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" value={this.state.zip} onChange={this.handleZipInput} />
                    <small className="form-text">{this.state.error.zip}</small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="creditCard">Credit Card</label>
                    <input type="text" className="form-control" maxLength="16" id="creditCard" placeholder="XXXX XXXX XXXX XXXX" value={this.state.creditCard} onChange={this.handleCreditCardInput} />
                    <small className="form-text">{this.state.error.creditCard}</small>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="month">Month</label>
                    <select className="form-control" value={this.state.month} id="month" onChange={this.handleMonthInput}>
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
                    <select className="form-control" id="year" value={this.state.year} onChange={this.handleYearInput}>
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
                    <input type="text" className="form-control" maxLength="3" id="cvv" value={this.state.cvv} onChange={this.handleCVVInput}/>
                    <small className="form-text">{this.state.error.cvv}</small>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="agree" value={this.state.agree} onChange={this.handleAgreeInput}/>
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
