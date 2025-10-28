export type TicketStatus = 'open' | 'in_progress' | 'closed'


export interface Ticket {
id: string
title: string
description?: string
status: TicketStatus
priority?: number
createdAt: string
}