import { addNote, getNotes } from './actions'
import { SubmitButton } from './ui/submit-button'

export default async function Page() {
  const notes = await getNotes()

  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Notes</h1>

      <form action={addNote} style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <input
          type="text"
          name="text"
          placeholder="Write a note..."
          required
          style={{ flex: 1, padding: 8 }}
        />
        <SubmitButton />
      </form>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </main>
  )
}