'use server'

import { revalidatePath } from 'next/cache'

type Note = { id: string; text: string }

const notes: Note[] = [
  { id: '1', text: 'This is a seeded note' },
]

export async function getNotes(): Promise<Note[]> {
  return notes
}

export async function addNote(formData: FormData) {
  'use server'

  const text = formData.get('text')

  if (typeof text !== 'string' || text.trim().length === 0) {
    throw new Error('Note text is required')
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))

  notes.push({ id: crypto.randomUUID(), text: text.trim() })

  revalidatePath('/')
}