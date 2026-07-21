export default function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <div>{children}</div>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '100px',
    padding: '30px',
    width: '650px',
    height:' 250px',
    boxShadow: '0 4px 10px rgba(182, 130, 130, 0.1)',
    backgroundColor: '#c0a6a6',
  },
  title: {
    marginBottom: '12px',
    textAlign: 'center',
  },
}

