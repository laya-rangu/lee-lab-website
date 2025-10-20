import React from "react";

export default function News() {
  // Example news items (replace these with your real data or API)
  const newsItems = [
    {
      id: 1,
      title: "New Paper Published in Nature Genetics",
      date: "October 10, 2025",
      description:
        "Our latest study explores the role of epigenetic changes in cellular aging. Congratulations to the team!",
      image: "https://placehold.co/600x400?text=Nature+Paper",
    },
    {
      id: 2,
      title: "Welcome New Postdoc: Dr. Jane Kim",
      date: "September 25, 2025",
      description:
        "We are thrilled to welcome Dr. Kim to the Lee Lab! Her expertise in chromosomal architecture will strengthen our research.",
      image: "https://placehold.co/600x400?text=Welcome+Dr+Kim",
    },
    {
      id: 3,
      title: "Lee Lab Receives NIH Grant",
      date: "August 15, 2025",
      description:
        "The NIH has awarded a 3-year grant to fund our research on DNA methylation and aging. Exciting times ahead!",
      image: "https://placehold.co/600x400?text=NIH+Grant",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">🧬 Lab News & Updates</h2>
      <div className="row g-4">
        {newsItems.map((news) => (
          <div key={news.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <img
                src={news.image}
                className="card-img-top"
                alt={news.title}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{news.title}</h5>
                <small className="text-muted mb-2">{news.date}</small>
                <p className="card-text flex-grow-1">{news.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
