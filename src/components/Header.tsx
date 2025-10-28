import { Link, useNavigate } from "react-router-dom";
import { getSession, clearSession } from "../lib/auth";

export default function Header() {
  const nav = useNavigate();
  const session = getSession();
  function logout() {
    clearSession();
    nav("/");
  }
  return (
    <header className="bg-white shadow-sm">
      <div className="container-centered flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link to="/" aria-label="Home" className="font-bold text-xl">
            HNG TicketApp
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            {session ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/tickets">Tickets</Link>
                </li>
                <li>
                  <button className="btn" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/auth/login">Login</Link>
                </li>
                <li>
                  <Link to="/auth/signup">Get Started</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
