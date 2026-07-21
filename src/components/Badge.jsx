export default function Badge({ text, color = '#2f3d5c' }) {
  return (
    <span
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '4px 10px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: 'bold',
      }}
    >
      {text}
    </span>
  )
}

 