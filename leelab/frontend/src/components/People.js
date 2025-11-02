import React from "react";

export default function People() {
  const members = [
    { name: "Dr. Sarah Lee", role: "Principal Investigator", image: "https://placehold.co/300x300?text=Dr+Lee" },
    { name: "Dr. Jane Kim", role: "Postdoctoral Fellow", image: "https://placehold.co/300x300?text=Dr+Kim" },
    { name: "John Doe", role: "PhD Student", image: "https://placehold.co/300x300?text=John+Doe" },
  ];

  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-5">👩‍🔬 People</h2>
      <div className="row g-4 justify-content-center">
        {members.map((m, i) => (
          <div key={i} className="col-md-4 col-lg-3">
            <div className="card shadow-sm border-0 h-100">
              <img src={m.image} className="card-img-top rounded-top" alt={m.name} />
              <div className="card-body">
                <h5 className="fw-bold">{m.name}</h5>
                <p className="text-muted">{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
