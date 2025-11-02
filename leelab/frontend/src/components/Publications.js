import React from "react";

export default function Publications() {
  const publications = [
    {
      title: "Epigenetic Regulation of Aging Genes",
      authors: "Lee S., Kim J., et al.",
      journal: "Nature Genetics, 2025",
      link: "#"
    },
    {
      title: "Chromatin Looping and Genome Stability",
      authors: "Lee S., Doe J., et al.",
      journal: "Science, 2024",
      link: "#"
    },
    {
      title: "Histone Modifications in Cellular Senescence",
      authors: "Kim J., Lee S., et al.",
      journal: "Cell Reports, 2023",
      link: "#"
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5">📚 Publications</h2>
      <ul className="list-group list-group-flush">
        {publications.map((pub, i) => (
          <li key={i} className="list-group-item">
            <h5 className="fw-bold">{pub.title}</h5>
            <p className="mb-1 text-muted">{pub.authors}</p>
            <p className="mb-1"><em>{pub.journal}</em></p>
            <a href={pub.link} target="_blank" rel="noreferrer" className="text-decoration-none text-primary">
              View Paper →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
