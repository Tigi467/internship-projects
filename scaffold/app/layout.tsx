export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-6 font-sans bg-gray-100">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-blue-600">My Next.js App</h1>
        </header>
        {children}
      </body>
    </html>
  )
}
