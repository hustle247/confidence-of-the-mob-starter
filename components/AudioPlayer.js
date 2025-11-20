export default function AudioPlayer({ src, title }) {
  return (
    <div style={{ 
      margin: '20px 0', 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      borderRadius: '8px',
      maxWidth: '600px'
    }}>
      {title && (
        <h3 style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '600' }}>
          {title}
        </h3>
      )}
      <audio 
        controls 
        style={{ width: '100%' }}
        preload="metadata"
      >
        <source src={src} type="audio/mpeg" />
        <source src={src} type="audio/mp3" />
        <source src={src} type="audio/wav" />
        <source src={src} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

