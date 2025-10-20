import React from "react";

export default function Teaching() {
  const courses = [
    {
      name: "Molecular Biology (BIO 201)",
      term: "Fall 2025",
      desc: "An introduction to DNA, RNA, and protein synthesis with lab exercises focusing on gene expression analysis."
    },
    {
      name: "Epigenetics and Aging (BIO 450)",
      term: "Spring 2025",
      desc: "Exploring how chromatin structure and epigenetic marks regulate cellular aging and disease processes."
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5">🎓 Teaching</h2>
      {courses.map((c, i) => (
        <div key={i} className="mb-4">
          <h5 className="fw-bold">{c.name}</h5>
          <p className="text-muted mb-1">{c.term}</p>
          <p>{c.desc}</p>
        </div>
      ))}
    </div>
  );
}
