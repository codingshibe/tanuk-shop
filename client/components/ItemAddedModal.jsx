import React from 'react';

class ItemAddedModal extends React.Component {
  render() {
    return (
      <div className="info-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Item Added</h5>
            </div>
            <div className="modal-footer">
              <button className="btn">Continue Shopping</button>
              <button className="btn">View Cart</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ItemAddedModal;
