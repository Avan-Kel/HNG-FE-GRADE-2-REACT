import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './routes/Landing'
import Login from './routes/Auth/Login'
import Signup from './routes/Auth/Signup'
import Dashboard from './routes/Dashboard'
import TicketsPage from './routes/Tickets/Ticketspage'
import Layout from './components/Layout'
import { getSession } from './lib/auth'


import type { ReactElement } from 'react'

function Protected({ children }: { children: ReactElement }) {
  const session = getSession()
  if (!session) return <Navigate to="/auth/login" replace />
  return children
}



export default function App() {
return (
<Layout>
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/auth/login" element={<Login />} />
<Route path="/auth/signup" element={<Signup />} />
<Route
path="/dashboard"
element={<Protected><Dashboard /></Protected>}
/>
<Route
path="/tickets"
element={<Protected><TicketsPage /></Protected>}
/>
<Route path="*" element={<Navigate to="/" />} />
</Routes>
</Layout>
)
}