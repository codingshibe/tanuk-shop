import React from 'react';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.handleSubtract = this.handleSubtract.bind(this);
  }

  componentDidMount() {
    const quantity = this.props.quantity;
    this.setState({ quantity: quantity });
  }

  handleSubtract() {
    let currentQuantity = this.state.quantity;
    if (currentQuantity > 1) {
      currentQuantity -= 1;
      this.setState({ quantity: currentQuantity });
      this.props.removeItem(this.props.productId);
    } else {
      return false;
    }

  }

  render() {
    return (
      <div className="row cartSummaryItem mx-5 my-2">
        <div className="col-12 col-sm-12 col-md-3">
          <img src={this.props.image} />
        </div>
        <div className="col-12 col-sm-11 col-md-7">
          <h4>{this.props.productName}</h4>
          <p className="text-muted">$ {(this.props.price / 100).toFixed(2)}</p>
          <p>{this.props.description}</p>
          <div>Quantity: <span>{this.state.quantity}</span> <button className="btn btn-sm btn-outline-success"><i className="fas fa-plus" /></button> <button className="btn btn-sm btn-outline-success" onClick={() => this.handleSubtract()}><i className="fas fa-minus"/></button></div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
