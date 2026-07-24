import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Welcome Home</h2>
      <p>Navigate to the dashboard:</p>
      <Link href="/dashboard" className="text-blue-500 underline">Go to Dashboard</Link>
    </div>
  )
}
