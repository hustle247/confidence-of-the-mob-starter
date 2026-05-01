import Head from 'next/head';
import Link from 'next/link';

export default function MediaKit() {
    const driveUrl = 'https://drive.google.com/drive/folders/10a0AWBf5K_tpBqyXDTcioDQCr-Mba-ua?usp=sharing';
    const assets = {
        coreIdentity: [
            { id: 'headshot-pro', label: 'Author Headshot (Professional)', desc: 'Professional attire (suit/tie)', pending: false, url: driveUrl },
            { id: 'headshot-casual', label: 'Author Headshot (Approachable)', desc: 'Lifestyle-oriented photo', pending: false, url: driveUrl },
            { id: 'bio-short', label: 'Author Bio (Short)', desc: '50-word version', pending: false, url: driveUrl },
            { id: 'bio-long', label: 'Author Bio (Long)', desc: '250-word version', pending: false, url: driveUrl },
            { id: 'cover-3d', label: 'High-Res Book Cover (3D)', desc: 'Mockup of the book standing up', pending: false, url: driveUrl },
            { id: 'cover-2d', label: 'High-Res Book Cover (2D)', desc: 'Clean, front-facing JPEG/PNG', pending: false, url: driveUrl },
        ],
        storyEvidence: [
            { id: 'archival-teasers', label: 'Archival Teasers', desc: '3–5 high-quality scans of FBI/IRS files', pending: false, url: driveUrl },
            { id: 'crj-graphic', label: 'The "C+R=J" Graphic', desc: 'Visual formula for social media', pending: false, url: driveUrl },
            { id: 'podcast-trailer', label: 'Podcast Trailer/Teaser', desc: 'Short audio/video clip', pending: false, url: driveUrl },
            { id: 'event-photos', label: 'Event Photos', desc: 'Action shots from signings', pending: false, url: driveUrl },
        ],
        editorialTools: [
            { id: 'interview-questions', label: 'Suggested Interview Questions', desc: '5–10 pre-written questions', pending: false, url: driveUrl },
            { id: 'sample-chapter', label: 'Sample Chapter (PDF)', desc: 'Downloadable first chapter', pending: false, url: driveUrl },
            { id: 'press-release', label: 'Press Release (Text & PDF)', desc: 'Ready for copy-paste', pending: false, url: driveUrl },
            { id: 'fast-facts', label: 'Fast Facts / Trivia Sheet', desc: 'Bulleted list of shocking stats', pending: false, url: driveUrl },
            { id: 'one-sheet', label: 'The "One-Sheet" (PDF)', desc: 'Single-page summary', pending: false, url: driveUrl },
        ]
    };

    return (
        <>
            <Head>
                <title>Press & Media Kit - Confidence of The Mob</title>
                <meta name="description" content="Official press and media kit for Confidence of The Mob by Eddy Manfred Inserra III." />
            </Head>

            <div className="bg-stone-950 min-h-screen pb-24">
                {/* Hero Section */}
                <div className="bg-stone-900 border-b border-stone-800 py-16 md:py-24 relative overflow-hidden">
                    <div className="scanlines absolute inset-0 pointer-events-none opacity-50"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <p className="text-xs sm:text-sm text-accent-red font-mono-file mb-4 tracking-widest uppercase">OFFICIAL PRESS RESOURCES</p>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
                            Media <span className="text-accent-red">Kit</span>
                        </h1>
                        <p className="text-stone-400 max-w-2xl mx-auto text-lg mb-10">
                            Download high-resolution assets, archival evidence, press releases, and editorial tools for "Confidence of The Mob."
                        </p>
                        
                        <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg border border-red-500 shadow-file transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Access Full Media Kit (Google Drive)
                        </a>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    
                    {/* Media Contact & Specs (Top Row) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Contact Info */}
                        <div className="bg-stone-900/50 p-8 rounded-xl border border-stone-800 shadow-file hover:border-stone-700 transition-colors">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-stone-800 pb-4">
                                <span className="text-accent-red">📞</span> Media Contact Info
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-stone-500 text-xs font-mono-file uppercase tracking-widest mb-1">Publicity Contact</p>
                                    <p className="text-white font-bold">Eileen Inserra</p>
                                    <p className="text-stone-400 text-sm">Email: <a href="mailto:pr@confidenceofthemob.com" className="text-accent-red hover:underline">pr@confidenceofthemob.com</a></p>
                                </div>
                                <div className="pt-4 border-t border-stone-800/50">
                                    <p className="text-stone-500 text-xs font-mono-file uppercase tracking-widest mb-2">Social Links</p>
                                    <div className="flex gap-4">
                                        <Link href="/social" className="text-stone-400 hover:text-white transition">Social Media Hub</Link>
                                        <Link href="/podcast" className="text-stone-400 hover:text-white transition">Podcast Page</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Specs & Ordering */}
                        <div className="bg-stone-900/50 p-8 rounded-xl border border-stone-800 shadow-file hover:border-stone-700 transition-colors">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-stone-800 pb-4">
                                <span className="text-accent-red">📚</span> Technical & Ordering Specs
                            </h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-stone-500 text-xs font-mono-file uppercase tracking-widest mb-1">ISBN</p>
                                        <p className="text-white font-mono-file text-sm">9798995080404</p>
                                    </div>
                                    <div>
                                        <p className="text-stone-500 text-xs font-mono-file uppercase tracking-widest mb-1">Price</p>
                                        <p className="text-white font-bold text-sm">$16.99 (Paperback)</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-stone-500 text-xs font-mono-file uppercase tracking-widest mb-1">Distributor</p>
                                        <p className="text-white text-sm">IngramSpark</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-stone-800/50 flex flex-col gap-3">
                                    <p className="text-stone-500 text-xs font-mono-file uppercase tracking-widest mb-1">Links</p>
                                    <div className="flex flex-wrap gap-3">
                                        <a href="https://www.amazon.com/dp/B0GSF9DZC7" target="_blank" rel="noopener noreferrer" className="text-sm bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 rounded border border-stone-700 transition">Amazon</a>
                                        <a href="https://www.barnesandnoble.com/w/confidence-of-the-mob-eddy-manfred-inserra/1149899240?ean=9798995080404" target="_blank" rel="noopener noreferrer" className="text-sm bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 rounded border border-stone-700 transition">Barnes & Noble</a>
                                        <Link href="/contact" className="text-sm bg-accent-red/20 hover:bg-accent-red/30 text-accent-red px-4 py-2 rounded border border-accent-red/30 transition ml-auto font-bold">Request Review Copy</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Downloadable Assets Component */}
                    <div className="space-y-12">
                        {/* Core Identity */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-accent-red"></span> Core Identity Assets
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {assets.coreIdentity.map(asset => (
                                    <AssetCard key={asset.id} asset={asset} />
                                ))}
                            </div>
                        </section>

                        {/* Story & Evidence */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-accent-red"></span> Story & Evidence Assets
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {assets.storyEvidence.map(asset => (
                                    <AssetCard key={asset.id} asset={asset} />
                                ))}
                            </div>
                        </section>

                        {/* Editorial Tools */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-accent-red"></span> Editorial Tools
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {assets.editorialTools.map(asset => (
                                    <AssetCard key={asset.id} asset={asset} />
                                ))}
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    );
}

// Reusable component for individual asset downloads
function AssetCard({ asset }) {
    return (
        <div className="bg-stone-900 border border-stone-800 rounded-lg p-5 flex flex-col justify-between hover:border-stone-600 transition-colors group">
            <div>
                <h3 className="text-white font-bold mb-1">{asset.label}</h3>
                <p className="text-stone-400 text-sm mb-4">{asset.desc}</p>
            </div>
            
            {asset.pending ? (
                <button disabled className="w-full text-center bg-stone-800/50 text-stone-500 py-2 rounded text-sm font-mono-file tracking-widest uppercase border border-stone-800 cursor-not-allowed">
                    Upload Pending
                </button>
            ) : (
                <a href={asset.url} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-stone-800 hover:bg-stone-700 text-white py-2 rounded text-sm font-bold transition flex items-center justify-center gap-2 border border-stone-700 group-hover:border-stone-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    Open Folder
                </a>
            )}
        </div>
    );
}
