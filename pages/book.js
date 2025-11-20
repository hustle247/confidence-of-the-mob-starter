import Link from 'next/link';
import bookClips from '../data/bookClips.json';

export default function Book() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Book</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
        Read excerpts from the companion book. Click on any clip below to listen to audio interviews and stories.
      </p>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
          Audio Clips
        </h2>
        
        <div style={{ display: 'grid', gap: '15px' }}>
          {bookClips.map((clip) => (
            <Link key={clip.id} href={`/book/clip/${clip.id}`}>
              <a style={{
                display: 'block',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s',
                backgroundColor: '#fff'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#0066cc';
                e.currentTarget.style.backgroundColor = '#f8f9ff';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#ddd';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontSize: '14px', 
                      color: '#666', 
                      marginBottom: '8px',
                      display: 'flex',
                      gap: '15px',
                      flexWrap: 'wrap'
                    }}>
                      <span><strong>Page {clip.page}</strong></span>
                      <span>Clip #{clip.clipNumber}</span>
                    </div>
                    <h3 style={{ 
                      fontSize: '20px', 
                      marginBottom: '8px', 
                      color: '#1a1a1a',
                      fontWeight: '600'
                    }}>
                      {clip.topic}
                    </h3>
                    <p style={{ fontSize: '16px', color: '#555', margin: 0 }}>
                      Featuring: <strong>{clip.person}</strong>
                    </p>
                  </div>
                  <div style={{ 
                    fontSize: '24px',
                    color: '#0066cc',
                    alignSelf: 'center'
                  }}>
                    ▶
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
