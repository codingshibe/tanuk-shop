import React from 'react';

class ItemAddedModal extends React.Component {
  render() {
    return (
      <div className={this.props.modalView}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Item Added</h5>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success" onClick={() => this.props.setView('catalog', {})}>Continue Shopping</button>
              <button className="btn btn-info" onClick={() => this.props.setView('cart', {})}>View Cart</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ItemAddedModal;
