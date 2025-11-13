import { useEffect, useState } from "react";
import API from "../services/api";

export default function ViewForms() {
  const [contact, setContact] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const con = await API.get("/contact");
    const req = await API.get("/material-requests");

    setContact(con.data);
    setRequests(req.data);
  };

  return (
    <>
      <h1 className="fw-bold mb-4">Form Submissions</h1>

      <h3 className="mt-4 mb-2">Contact Messages</h3>
      <table className="table table-bordered shadow-sm mb-5">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Message</th></tr>
        </thead>
        <tbody>
          {contact.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.message}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-4 mb-2">Material Requests</h3>
      <table className="table table-bordered shadow-sm">
        <thead>
          <tr><th>Item</th><th>Qty</th><th>Purpose</th><th>Requester</th></tr>
        </thead>
        <tbody>
          {requests.map((r) => (
            <tr key={r._id}>
              <td>{r.itemName}</td>
              <td>{r.quantity}</td>
              <td>{r.purpose}</td>
              <td>{r.requesterName} ({r.requesterEmail})</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
