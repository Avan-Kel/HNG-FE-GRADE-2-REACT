import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ToastProvider } from "../lib/toasts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-slate-50">
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 py-6">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </ToastProvider>
  );
}
