import Hero from "../components/Hero";

export default function Landing() {
  return (
    <div>
      <Hero />
      <section className="container-centered mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">Responsive & Accessible Design</div>
        <div className="p-6 bg-white rounded-lg shadow">Inline Validation & Error Feedback</div>
        <div className="p-6 bg-white rounded-lg shadow">Manage Tickets Anywhere</div>
      </section>
    </div>
  );
}
