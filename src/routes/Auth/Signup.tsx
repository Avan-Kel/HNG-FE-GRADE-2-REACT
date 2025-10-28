import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../lib/auth'
import { useToasts } from '../../lib/toasts'


export default function Signup() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirm, setConfirm] = useState('')
const [errors, setErrors] = useState<{ email?:string; password?:string; confirm?:string }>({})
const nav = useNavigate()
const { push } = useToasts()


function handleSubmit(e: React.FormEvent) {
e.preventDefault()
const errs: typeof errors = {}
if (!email) errs.email = 'Email required'
if (!password) errs.password = 'Password required (min 8)'
if (password !== confirm) errs.confirm = 'Passwords do not match'
setErrors(errs)
if (Object.keys(errs).length) return
try {
signup({ email, password })
push({ message: 'Account created', type: 'success' })
nav('/dashboard')
} catch (err: any) {
push({ message: err.message || 'Signup failed', type: 'error' })
}
}


return (
<div className="max-w-md mx-auto mt-12">
<h2 className="text-2xl font-bold">Create account</h2>
<form onSubmit={handleSubmit} className="mt-4 space-y-4">
<div>
<label>Email</label>
<input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border p-2 rounded" />
{errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
</div>
<div>
<label>Password</label>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border p-2 rounded" />
{errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
</div>
<div>
<label>Confirm Password</label>
<input type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} className="w-full border p-2 rounded" />
{errors.confirm && <div className="text-red-600 text-sm mt-1">{errors.confirm}</div>}
</div>
<div>
<button className="px-4 py-2 rounded bg-blue-600 text-white">Create</button>
</div>
</form>
</div>
)
}