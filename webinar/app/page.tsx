import RsvpButton from "@/app/ui/rsvp-button";
import { getSession } from "@/lib/data";

export default async function SessionPage() {
  const session = await getSession();

  return (
    <article>
      <h1>{session.title}</h1>
      <p style={{ color: "#444" }}>{session.description}</p>

      <div style={{ display: "flex", gap: 16, margin: "24px 0" }}>
        {session.speakers.map((speaker) => (
          <div
            key={speaker.name}
            style={{ flex: 1, padding: 16, borderRadius: 8, border: "1px solid #eaeaea" }}
          >
            <div
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                color: speaker.role === "senior" ? "#2563eb" : "#a16207",
                marginBottom: 4,
              }}
            >
              {speaker.role === "senior" ? "Senior" : "Guest"}
            </div>
            <div style={{ fontWeight: 600 }}>{speaker.name}</div>
            <div style={{ fontSize: 14, color: "#666" }}>{speaker.title}</div>
          </div>
        ))}
      </div>

      <RsvpButton attendeeCount={session.attendeeCount} />
    </article>
  );
}