export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Dashboard</h2>
      {children}
    </section>
  )
}
