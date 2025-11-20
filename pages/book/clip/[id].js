import { useRouter } from 'next/router';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import bookClips from '../../../data/bookClips.json';

export default function BookClip() {
  const router = useRouter();
  const { id } = router.query;

  // Find the clip data
  const clip = bookClips.find(c => c.id === parseInt(id));

  if (!clip) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>Clip Not Found</h1>
        <p>The audio clip you're looking for doesn't exist.</p>
        <Link href="/book"><a>← Back to Book</a></Link>
      </div>
    );
  }

  const audioPath = `/audio/book/${clip.audioFile}`;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Link href="/book">
        <a style={{ color: '#0066cc', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Back to Book
        </a>
      </Link>

      <div style={{ marginTop: '30px' }}>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '15px', 
          borderRadius: '8px', 
          marginBottom: '20px',
          fontSize: '14px',
          color: '#666'
        }}>
          <strong>Book Page {clip.page}</strong> • Clip #{clip.clipNumber}
        </div>

        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>
          {clip.topic}
        </h1>
        
        <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px' }}>
          Featuring: <strong>{clip.person}</strong>
        </p>

        <AudioPlayer 
          src={audioPath} 
          title={`Audio Clip #${clip.clipNumber}`}
        />

        {/* Podcast Upsell Section */}
        <div style={{
          marginTop: '50px',
          padding: '30px',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>
            Want to hear the full story?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '25px', color: '#e0e0e0' }}>
            This is just a preview. Listen to the complete companion podcast series 
            featuring extended interviews, deeper analysis, and never-before-heard stories.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/podcast">
              <a style={{
                backgroundColor: '#fff',
                color: '#1a1a1a',
                padding: '15px 30px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-block',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
              >
                🎧 Listen to Full Podcast
              </a>
            </Link>
            <Link href="/subscribe">
              <a style={{
                backgroundColor: 'transparent',
                color: '#fff',
                padding: '15px 30px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-block',
                border: '2px solid #fff',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Subscribe for Updates
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

