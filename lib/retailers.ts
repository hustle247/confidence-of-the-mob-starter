export type Retailer = {
  name: string;
  group: "major" | "indie";
  url: string;
  note?: string;
  verified: boolean;
};

export const RETAILERS: Retailer[] = [
  {
    name: "Walmart",
    group: "major",
    url: "https://www.walmart.com/ip/Confidence-of-The-Mob-Paperback-9798995080404/20078317178",
    note: "Paperback ordering",
    verified: true,
  },
  {
    name: "Barnes & Noble",
    group: "major",
    url: "https://www.barnesandnoble.com/w/confidence-of-the-mob-eddy-manfred-inserra/1149899240?ean=9798995080404",
    note: "Online & in-store ordering",
    verified: true,
  },
  {
    name: "Bookshop.org",
    group: "indie",
    // TODO(Eddy): create a Bookshop.org affiliate account — 10% commission on referred sales
    url: "https://bookshop.org/search?keywords=9798995080404",
    note: "Every order supports local bookstores",
    verified: true,
  },
  {
    name: "I AM Books",
    group: "indie",
    url: "https://www.iambooksboston.com/item/eyqAGZ6JhY5lW2q4ODtq9g",
    note: "Boston's North End — hosting our Sept 24 author talk",
    verified: true,
  },
  {
    name: "Barbara's Bookstore",
    group: "indie",
    url: "https://barbarasbookstore.com/search?q=9798995080404",
    note: "Hawthorn Mall, Vernon Hills IL — hosting our June 28 signing",
    verified: true,
  },
];
