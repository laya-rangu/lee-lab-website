import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageNews() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => load(), []);

  const load = async () => {
    const res = await API.get("/news");
    setNews(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();
    editId
      ? await API.put(`/news/${editId}`, form)
      : await API.post("/news", form);

    load();
    setForm({ title: "", content: "" });
    setEditId(null);
  };

  const del = async (id) => {
    if (!window.confirm("Delete news?")) return;
    await API.delete(`/news/${id}`);
    load();
  };

  const syncTwitter = async () => {
    await API.post("/news/sync-twitter");
    alert("Imported tweets!");
    load();
  };

  const edit = (n) => {
    setEditId(n._id);
    setForm(n);
  };

  return (
    <>
      <h1 className="fw-bold mb-4">Manage News</h1>

      <button className="btn btn-info mb-4" onClick={syncTwitter}>
        Sync from Twitter
      </button>

      <form className="card p-4 shadow mb-4" onSubmit={submit}>
        <h4>{editId ? "Edit News" : "Add News"}</h4>

        {["title", "content"].map((f) => (
          <div className="mb-3" key={f}>
            <label>{f.toUpperCase()}</label>
            <textarea className="form-control" value={form[f]}
              onChange={(e) => setForm({ ...form, [f]: e.target.value })}
            />
          </div>
        ))}

        <button className="btn btn-primary">{editId ? "Update" : "Add"}</button>
      </form>

      <table className="table table-bordered shadow-sm">
        <thead>
          <tr>
            <th>Title</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {news.map((n) => (
            <tr key={n._id}>
              <td>{n.title}</td>
              <td>{new Date(n.date).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => edit(n)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => del(n._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}
