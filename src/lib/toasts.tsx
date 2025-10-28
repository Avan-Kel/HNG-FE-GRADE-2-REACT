import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'


interface Toast { id: string; message: string; type?: 'success' | 'error' }


const ToastContext = createContext<{
push: (t: Omit<Toast, 'id'>) => void
}>({ push: () => {} })


export function ToastProvider({ children }: { children: ReactNode }) {
const [toasts, setToasts] = useState<Toast[]>([])
function push(t: Omit<Toast, 'id'>) {
const id = crypto.randomUUID()
setToasts((s) => [...s, { ...t, id }])
setTimeout(() => {
setToasts((s) => s.filter((x) => x.id !== id))
}, 4000)
}
return (
<ToastContext.Provider value={{ push }}>
{children}
<div aria-live="polite" className="fixed right-4 top-4 z-50 flex flex-col gap-2">
{toasts.map((t) => (
<div key={t.id} className={`px-4 py-2 rounded shadow ${t.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
{t.message}
</div>
))}
</div>
</ToastContext.Provider>
)
}


export function useToasts() {
return useContext(ToastContext)
}