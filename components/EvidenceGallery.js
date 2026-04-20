import Image from 'next/image';
import docs from '../data/documents.json';

export default function EvidenceGallery() {
    const openDocument = (driveId) => {
        // Direct View URL format to bypass the clunky Drive UI
        const url = `https://drive.google.com/file/d/${driveId}/view?usp=sharing`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="bg-zinc-900 py-12 px-6">
            <h2 className="text-3xl font-serif text-amber-500 mb-8 font-mono-file tracking-wider uppercase">
                <span className="text-accent-red">//</span> The Archives: Files from "The Box"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {docs.map((doc) => (
                    <a
                        key={doc.id}
                        href={`https://drive.google.com/file/d/${doc.driveId}/view?usp=sharing`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border border-zinc-700 p-4 hover:border-accent-red transition-all bg-stone-900/50 backdrop-blur-sm no-underline flashlight-card"
                        onMouseMove={handleMouseMove}
                    >
                        <div className="relative h-64 w-full mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-stone-800">
                            <Image
                                src={doc.thumbnail}
                                alt={doc.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Flashlight Overlay */}
                            <div className="flashlight-overlay" />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                            {doc.isNew && (
                                <span className="absolute top-2 left-2 bg-accent-red text-white text-[10px] px-2 py-1 uppercase tracking-widest font-mono-file border border-red-500 z-[20] shadow-glow animate-pulse">
                                    NEWLY DECLASSIFIED
                                </span>
                            )}
                            <span className="absolute bottom-2 right-2 bg-stone-800/80 text-white text-[10px] px-2 py-1 uppercase tracking-widest font-mono-file border border-stone-600 z-[20]">
                                View Archive File
                            </span>
                        </div>
                        <p className="text-[10px] text-accent-red font-mono-file mb-1 tracking-widest uppercase">{doc.category}</p>
                        <h3 className="text-xl font-bold text-white mb-2">{doc.title}</h3>
                        <p className="text-stone-400 text-sm leading-relaxed">{doc.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
