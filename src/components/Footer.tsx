export default function Footer() {
  return (
    <footer className="bg-slate-50 mt-8">
      <div className="container-centered py-6 text-sm text-slate-600">
        © {new Date().getFullYear()} TicketApp — Built for Frontend Stage 2
        challenge. Accessibility-ready.
      </div>
    </footer>
  );
}
