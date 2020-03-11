import React from 'react';

class CartSummaryItem extends React.Component {
  handleSubtract() {
    if (this.props.quantity > 1) {
      this.props.removeItem(this.props.productId, 'one');
    }
  }

  render() {
    return (
      <div className="row cartSummaryItem mx-5 my-2">
        <i className="fas fa-trash text-muted" onClick={() => this.props.removeItem(this.props.productId, 'all')} />

        <img className="col-12 col-sm-12 col-md-3" src={this.props.image} />
        <div className="col-12 col-sm-11 col-md-7">
          <h4>{this.props.productName}</h4>
          <p className="text-muted">$ {(this.props.price / 100).toFixed(2)}</p>
          <p>{this.props.description}</p>
          <div>Quantity: <span className="btn-group">
            <button className="btn quantity-toggle" onClick={() => this.props.addItem(this.props.product)}><i className="fas fa-plus" /></button>
            <button className="btn quantity-amount" disabled>{this.props.quantity}</button>
            <button className="btn quantity-toggle" onClick={() => this.handleSubtract()}><i className="fas fa-minus"/></button>
          </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
