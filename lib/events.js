// NOTE: When an event date passes, remove it from this array (removes both the card and its JSON-LD). Never mark past events as EventScheduled.

export const upcomingEvents = [
  {
    id: 3,
    title: "I Am Books Talk & Signing",
    type: "Author Talk",
    date: "Thursday, September 24th @ 6:00 PM",
    location: "124 Salem St, North End, Boston, MA",
    description: "Join Eddy for a 45-minute author talk and book signing at I AM BOOKS in the North End, the oldest Italian Neighborhood in Boston. Seating is limited to 40 people.",
    imageUrl: "/images/iambooks.jpeg",
    linkUrl: "#",
    linkText: "Eventbrite tickets coming soon",
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
  },
  {
    id: 4,
    title: "Larz Anderson Museum Speaker Series",
    type: "Speaker Series",
    date: "Thursday, November 12th (Evening, time TBD)",
    location: "Larz Anderson Museum, Brookline, MA",
    description: "Eddy will be giving a talk about Confidence of The Mob during the museum's speaker series. A book signing and sale will follow the event.",
    imageUrl: "/images/larz_thumbnail.png",
    linkUrl: "#",
    linkText: "Details coming soon"
  },
  {
    id: 5,
    title: "Barnes & Noble Book Signing",
    type: "Book Signing",
    date: "Saturday, October 24th @ 2:00 PM - 4:00 PM",
    location: "1324 Worcester St, Natick, MA",
    description: "Join Eddy for a special book signing event at Barnes & Noble in Natick.",
    imageUrl: "/images/barnes.png",
    linkUrl: "#",
    linkText: "Details coming soon",
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
        "url": "https://www.confidenceofthemob.com/events",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-07-28"
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

export const pastMediaStories = [
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
