import { loadTickets } from "../lib/tickets";
import Card from "../components/Card";

export default function Dashboard() {
  const tickets = loadTickets();
  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const inProgress = tickets.filter((t) => t.status === "in_progress").length;
  const closed = tickets.filter((t) => t.status === "closed").length;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        <Card title="Total" value={total} />
        <Card title="Open" value={open} tone="green" />
        <Card title="In Progress" value={inProgress} tone="amber" />
        <Card title="Closed" value={closed} tone="gray" />
      </div>

      <div className="mt-6">
        <a className="px-3 py-2 rounded border" href="/tickets">
          Go to Ticket Management
        </a>
      </div>
    </div>
  );
}
