import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import docs from '../../data/documents.json';
import Seo from "../../components/Seo";

export async function getStaticPaths() {
    const paths = docs.map((doc) => ({
        params: { id: doc.id },
    }));

    return {
        paths,
        fallback: false, // Return 404 for unknown IDs
    };
}

export async function getStaticProps({ params }) {
    const document = docs.find((doc) => doc.id === params.id);
    return {
        props: {
            document,
        },
    };
}

export default function DocumentPage({ document }) {
    // Attempt to extract the date from the ID (e.g., "001_suggestionstogoafterracketeers_1955-05-11")
    let dateStr = "UNKNOWN DATE";
    const dateMatch = document.id.match(/_(\d{4}-\d{2}-\d{2})$/);
    if (dateMatch) {
        // Format date to something readable
        const dateObj = new Date(dateMatch[1]);
        if (!isNaN(dateObj)) {
            dateStr = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        } else {
            dateStr = dateMatch[1];
        }
    }

    const pageMeta = {
        title: `${document.title} | Confidence of The Mob Archive`,
        description: document.description,
        ogTitle: document.title,
        ogDescription: document.description,
        ogImage: `https://www.confidenceofthemob.com${document.thumbnail}`,
        path: `/documents/${document.id}`
    };

    return (
        <div className="bg-stone-950 min-h-screen text-stone-300">
            <Seo meta={pageMeta} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                
                <div className="mb-8">
                    <Link href="/documents" className="text-stone-500 hover:text-stone-300 transition duration-300 font-mono-file text-xs sm:text-sm uppercase tracking-widest underline underline-offset-4 flex items-center gap-2 w-fit">
                        &larr; Back to Archives
                    </Link>
                </div>

                <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-file">
                    <div className="md:flex">
                        {/* Thumbnail Side */}
                        <div className="md:w-1/3 bg-stone-950 p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-stone-800">
                            <div className="relative w-full aspect-[3/4] rounded shadow-lg border border-stone-700 overflow-hidden mb-4">
                                <Image
                                    src={document.thumbnail}
                                    alt={`Thumbnail of ${document.title}`}
                                    fill
                                    className="object-cover grayscale"
                                />
                            </div>
                            
                            <a 
                                href={`https://drive.google.com/file/d/${document.driveId}/view?usp=sharing`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full text-center bg-accent-red text-white font-bold py-3 px-4 rounded shadow hover:bg-red-600 transition flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                View Full Document
                            </a>
                            <p className="text-xs font-mono-file text-stone-500 mt-3 text-center">Opens securely in Google Drive</p>
                        </div>

                        {/* Details Side */}
                        <div className="md:w-2/3 p-6 sm:p-10 flex flex-col">
                            <div className="mb-2 flex items-center justify-between">
                                <p className="text-xs text-accent-red font-mono-file tracking-widest uppercase">
                                    {document.category}
                                </p>
                                <p className="text-xs text-stone-500 font-mono-file tracking-widest uppercase">
                                    {dateStr}
                                </p>
                            </div>

                            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-serif">
                                {document.title}
                            </h1>

                            <div className="prose prose-invert prose-stone max-w-none mb-8">
                                <p className="text-stone-300 leading-relaxed">
                                    {document.description}
                                </p>
                            </div>

                            {/* Transcription Placeholder */}
                            <div className="mt-auto border-t border-stone-800 pt-6">
                                <h3 className="text-sm font-mono-file text-stone-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    Transcription / OCR
                                </h3>
                                
                                {document.transcription ? (
                                    <div className="bg-stone-950 p-4 rounded border border-stone-800 font-mono-file text-sm text-stone-400 overflow-y-auto max-h-64 whitespace-pre-wrap">
                                        {document.transcription}
                                    </div>
                                ) : (
                                    <div className="bg-stone-950 p-4 rounded border border-stone-800/50 border-dashed text-center">
                                        <p className="text-xs text-stone-600 font-mono-file italic">
                                            [ Transcription pending declassification / review ]
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
