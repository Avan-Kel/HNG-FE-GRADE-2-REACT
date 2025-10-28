import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-lg mt-6">
      <div className="container-centered py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">
            HNG TicketApp — Multi framework project
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Create, track and resolve tickets across projects. Fast,
              accessible, and consistent across frameworks.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/auth/login"
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Login
              </Link>
              <Link to="/auth/signup" className="px-4 py-2 rounded border">
                Get Started
              </Link>
            </div>
          </div>
          <div aria-hidden className="relative">
            {/* Decorative circle */}
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-blue-100 opacity-60" />
            {/* card boxes */}
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-white rounded-lg shadow">
                Fast ticket creation
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                Real-time validation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG bottom */}
      <svg
        viewBox="0 0 1440 120"
        className="w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,48 C360,0 1080,96 1440,48 L1440 120 L0 120 Z"
          fill="#f1f5f9"
        />
      </svg>
    </section>
  );
}
