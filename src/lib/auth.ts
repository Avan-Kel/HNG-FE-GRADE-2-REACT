const SESSION_KEY = 'ticketapp_session'


export function setSession(token: string) {
localStorage.setItem(SESSION_KEY, token)
}


export function getSession(): string | null {
return localStorage.getItem(SESSION_KEY)
}


export function clearSession() {
localStorage.removeItem(SESSION_KEY)
}


// Simple fake signup/login validation
export function login({ email, password }: { email: string; password: string }) {
// demo validation
if (!email || !password) throw new Error('Email and password required')
// accept any password >= 8 chars for demo
if (password.length < 8) throw new Error('Invalid credentials')
const token = JSON.stringify({ email, token: 'mock-token', createdAt: Date.now() })
setSession(token)
return token
}


export function signup({ email, password }: { email: string; password: string }) {
// mimic existing user check omitted for brevity
return login({ email, password })
}