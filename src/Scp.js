import React from 'react';
import { Link } from 'react-router-dom';

function Scp({ subject, scpClass, description, containment, additional, images }) {
  const descriptionParagraphs = description.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className="container mt-4">
      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">{subject}</h2>
          <h4 className="card-subtitle mb-2 text-muted">{scpClass}</h4>
          <div className="card-text">
            <strong>Description:</strong> {descriptionParagraphs}
          </div>
          <div className="card-text">
            <strong>Containment:</strong> <p>{containment}</p>
          </div>
          <div className="card-text">
            <strong>Additional Notes:</strong> <p>{additional}</p>
          </div>
          <Link to="/" className="btn btn-primary">Return</Link>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {/* Include the provided code here */}
          <img
            src={images}
            alt={`A ${subject}`}
            className="centered-image img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Scp;
