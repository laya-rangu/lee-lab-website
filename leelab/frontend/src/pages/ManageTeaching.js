import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageTeaching() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ course: "", semester: "", description: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => load(), []);

  const load = async () => {
    const res = await API.get("/teaching");
    setItems(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();
    editId
      ? await API.put(`/teaching/${editId}`, form)
      : await API.post("/teaching", form);

    load();
    setForm({ course: "", semester: "", description: "" });
    setEditId(null);
  };

  const del = async (id) => {
    if (!window.confirm("Delete entry?")) return;
    await API.delete(`/teaching/${id}`);
    load();
  };

  const edit = (t) => {
    setEditId(t._id);
    setForm(t);
  };

  return (
    <>
      <h1 className="fw-bold mb-4">Manage Teaching</h1>

      <form className="card p-4 shadow mb-4" onSubmit={submit}>
        <h4>{editId ? "Edit Entry" : "Add Entry"}</h4>

        {["course", "semester", "description"].map((f) => (
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
            <th>Course</th><th>Semester</th><th>Description</th><th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((t) => (
            <tr key={t._id}>
              <td>{t.course}</td>
              <td>{t.semester}</td>
              <td>{t.description}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => edit(t)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => del(t._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
