export const metadata = {
  title: "Webinar: Guest/Senior Session",
  description: "Shared layout demo with one Server Component and one Client Component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, color: "#1a1a1a" }}>
        <header
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #eaeaea",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong>Acme Webinars</strong>
          <span style={{ fontSize: 14, color: "#666" }}>Live Session</span>
        </header>

        <main style={{ maxWidth: 640, margin: "40px auto", padding: "0 16px" }}>
          {children}
        </main>

        <footer
          style={{
            padding: "16px 24px",
            borderTop: "1px solid #eaeaea",
            fontSize: 13,
            color: "#888",
            textAlign: "center",
          }}
        >
          © 2026 Acme Webinars
        </footer>
      </body>
    </html>
  );
}