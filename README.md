# TicketApp — React Version

This is the **React** implementation of the Multi-Framework Ticket Web App.

## The single root README linking to each implementation.
| Framework | Directory | Setup & Usage |
|-----------|-----------|---------------|
| **React + TypeScript** | [GITHUB`https://github.com/Avan-Kel/HNG-FE-GRADE-2-REACT.git/`] vercel(https://hng-fe-grade-2-react-git-main-promises-projects-3ed1ac1b.vercel.app) | `npm install && npm run dev` |
-----
| **Twig (PHP)** | [GITHUB`https://github.com/Avan-Kel/HNG-FE-GRADE-2-TWIG.git/`](https://hng-fe-grade-2-twig-production.up.railway.app) | `php -S localhost:8000 -t public` |
| **Vue 3 + TypeScript** | [GITHUB`https://github.com/Avan-Kel/HNG-FE-GRADE-2-VUE.git/`](https://hng-fe-grade-2-vue-git-main-promises-projects-3ed1ac1b.vercel.app
p) | `npm install && npm run dev` |
| **CONTAINER** | [GITHUB`https://github.com/Avan-Kel/HNG-FE-GRADE-2-REACT.git/`]


## Folder structure 
components/   # Header, Footer, Hero, TicketCard, etc.
pages/        # Landing, Login, Signup, Dashboard, Tickets
lib/          # Toast notifications, utils
layout/       # App Layout wrapper
App.tsx       # Main entry
main.tsx      # ReactDOM.render


## Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- localStorage for simulated authentication
- Custom toast notifications

## Usage

Open http://localhost:3000

Signup or login (authentication simulated via localStorage)

Navigate to Dashboard and Ticket Management

Logout clears session and redirects to Login

## Features

Landing Page with Hero section, wavy SVG, decorative circles, CTA buttons

Login/Signup with validation and toast messages

Dashboard showing total, open, resolved tickets

Ticket Management (CRUD) with validation and success/error feedback

Responsive design and accessibility compliance

## Setup

```bash
# Clone the repository
git clone <repo-url> react-ticket-app
cd react-ticket-app

# Install dependencies
npm install

# Start development server
npm run dev
