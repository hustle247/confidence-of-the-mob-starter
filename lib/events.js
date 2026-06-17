// NOTE: When an event date passes, remove it from this array (removes both the card and its JSON-LD). Never mark past events as EventScheduled.

export const upcomingEvents = [
  {
    id: 2,
    title: "Used Book Superstore Signing",
    type: "Book Signing",
    date: "Saturday, June 20th @ 9:00 AM - 11:00 AM",
    location: "256 Cambridge St, Burlington, MA",
    description: "Book signing and sale event. Great opportunity to grab a last minute Father's Day gift!",
    imageUrl: "/images/usbss.jpeg",
    linkUrl: "https://fb.me/e/6nLGFB9ku",
    linkText: "RSVP on Facebook",
    secondaryLinkUrl: "https://www.eventbrite.com/e/1990056832557",
    secondaryLinkText: "Get Tickets on Eventbrite",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Confidence of The Mob — Book Signing with Eddy Inserra at Used Book Superstore",
      "description": "Book signing and sale event with author Eddy Manfred Inserra III at the Used Book Superstore in Burlington, MA. A great opportunity to grab a last-minute Father's Day gift.",
      "startDate": "2026-06-20T09:00:00-04:00",
      "endDate": "2026-06-20T11:00:00-04:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Used Book Superstore",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "256 Cambridge Street",
          "addressLocality": "Burlington",
          "addressRegion": "MA",
          "postalCode": "01803",
          "addressCountry": "US"
        }
      },
      "image": ["https://www.confidenceofthemob.com/images/book_no_bg.png"],
      "offers": {
        "@type": "Offer",
        "url": "https://www.eventbrite.com/e/1990056832557",
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
    title: "Barbara's Bookstore Book Signing",
    type: "Book Signing",
    date: "Sunday, June 28th @ 1:00 PM - 2:00 PM",
    location: "Hawthorn Mall, 120 Hawthorn Center, Vernon Hills, IL",
    description: "Meet local author Eddy Manfred Inserra III. Exclusive documents will be available to view onsite including IRS Racketeer Documents, real stories from East Boston, and the Kennedy connection.",
    imageUrl: "/images/barbaras.png",
    linkUrl: "https://barbarasbookstore.com/event/eddy-manfred-inserra-iii",
    linkText: "Store Event Page",
    secondaryLinkUrl: "https://www.eventbrite.com/e/1991098351769",
    secondaryLinkText: "Get Tickets on Eventbrite",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Confidence of The Mob — Book Signing with Eddy Inserra at Barbara's Bookstore Vernon Hills",
      "description": "Meet author Eddy Manfred Inserra III at Barbara's Bookstore in Hawthorn Mall, Vernon Hills, IL. Exclusive documents on view onsite, including IRS racketeer files, real stories from East Boston, and the Kennedy connection.",
      "startDate": "2026-06-28T13:00:00-05:00",
      "endDate": "2026-06-28T14:00:00-05:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Barbara's Bookstore — Hawthorn Mall",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "120 Hawthorn Center",
          "addressLocality": "Vernon Hills",
          "addressRegion": "IL",
          "postalCode": "60061",
          "addressCountry": "US"
        }
      },
      "image": ["https://www.confidenceofthemob.com/images/book_no_bg.png"],
      "offers": {
        "@type": "Offer",
        "url": "https://www.eventbrite.com/e/1991098351769",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/WGN_TV_logo.svg",
    linkUrl: "#",
    linkText: "Airing Details Pending",
  }
];
