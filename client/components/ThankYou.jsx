import React from 'react';

function ThankYou(props) {
  return (
    <div className={props.modalStatus}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"><i className="fas fa-leaf" /> Thank You</h5>
          </div>
          <div className="modal-body">
            <p>This was a demonstration of an E-Commerce Full Stack Content Management Application. This application was built using HTML5, CSS3, React.js, Express.js, Node.js, PostgreSQL and Bootstrap 4. Thank you for trying out my demo!</p>
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
