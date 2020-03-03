import React from 'react';

class InfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: 'info-modal'
    };
  }

  hideModal() {
    this.setState({ modalStatus: 'modal-hidden' });
  }

  render() {
    return (
      <div className={this.state.modalStatus}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><i className="fas fa-leaf"/> Welcome to Tanuk Shop</h5>
            </div>
            <div className="modal-body">
              <p>This shop is for demonstration purposes only. By clicking &ldquo;I accept&rdquo;, the user agrees to the terms and will not provide actual personal information in the payment section and/or will not be actually purchasing items from this shop</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => this.hideModal()}>I accept</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoModal;
