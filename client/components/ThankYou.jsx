import React from 'react';

function ThankYou(props) {
  return (
    <div className={props.thankYouView}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"><i className="fas fa-leaf" /> Thank You</h5>
          </div>
          <div className="modal-body">
            <p>Thank you for checking out my e-commerce content management demonstration</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-success" onClick={() => props.closeModal() }>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
