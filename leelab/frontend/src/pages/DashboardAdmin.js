import { useEffect, useState } from "react";
import API from "../services/api";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function DashboardAdmin() {
  const [stats, setStats] = useState({
    people: 0,
    publications: 0,
    requests: 0,
    contacts: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const p = await API.get("/people");
      const pub = await API.get("/publications");
      const req = await API.get("/material-requests");
      const con = await API.get("/contact");

      setStats({
        people: p.data.length,
        publications: pub.data.length,
        requests: req.data.length,
        contacts: con.data.length,
      });

      createChart(req.data);
    }

    loadStats();
  }, []);

  const createChart = (requests) => {
    const ctx = document.getElementById("reqChart");

    const monthlyCounts = new Array(12).fill(0);
    requests.forEach((r) => {
      const month = new Date(r.createdAt).getMonth();
      monthlyCounts[month]++;
    });

    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan","Feb","Mar","Apr","May","Jun",
          "Jul","Aug","Sep","Oct","Nov","Dec"
        ],
        datasets: [
          {
            label: "Material Requests",
            data: monthlyCounts,
            borderColor: "#0d6efd",
            borderWidth: 3,
            tension: 0.4,
            fill: false,
          },
        ],
      },
    });
  };

  return (
    <>
      <h1 className="fw-bold mb-4">Admin Dashboard</h1>

      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h3>{stats.people}</h3>
            <p className="text-muted">People</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h3>{stats.publications}</h3>
            <p className="text-muted">Publications</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h3>{stats.requests}</h3>
            <p className="text-muted">Material Requests</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3 text-center">
            <h3>{stats.contacts}</h3>
            <p className="text-muted">Contact Messages</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Material Requests Over Time</h4>
        <canvas id="reqChart" height="100"></canvas>
      </div>
    </>
  );
}
