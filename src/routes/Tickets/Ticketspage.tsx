import React, { useEffect, useState } from "react";
import type { Ticket, TicketStatus } from "../../types";
import {
  loadTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from "../../lib/tickets";
import { useToasts } from "../../lib/toasts";

function statusColor(s: TicketStatus) {
  return s === "open"
    ? "bg-green-100 text-green-800"
    : s === "in_progress"
    ? "bg-amber-100 text-amber-800"
    : "bg-slate-100 text-slate-800";
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<TicketStatus>("open");
  const [desc, setDesc] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const { push } = useToasts();

  useEffect(() => setTickets(loadTickets()), []);

  function refresh() {
    setTickets(loadTickets());
  }

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (!title) throw new Error("Title is required");
      if (!["open", "in_progress", "closed"].includes(status))
        throw new Error("Invalid status");
      createTicket({ title, description: desc, status, priority: undefined });
      push({ message: "Ticket created", type: "success" });
      setTitle("");
      setDesc("");
      setStatus("open");
      refresh();
    } catch (err: any) {
      push({ message: err.message || "Failed to create", type: "error" });
    }
  }

  function handleEdit(t: Ticket) {
    setEditingId(t.id);
    setTitle(t.title);
    setDesc(t.description || "");
    setStatus(t.status);
  }

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (!editingId) return;
      if (!title) throw new Error("Title required");
      updateTicket(editingId, { title, description: desc, status });
      push({ message: "Ticket updated", type: "success" });
      setEditingId(null);
      setTitle("");
      setDesc("");
      setStatus("open");
      refresh();
    } catch (err: any) {
      push({ message: err.message || "Failed to update", type: "error" });
    }
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this ticket?")) return;
    try {
      deleteTicket(id);
      push({ message: "Ticket deleted", type: "success" });
      refresh();
    } catch (err: any) {
      push({ message: err.message || "Failed to delete", type: "error" });
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Tickets</h2>

      <form
        onSubmit={editingId ? handleUpdate : handleCreate}
        className="mt-4 grid md:grid-cols-3 gap-4"
      >
        <div>
          <label className="block">Title *</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Status *</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as TicketStatus)}
            className="w-full border p-2 rounded"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {editingId ? "Update" : "Create"}
          </button>
        </div>
        <div className="md:col-span-3">
          <label>Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      </form>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {tickets.length === 0 && (
          <div className="text-slate-500">No tickets yet</div>
        )}
        {tickets.map((t) => (
          <div key={t.id} className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{t.title}</h3>
                <div className="text-sm text-slate-500">
                  {new Date(t.createdAt).toLocaleString()}
                </div>
              </div>
              <div
                className={`px-2 py-1 rounded text-xs ${statusColor(t.status)}`}
              >
                {t.status.replace("_", " ")}
              </div>
            </div>
            <p className="mt-2 text-slate-700">{t.description}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(t)}
                className="px-2 py-1 border rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(t.id)}
                className="px-2 py-1 border rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
