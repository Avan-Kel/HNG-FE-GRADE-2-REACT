import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../lib/auth'
import { useToasts } from '../../lib/toasts'


export default function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
const nav = useNavigate()
const { push } = useToasts()


function handleSubmit(e: React.FormEvent) {
e.preventDefault()
const errs: typeof errors = {}
if (!email) errs.email = 'Email is required'
if (!password) errs.password = 'Password is required'
setErrors(errs)
if (Object.keys(errs).length) return
try {
login({ email, password })
push({ message: 'Logged in', type: 'success' })
nav('/dashboard')
} catch (err: any) {
push({ message: err.message || 'Login failed', type: 'error' })
}
}


return (
<div className="max-w-md mx-auto mt-12">
<h2 className="text-2xl font-bold">Login</h2>
<form onSubmit={handleSubmit} className="mt-4 space-y-4">
<div>
<label className="block">Email</label>
<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border p-2 rounded" aria-invalid={!!errors.email} />
{errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
</div>
<div>
<label className="block">Password</label>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border p-2 rounded" aria-invalid={!!errors.password} />
{errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
</div>
<div>
<button className="px-4 py-2 rounded bg-blue-600 text-white">Login</button>
</div>
</form>
</div>
)
}