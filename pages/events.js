import Head from 'next/head';
import Link from 'next/link';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Barnes & Noble Book Signing",
      type: "Book Signing",
      date: "Saturday, June 13th @ 2:00 PM",
      location: "Burlington, MA",
      description: "Join Eddy for an exclusive book signing at the Barnes & Noble in Burlington.",
      imageUrl: "/Media Kit/Book_Signing_Event_1.jpeg", // Using one of the media kit images if it exists, otherwise fallback works
      linkUrl: "#",
      linkText: "Event Details",
    },
    {
      id: 2,
      title: "Used Book Superstore Signing",
      type: "Book Signing",
      date: "Saturday, June 20th @ 9:00 AM - 11:00 AM",
      location: "Used Book Superstore",
      description: "Book signing and sale event. Great opportunity to grab a last minute Father's Day gift!",
      imageUrl: "/Media Kit/Book_Signing_Event_2.jpeg",
      linkUrl: "#",
      linkText: "Event Details",
    },
    {
      id: 3,
      title: "I Am Books Talk & Signing",
      type: "Author Talk",
      date: "Thursday, September 24th @ 6:00 PM",
      location: "North End, Boston",
      description: "Join Eddy for a special author talk and book signing event at I Am Books in the North End.",
      imageUrl: "/Media Kit/Book_Signing_Event_3.jpeg",
      linkUrl: "#",
      linkText: "Event Details",
    }
  ];

  const mediaAppearances = [
    {
      id: 1,
      title: "Gangland Wire Podcast Interview",
      type: "Podcast",
      date: "Recent",
      location: "Online",
      description: "Eddy sits down with Gary Jenkins to discuss his time undercover and the fascinating case of Fred Pastore.",
      imageUrl: "/images/gangland_wire_placeholder.jpg", // Placeholder
      linkUrl: "https://ganglandwire.com/bostons-pinball-rackets-irs-wars-and-mob-secrets/",
      linkText: "Listen Now",
    },
    {
      id: 2,
      title: "WBUR (Boston's NPR)",
      type: "Radio Interview",
      date: "Upcoming",
      location: "Live Radio",
      description: "A deep dive into the financial maneuvers of the mob and how the IRS brought them down.",
      imageUrl: "/images/radio_placeholder.jpg", // Placeholder
      linkUrl: "",
      linkText: "Coming Soon",
    }
  ];

  return (
    <div className="bg-stone-950 min-h-screen">
      <Head>
        <title>Events & Media - Confidence of The Mob</title>
      </Head>

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
                  {event.linkUrl && event.linkUrl !== "#" ? (
                    <a href={event.linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-white hover:text-accent-red transition-colors font-mono-file tracking-wider uppercase mt-auto">
                      {event.linkText} 
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-sm font-bold text-stone-500 font-mono-file tracking-wider uppercase mt-auto">
                      {event.linkText}
                    </span>
                  )}
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
