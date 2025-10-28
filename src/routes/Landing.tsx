import Hero from "../components/Hero";

export default function Landing() {
  return (
    <div>
      <Hero />
      <section className="container-centered mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">Feature 1</div>
        <div className="p-6 bg-white rounded-lg shadow">Feature 2</div>
        <div className="p-6 bg-white rounded-lg shadow">Feature 3</div>
      </section>
    </div>
  );
}
