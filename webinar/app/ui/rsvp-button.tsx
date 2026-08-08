"use client";

import { useState } from "react";

export default function RsvpButton({ attendeeCount }: { attendeeCount: number }) {
  const [joined, setJoined] = useState(false);
  const [count, setCount] = useState(attendeeCount);

  function handleClick() {
    setJoined((j) => !j);
    setCount((c) => (joined ? c - 1 : c + 1));
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          borderRadius: 8,
          border: "none",
          background: joined ? "#1a1a1a" : "#2563eb",
          color: "white",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        {joined ? "You're in ✓" : "RSVP to join"}
      </button>
      <span style={{ fontSize: 14, color: "#666" }}>{count} attending</span>
    </div>
  );
}