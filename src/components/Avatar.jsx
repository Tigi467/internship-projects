export default function Avatar({ src, name, size = 100 }) {
  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      style={{
        borderRadius: '50%',
        objectFit: 'cover',
        border: '7px solid #4e586a',
      }}
    />
  )
}

