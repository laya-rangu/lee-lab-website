import React from "react";

export default function Research() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5">🧬 Research</h2>
      <p className="lead text-center mb-4">
        Our research focuses on understanding the mechanisms of epigenetic regulation,
        chromosomal dynamics, and their impact on aging and disease.
      </p>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border-0">
            <img src="https://placehold.co/600x400?text=Epigenetics" className="card-img-top" alt="Epigenetics" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Epigenetic Modifications</h5>
              <p className="card-text">We explore how DNA methylation and histone changes regulate gene expression and aging processes.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border-0">
            <img src="https://placehold.co/600x400?text=Chromosomes" className="card-img-top" alt="Chromosomes" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Chromosomal Architecture</h5>
              <p className="card-text">We study 3D chromosomal organization and its influence on genome stability and transcription.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 border-0">
            <img src="https://placehold.co/600x400?text=Aging" className="card-img-top" alt="Aging" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Aging & Disease</h5>
              <p className="card-text">Our team investigates how epigenetic drift contributes to age-related diseases such as cancer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
