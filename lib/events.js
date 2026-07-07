// NOTE: When an event date passes, remove it from this array (removes both the card and its JSON-LD). Never mark past events as EventScheduled.

export const upcomingEvents = [
  {
    id: 3,
    title: "I Am Books Talk & Signing",
    type: "Author Talk",
    date: "Thursday, September 24th @ 6:00 PM",
    location: "124 Salem St, North End, Boston, MA",
    description: "Join Eddy for a special author talk and book signing event at I Am Books in the North End.",
    imageUrl: "/images/iambooks.jpeg",
    linkUrl: "https://fb.me/e/6H5bjXXOQ",
    linkText: "RSVP on Facebook",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Confidence of The Mob — Author Talk & Signing with Eddy Inserra at I AM Books",
      "description": "A special author talk and book signing with Eddy Manfred Inserra III at I AM Books, the Italian American bookstore in Boston's North End, discussing Confidence of The Mob and the real files of IRS Agent Fred Pastore.",
      "startDate": "2026-09-24T18:00:00-04:00",
      "endDate": "2026-09-24T19:30:00-04:00", // TODO(Eddy): confirm end time.
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "I AM Books",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "124 Salem Street",
          "addressLocality": "Boston",
          "addressRegion": "MA",
          "postalCode": "02113",
          "addressCountry": "US"
        }
      },
      "image": ["https://www.confidenceofthemob.com/images/book_no_bg.png"],
      "offers": {
        "@type": "Offer",
        "url": "https://fb.me/e/6H5bjXXOQ",
        "price": "0", // TODO(Eddy): confirm ticket price per event
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-06-09"
      },
      "performer": { "@type": "Person", "name": "Eddy Manfred Inserra III" },
      "organizer": { "@type": "Person", "name": "Eddy Manfred Inserra III", "url": "https://www.confidenceofthemob.com" },
      "workFeatured": { "@type": "Book", "name": "Confidence of The Mob", "isbn": "9798995080404", "author": { "@type": "Person", "name": "Eddy Manfred Inserra III" } }
    }
  }
];

export const mediaAppearances = [
  {
    id: 1,
    title: "Gangland Wire Podcast Interview",
    type: "Podcast",
    date: "Recent",
    location: "Online",
    description: "Eddy sits down with Gary Jenkins to discuss his time undercover and the fascinating case of Fred Pastore.",
    imageUrl: "/images/gangland.jpeg",
    linkUrl: "https://ganglandwire.com/bostons-pinball-rackets-irs-wars-and-mob-secrets/",
    linkText: "Listen Now",
  },
  {
    id: 2,
    title: "Segment on WGN Channel 9 Chicago",
    type: "TV Segment",
    date: "Coming Soon",
    location: "Chicago, IL",
    description: "WGN Special with Larry Potash",
    imageUrl: "/images/wgn9.png",
    linkUrl: "#",
    linkText: "Airing Details Pending",
  }
];
