import type React from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6 space-y-8 max-w-7xl mx-auto">
      {children}
    </section>
  )
}
