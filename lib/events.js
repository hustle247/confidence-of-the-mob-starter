// NOTE: When an event date passes, remove it from this array (removes both the card and its JSON-LD). Never mark past events as EventScheduled.

export const upcomingEvents = [
  {
    id: 5,
    title: "Barnes & Noble Book Signing",
    type: "Book Signing",
    date: "Saturday, October 24th @ 2:00 PM - 4:00 PM",
    location: "1324 Worcester St, Natick, MA",
    description: "Join Eddy for a special book signing event at Barnes & Noble in Natick.",
    imageUrl: "/images/barnes.png",
    linkUrl: "https://stores.barnesandnoble.com/event/9780062218516-0",
    linkText: "Event Details on Barnes & Noble",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Confidence of The Mob — Book Signing with Eddy Inserra at Barnes & Noble",
      "description": "A book signing event with Eddy Manfred Inserra III for Confidence of The Mob at Barnes & Noble in Natick.",
      "startDate": "2026-10-24T14:00:00-04:00",
      "endDate": "2026-10-24T16:00:00-04:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Barnes & Noble",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1324 Worcester St, Unit 1334",
          "addressLocality": "Natick",
          "addressRegion": "MA",
          "postalCode": "01760",
          "addressCountry": "US"
        }
      },
      "image": ["https://www.confidenceofthemob.com/images/barnes.png"],
      "offers": {
        "@type": "Offer",
        "url": "https://stores.barnesandnoble.com/event/9780062218516-0",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-07-28"
      },
      "performer": { "@type": "Person", "name": "Eddy Manfred Inserra III" },
      "organizer": { "@type": "Person", "name": "Eddy Manfred Inserra III", "url": "https://www.confidenceofthemob.com" },
      "workFeatured": { "@type": "Book", "name": "Confidence of The Mob", "isbn": "9798995080404", "author": { "@type": "Person", "name": "Eddy Manfred Inserra III" } }
    }
  },
  {
    id: 4,
    title: "Larz Anderson Museum Speaker Series",
    type: "Speaker Series",
    date: "Thursday, November 12th (Evening, time TBD)",
    location: "Larz Anderson Museum, Brookline, MA",
    description: "Eddy will be giving a talk about Confidence of The Mob during the museum's speaker series. A book signing and sale will follow the event.",
    imageUrl: "/images/larz_thumbnail.png",
    linkUrl: "https://laam.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F60260",
    linkText: "Get Tickets",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Confidence of The Mob — Speaker Series with Eddy Inserra at Larz Anderson Auto Museum",
      "description": "Eddy Manfred Inserra III gives an evening talk on Confidence of The Mob during the Larz Anderson Auto Museum speaker series, followed by a book signing and sale.",
      "startDate": "2026-11-12T18:00:00-05:00",
      "endDate": "2026-11-12T20:00:00-05:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Larz Anderson Auto Museum",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "15 Newton Street",
          "addressLocality": "Brookline",
          "addressRegion": "MA",
          "postalCode": "02445",
          "addressCountry": "US"
        }
      },
      "image": ["https://www.confidenceofthemob.com/images/larz_thumbnail.png"],
      "offers": {
        "@type": "Offer",
        "url": "https://laam.app.neoncrm.com/nx/portal/neonevents/events?path=%2Fportal%2Fevents%2F60260",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-10-01"
      },
      "performer": { "@type": "Person", "name": "Eddy Manfred Inserra III" },
      "organizer": { "@type": "Person", "name": "Eddy Manfred Inserra III", "url": "https://www.confidenceofthemob.com" },
      "workFeatured": { "@type": "Book", "name": "Confidence of The Mob", "isbn": "9798995080404", "author": { "@type": "Person", "name": "Eddy Manfred Inserra III" } }
    }
  },
  {
    id: 6,
    title: "Langley-Adams Library Author Talk",
    type: "Author Talk",
    date: "Monday, January 11th, 2027 (Time TBD)",
    location: "185 Main St, Groveland, MA (In-Person & Zoom)",
    description: "Join Eddy for an author talk discussing Confidence of The Mob and the secret files of IRS Agent Fred Pastore at the Langley-Adams Public Library in Groveland, MA. Available both in-person and virtually on Zoom.",
    imageUrl: "/images/langley_adams_library.jpg",
    linkUrl: "#",
    linkText: "Details coming soon",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Confidence of The Mob — Author Talk with Eddy Inserra at Langley-Adams Library",
      "description": "An author talk and book discussion with Eddy Manfred Inserra III for Confidence of The Mob at the Langley-Adams Library in Groveland, MA (In-Person and Virtual on Zoom).",
      "startDate": "2027-01-11T18:30:00-05:00",
      "endDate": "2027-01-11T20:00:00-05:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Langley-Adams Public Library",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "185 Main Street",
          "addressLocality": "Groveland",
          "addressRegion": "MA",
          "postalCode": "01834",
          "addressCountry": "US"
        }
      },
      "image": ["https://www.confidenceofthemob.com/images/langley_adams_library.jpg"],
      "offers": {
        "@type": "Offer",
        "url": "https://www.confidenceofthemob.com/events",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-09-29"
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
    linkUrl: "https://www.youtube.com/watch?v=1vjX2Kmj2Y4",
    linkText: "Watch Now",
  },
  {
    id: 2,
    title: "WGN's Backstory with Larry Potash",
    type: "TV Segment",
    date: "Sunday, November 22nd",
    location: "WGN Chicago (Channel 9)",
    description: "Featured segment on WGN's Backstory covering Fred Pastore and Confidence of The Mob (featured at 0:40 in the season trailer).",
    imageUrl: "/images/wgn9.png",
    linkUrl: "https://www.youtube.com/watch?v=fu7IWXKGf5Y",
    linkText: "Watch Trailer",
  },
  {
    id: 3,
    title: "The Seth Rosczewski Podcast",
    type: "Podcast",
    date: "Recent",
    location: "Online / YouTube",
    description: "Eddy Inserra and Bobby Pastore join Seth Rosczewski to discuss Fred Pastore's journey from mafia hunter to mafia adviser and the secrets in The Box.",
    imageUrl: "/images/seth_podcast.jpg",
    linkUrl: "https://youtu.be/VfHA7KPkZ30?si=tCH3fHkwdwGwFSEJ",
    linkText: "Watch Interview",
  }
];

export const pastMediaStories = [
  {
    id: 3,
    title: "I AM Books Author Talk & Signing",
    type: "Author Talk",
    date: "September 24, 2026",
    location: "North End, Boston, MA",
    description: "Eddy joined readers for an author talk and book signing at I AM BOOKS in Boston's historic North End, discussing Confidence of The Mob and the real files of IRS Agent Fred Pastore.",
    imageUrl: "/images/iambooks.jpeg",
    linkUrl: "https://www.eventbrite.com/e/confidence-of-the-mob-book-presentation-tickets-1998788369820?aff=ebdsoporgprofile",
    linkText: "View Event Details",
  },
  {
    id: 1,
    title: "Eddy Inserra brings family history to life in his new book",
    type: "News Article",
    date: "June 2026",
    location: "Woburn Daily Times",
    description: "WOBURN - Lifelong Woburn resident, entrepreneur and expert in X-ray detection technology, Eddy Inserra recently published his first book titled 'Confidence of the Mob' inspired by his grandfather Fred G.",
    imageUrl: "https://bloximages.chicago2.vip.townnews.com/homenewshere.com/content/tncms/assets/v3/editorial/2/cc/2cc1e817-eccf-49a8-9938-7c160d90c6b4/6a2965efc440a.image.jpg",
    linkUrl: "https://homenewshere.com/daily_times_chronicle/news/woburn/article_b48a8d12-eb21-42b5-a9d2-014e4a97c0c8.html",
    linkText: "Read Article",
  },
  {
    id: 2,
    title: "CONFIDENCE OF THE MOB!!! Eddy Inserra joins 'The Happy Hour'",
    type: "Podcast",
    date: "Recent",
    location: "The Happy Hour Social Club",
    description: "Eddy Manfred Inserra III joins King Hap to talk about the information that he found when opening his late grandfather’s box of belongings!",
    imageUrl: "https://metaimg.podpage.com/F5Tvk6Nd6XKoSgWOKXtR688SaEuhYLOE66sZT3TwJuE/eyJoIjo2MzAsIm0iOiJlbmgiLCJ0IjoiQ09ORklERU5DRSBPRiBUSEUgTU9CISEhIEVkZHkgTWFuZnJlZCBJbnNlcnJhIElJSSBqb2lucywg4oCcVGhlIEhhcHB5IEhvdXIh4oCdIiwidGMiOiIjMTEzRUEzIiwidSI6Imh0dHBzOi8vc3RvcmFnZS5idXp6c3Byb3V0LmNvbS85bnBkZmxxNjRlOXQzNWZ3bWluOTE2Mzdyb2ZtPy5qcGciLCJ3IjoxMjAwLCJ4YyI6IiNmZmZmZmYifQ.webp",
    linkUrl: "https://www.thehappyhoursocialclub.com/confidence-of-the-mob-eddy-manfred-inserra-iii-joins-the-happy-hour/",
    linkText: "Listen to Podcast",
  }
];
