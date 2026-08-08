export type Speaker = {
  name: string;
  role: "guest" | "senior";
  title: string;
};

export type Session = {
  title: string;
  description: string;
  speakers: Speaker[];
  attendeeCount: number;
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getSession(): Promise<Session> {
  await delay(300);
  return {
    title: "Scaling Design Systems",
    description:
      "A joint session pairing a guest practitioner with a senior team member to walk through real-world lessons on scaling design systems.",
    speakers: [
      { name: "Maya Chen", role: "guest", title: "Staff Designer, Guest Speaker" },
      { name: "Daniel Osei", role: "senior", title: "Senior Design Systems Lead" },
    ],
    attendeeCount: 128,
  };
}