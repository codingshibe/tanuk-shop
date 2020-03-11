import React from 'react';

function WarningModal(props) {
  return (
    <div className={props.modalStatus}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <img className="col-12" src={props.image} />
            <p>Are you sure you want to remove {props.productName}?</p>
          </div>
          <div className="modal-footer">
            <div className="col-12">
              <button className="btn btn-secondary">Cancel</button> <button className="btn btn-danger"> Remove Item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarningModal;
