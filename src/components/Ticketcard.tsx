// src/components/TicketCard.tsx
import React from "react";

interface Ticket {
  id: number;
  title: string;
  description?: string;
  status: "open" | "in_progress" | "closed";
}

interface TicketCardProps {
  ticket: Ticket;
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: number) => void;
}

const statusColors: Record<Ticket["status"], string> = {
  open: "bg-green-100 text-green-700 border-green-400",
  in_progress: "bg-amber-100 text-amber-700 border-amber-400",
  closed: "bg-gray-200 text-gray-600 border-gray-400",
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket, onEdit, onDelete }) => {
  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-900 flex flex-col justify-between transition hover:shadow-md">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {ticket.title}
        </h3>
        {ticket.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {ticket.description}
          </p>
        )}
        <span
          className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full border ${statusColors[ticket.status]}`}
        >
          {ticket.status.replace("_", " ").toUpperCase()}
        </span>
      </div>

      <div className="flex justify-end space-x-3 mt-4">
        <button
          onClick={() => onEdit(ticket)}
          className="px-3 py-1 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(ticket.id)}
          className="px-3 py-1 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
