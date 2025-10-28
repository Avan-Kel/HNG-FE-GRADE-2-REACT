import type { Ticket, TicketStatus } from '../types'


const TICKETS_KEY = 'ticketapp_tickets'


function allowedStatus(s: string): s is TicketStatus {
return s === 'open' || s === 'in_progress' || s === 'closed'
}


export function loadTickets(): Ticket[] {
try {
const raw = localStorage.getItem(TICKETS_KEY)
if (!raw) return []
const parsed = JSON.parse(raw) as Ticket[]
return parsed
} catch (e) {
console.error('Failed to parse tickets', e)
return []
}
}


export function saveTickets(tickets: Ticket[]) {
localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets))
}


export function createTicket(data: Omit<Ticket, 'id' | 'createdAt'>) {
if (!data.title) throw new Error('Title required')
if (!allowedStatus(data.status)) throw new Error('Invalid status')
const tickets = loadTickets()
const t: Ticket = {
id: crypto.randomUUID(),
createdAt: new Date().toISOString(),
...data,
}
tickets.unshift(t)
saveTickets(tickets)
return t
}


export function updateTicket(id: string, updates: Partial<Ticket>) {
const tickets = loadTickets()
const idx = tickets.findIndex((t) => t.id === id)
if (idx === -1) throw new Error('Ticket not found')
if (updates.status && !allowedStatus(updates.status)) throw new Error('Invalid status')
tickets[idx] = { ...tickets[idx], ...updates }
saveTickets(tickets)
return tickets[idx]
}


export function deleteTicket(id: string) {
let tickets = loadTickets()
tickets = tickets.filter((t) => t.id !== id)
saveTickets(tickets)
}