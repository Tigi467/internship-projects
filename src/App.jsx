import Card from './components/Card'
import Badge from './components/Badge'
import Avatar from './components/Avatar'

export default function App() {
  return (
    <div style={styles.container}>
      <Card title="Frontend Developer">
        <div style={styles.header}>
          <Avatar
            src="https://wallpapercave.com/wp/ENozMYj.jpg"
            name="Tigist"
            size={70}
          />

          <div>
            <h3 style={{ margin: 0 }}>Tigist Getu</h3>
            <p style={{ margin: '4px 0', color: '#666' }}>
              React Beginner
            </p>
          </div>
        </div>

        <p>
          Learning React components, props, and reusable UI patterns.
        </p>

        <div style={styles.badges}>
          <Badge text="React" color="#2e3b58" />
          <Badge text="JavaScript" color="#737d20b3" />
          <Badge text="CSS" color="#6d1064c1" />
        </div>
      </Card>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: '20px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  },
  badges: {
    display: 'flex',
    gap: '8px',
    marginTop: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}

 