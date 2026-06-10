import Head from 'next/head';
import Seo from "../components/Seo";
import { PAGE_META } from "../lib/seo";
import Link from 'next/link';

import { upcomingEvents, mediaAppearances } from '../lib/events';

export default function Events() {
  const eventSchemas = upcomingEvents
    .filter(e => e.schemaData)
    .map(e => e.schemaData);

  const handleDownloadICS = (e, event) => {
    e.preventDefault();
    if (!event.schemaData) return;
    
    const formatDate = (dateStr) => {
      const d = new Date(dateStr);
      return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const start = formatDate(event.schemaData.startDate);
    const end = formatDate(event.schemaData.endDate);
    const title = event.schemaData.name;
    const desc = event.schemaData.description;
    const addr = event.schemaData.location.address;
    const loc = `${addr.streetAddress}, ${addr.addressLocality}, ${addr.addressRegion}`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Confidence of The Mob//Events//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@confidenceofthemob.com`,
      `DTSTAMP:${formatDate(new Date().toISOString())}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${loc}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'confidence_of_the_mob_event.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-stone-950 min-h-screen">
      <Seo meta={PAGE_META["/events"]} />
      
      {eventSchemas.length > 0 && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemas) }}
          />
        </Head>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-xs text-accent-red font-mono-file mb-2 tracking-widest uppercase">PUBLIC SCHEDULE & PRESS</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Events & Media</h1>
          <p className="text-lg text-stone-400">
            Upcoming appearances, book signings, and recent media coverage.
          </p>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-stone-800 pb-4 font-mono-file uppercase tracking-wider">
            <span className="text-accent-red mr-2">//</span> Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden hover:border-stone-600 transition-colors duration-300 group flex flex-col">
                {event.linkUrl && event.linkUrl !== "#" ? (
                  <a href={event.linkUrl} target="_blank" rel="noopener noreferrer" className="relative h-48 block bg-stone-800 overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center bg-stone-800 text-stone-600 font-mono-file text-sm uppercase tracking-widest">
                      [NO IMAGE AVAILABLE]
                    </div>
                    <div className="absolute top-4 left-4 bg-accent-red text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg">
                      {event.type}
                    </div>
                  </a>
                ) : (
                  <div className="relative h-48 block bg-stone-800 overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover grayscale opacity-70"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center bg-stone-800 text-stone-600 font-mono-file text-sm uppercase tracking-widest">
                      [NO IMAGE AVAILABLE]
                    </div>
                    <div className="absolute top-4 left-4 bg-accent-red text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg">
                      {event.type}
                    </div>
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-red transition-colors">{event.title}</h3>
                      <p className="text-sm text-stone-500 font-mono-file">{event.date} • {event.location}</p>
                    </div>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-grow">
                    {event.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-3">
                    {event.linkUrl && event.linkUrl !== "#" ? (
                      <a href={event.linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-white hover:text-accent-red transition-colors font-mono-file tracking-wider uppercase">
                        {event.linkText} 
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-sm font-bold text-stone-500 font-mono-file tracking-wider uppercase">
                        {event.linkText}
                      </span>
                    )}
                    {event.secondaryLinkUrl && event.secondaryLinkUrl !== "#" && (
                      <a href={event.secondaryLinkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-white hover:text-accent-red transition-colors font-mono-file tracking-wider uppercase">
                        {event.secondaryLinkText} 
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </a>
                    )}
                    {event.schemaData && (
                      <button 
                        onClick={(e) => handleDownloadICS(e, event)}
                        className="inline-flex items-center text-sm font-bold text-stone-400 hover:text-white transition-colors font-mono-file tracking-wider uppercase text-left pt-2 border-t border-stone-800"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Add to Calendar (.ics)
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Appearances Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-stone-800 pb-4 font-mono-file uppercase tracking-wider">
            <span className="text-accent-red mr-2">//</span> Media Appearances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaAppearances.map((media) => (
              <div key={media.id} className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden hover:border-stone-600 transition-colors duration-300 group flex flex-col">
                {media.linkUrl && media.linkUrl !== "#" ? (
                  <a href={media.linkUrl} target="_blank" rel="noopener noreferrer" className="relative h-48 block bg-stone-800 overflow-hidden">
                    <img 
                      src={media.imageUrl} 
                      alt={media.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center bg-stone-800 text-stone-600 font-mono-file text-sm uppercase tracking-widest">
                      [NO IMAGE AVAILABLE]
                    </div>
                    <div className="absolute top-4 left-4 bg-stone-700 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg">
                      {media.type}
                    </div>
                  </a>
                ) : (
                  <div className="relative h-48 block bg-stone-800 overflow-hidden">
                    <img 
                      src={media.imageUrl} 
                      alt={media.title} 
                      className="w-full h-full object-cover grayscale opacity-70"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center bg-stone-800 text-stone-600 font-mono-file text-sm uppercase tracking-widest">
                      [NO IMAGE AVAILABLE]
                    </div>
                    <div className="absolute top-4 left-4 bg-stone-700 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg">
                      {media.type}
                    </div>
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-red transition-colors">{media.title}</h3>
                      <p className="text-sm text-stone-500 font-mono-file">{media.date} • {media.location}</p>
                    </div>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-grow">
                    {media.description}
                  </p>
                  {media.linkUrl && media.linkUrl !== "#" ? (
                    <a href={media.linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-white hover:text-accent-red transition-colors font-mono-file tracking-wider uppercase mt-auto">
                      {media.linkText}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-sm font-bold text-stone-500 font-mono-file tracking-wider uppercase mt-auto">
                      {media.linkText}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
