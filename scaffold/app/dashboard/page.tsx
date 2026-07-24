import Link from "next/link"

export default function DashboardPage() {
  return (
    <div>
      <p>This is the dashboard index.</p>
      <ul className="list-disc pl-5">
        <li><Link href="/dashboard/settings">Settings</Link></li>
        <li><Link href="/dashboard/reports">Reports</Link></li>
      </ul>
    </div>
  )
}
