
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
        <Link href="/"><a style={{ marginRight: '10px' }}>Home</a></Link>
        <Link href="/podcast"><a style={{ marginRight: '10px' }}>Podcast</a></Link>
        <Link href="/files"><a style={{ marginRight: '10px' }}>Files</a></Link>
        <Link href="/ask-fred"><a style={{ marginRight: '10px' }}>Ask Fred</a></Link>
        <Link href="/timeline"><a style={{ marginRight: '10px' }}>Timeline</a></Link>
        <Link href="/mob-web"><a style={{ marginRight: '10px' }}>Mob Web</a></Link>
        <Link href="/book"><a style={{ marginRight: '10px' }}>Book</a></Link>
        <Link href="/subscribe"><a>Subscribe</a></Link>
      </nav>
      <main style={{ padding: '20px' }}>{children}</main>
    </div>
  );
}
