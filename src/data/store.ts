export type Review = {
  reviewer: string;
  source: "Google";
  rating?: number;
  age?: string;
  text?: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  demo: boolean;
  priceLabel: "$—" | string;
  priceNote: "CHECK IN STORE" | "PRICE COMING SOON";
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  accent: string;
};

export type Deal = {
  id: string;
  badge: "SPECIAL" | "NEW ARRIVAL" | "LIMITED FIND" | "STAFF PICK" | "FAMILY FAVOURITE" | "BACK IN STOCK";
  title: string;
  detail: string;
  category: string;
  priceLabel: "$—";
  priceNote: "CHECK IN STORE";
};

export type JourneyStep = {
  id: string;
  label: string;
  title: string;
  copy: string;
};

export const store = {
  name: "World of Discounts",
  shortName: "WOD",
  tagline: "BIG VALUE. EVERY DAY.",
  secondaryTagline: "DISCOVER MORE. SPEND LESS.",
  heroHeadline: "YOUR LOCAL PLACE FOR A GREAT DEAL.",
  heroSupport:
    "Everyday essentials, unexpected finds and prices worth coming back for.",
  primaryCta: "EXPLORE THE STORE",
  secondaryCta: "GET DIRECTIONS",
  type: "Grocery / convenience / discount store",
  area: "Cambridge Park, Penrith area",
  address: {
    line1: "96 Oxford St",
    line2: "Cambridge Park NSW 2747",
    country: "Australia",
  },
  phone: {
    display: "(02) 4722 5786",
    tel: "+61247225786",
  },
  rating: 4.3,
  reviewCount: 11,
  reviewSource: "Google",
  ownerMention: "Raj",
  hours: {
    weekly: null as
      | null
      | { day: string; opens: string; closes: string; closed?: boolean }[],
    listingHint: "Closed · Opens 1 pm Mon",
    listingHintNote:
      "This is the status recently shown on the public listing. A complete weekly schedule has not been supplied yet.",
    checkLabel: "CHECK TODAY’S OPENING HOURS",
  },
  map: {
    lat: -33.7478,
    lng: 150.722,
    approximate: true,
    embedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=150.7175%2C-33.7508%2C150.7265%2C-33.7448&layer=mapnik&marker=-33.7478%2C150.722",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=96+Oxford+St%2C+Cambridge+Park+NSW+2747",
    listingUrl:
      "https://www.google.com/maps/search/?api=1&query=World+of+Discounts%2C+96+Oxford+St%2C+Cambridge+Park+NSW+2747",
    writeReviewUrl:
      "https://www.google.com/maps/search/?api=1&query=World+of+Discounts%2C+96+Oxford+St%2C+Cambridge+Park+NSW+2747",
  },
  socialLinks: [] as { label: string; href: string }[],
  reviewThemes: [
    "Friendly service",
    "Helpful owner",
    "Variety of products",
    "Affordable prices",
    "Local community appeal",
  ],
  community: {
    headline: "MORE THAN A SHOP.",
    copy: "A local store built around good service, helpful people and finding something useful every time you walk in.",
    ownerNote:
      "Neighbours on Google keep mentioning Raj — friendly, helpful, and part of why people come back.",
  },
  seo: {
    title: "World of Discounts | Discount Grocery Store in Cambridge Park",
    description:
      "World of Discounts is a local grocery and convenience store at 96 Oxford St, Cambridge Park NSW. Everyday essentials, unexpected finds and prices worth coming back for.",
    keywords: [
      "World of Discounts",
      "Cambridge Park grocery store",
      "Oxford Street convenience store",
      "discount grocery Penrith",
      "Cambridge Park NSW",
    ],
  },
} as const;

export const categories: Category[] = [
  {
    id: "pantry",
    name: "PANTRY",
    description: "The staples you reach for first — then the extras you didn’t know you needed.",
    image: "/products/wod-pantry.webp",
    accent: "#F09A3E",
  },
  {
    id: "snacks",
    name: "SNACKS",
    description: "Crisp bags, after-school treats and the kind of crunch that doesn’t last long.",
    image: "/products/wod-snacks.webp",
    accent: "#FFE14A",
  },
  {
    id: "drinks",
    name: "DRINKS",
    description: "Cold cans, family bottles and something fizzy for the drive home.",
    image: "/products/wod-drink.webp",
    accent: "#E31837",
  },
  {
    id: "confectionery",
    name: "CONFECTIONERY",
    description: "A little sweetness at the counter. Always worth a second look.",
    image: "/products/wod-chocolate.webp",
    accent: "#6B3A2A",
  },
  {
    id: "household",
    name: "HOUSEHOLD",
    description: "Cleaning, kitchen and the useful stuff that keeps the house moving.",
    image: "/products/wod-clean.webp",
    accent: "#0C6B4D",
  },
  {
    id: "personal-care",
    name: "PERSONAL CARE",
    description: "Everyday wash-and-go bits without a special trip to the big shops.",
    image: "/products/wod-care.webp",
    accent: "#FF3B7A",
  },
  {
    id: "frozen",
    name: "FROZEN",
    description: "Quick dinners, freezer fillers and cold finds waiting in the cabinet.",
    image: "/products/wod-frozen.webp",
    accent: "#2EA8FF",
  },
  {
    id: "everyday",
    name: "EVERYDAY ESSENTIALS",
    description: "The regulars. Milk, basics and the things Cambridge Park runs on.",
    image: "/products/wod-everyday.webp",
    accent: "#2EA8FF",
  },
  {
    id: "surprise",
    name: "SURPRISE FINDS",
    description: "You never quite know what’s landed this week. That’s the fun of it.",
    image: "/products/wod-surprise.webp",
    accent: "#E31837",
  },
];

export const products: Product[] = [
  {
    id: "demo-cereal",
    name: "Morning Stack",
    category: "pantry",
    image: "/products/wod-cereal.webp",
    alt: "Illustrated cereal box placeholder for the demo pantry assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-pasta",
    name: "Tawny Grain",
    category: "pantry",
    image: "/products/wod-pantry.webp",
    alt: "Illustrated pasta carton placeholder for the demo pantry assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-chips",
    name: "Ridge Crunch",
    category: "snacks",
    image: "/products/wod-snacks.webp",
    alt: "Illustrated snack bag placeholder for the demo snack assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-soda",
    name: "Cherry Lift",
    category: "drinks",
    image: "/products/wod-drink.webp",
    alt: "Illustrated drink can placeholder for the demo drinks assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-chocolate",
    name: "Dark Square",
    category: "confectionery",
    image: "/products/wod-chocolate.webp",
    alt: "Illustrated chocolate bar placeholder for the demo confectionery assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-clean",
    name: "Citrus Bright",
    category: "household",
    image: "/products/wod-clean.webp",
    alt: "Illustrated cleaning bottle placeholder for the demo household assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-care",
    name: "Soft Coral",
    category: "personal-care",
    image: "/products/wod-care.webp",
    alt: "Illustrated care bottle placeholder for the demo personal care assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-frozen",
    name: "Frost Pods",
    category: "frozen",
    image: "/products/wod-frozen.webp",
    alt: "Illustrated frozen box placeholder for the demo freezer assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-milk",
    name: "Daily Carton",
    category: "everyday",
    image: "/products/wod-everyday.webp",
    alt: "Illustrated milk carton placeholder for the demo everyday assortment",
    demo: true,
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "demo-surprise",
    name: "This Week’s Mix",
    category: "surprise",
    image: "/products/wod-surprise.webp",
    alt: "Illustrated mixed goods placeholder for surprise finds",
    demo: true,
    priceLabel: "$—",
    priceNote: "PRICE COMING SOON",
  },
];

export const deals: Deal[] = [
  {
    id: "special",
    badge: "SPECIAL",
    title: "This week’s pantry run",
    detail: "Ask in store for what’s marked down today.",
    category: "pantry",
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "new-arrival",
    badge: "NEW ARRIVAL",
    title: "Just landed on the shelf",
    detail: "New lines appear through the week. Come have a look.",
    category: "surprise",
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "limited",
    badge: "LIMITED FIND",
    title: "When it’s gone, it’s gone",
    detail: "Short-run finds that don’t always come back.",
    category: "surprise",
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "staff-pick",
    badge: "STAFF PICK",
    title: "What we’re pointing people to",
    detail: "Ask Raj or the team what’s worth grabbing.",
    category: "everyday",
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "family",
    badge: "FAMILY FAVOURITE",
    title: "The regular family fill-up",
    detail: "Snacks, drinks and the bits that disappear first.",
    category: "snacks",
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
  {
    id: "back",
    badge: "BACK IN STOCK",
    title: "Returned to the aisle",
    detail: "If you missed it last time, it may be back now.",
    category: "household",
    priceLabel: "$—",
    priceNote: "CHECK IN STORE",
  },
];

export const reviews: Review[] = [
  { reviewer: "Dark Horsz", source: "Google" },
  { reviewer: "Vanessa Moore", source: "Google" },
  { reviewer: "Muffin Man", source: "Google" },
  { reviewer: "Sumeet Kohli", source: "Google" },
  { reviewer: "Susan Hardy", source: "Google" },
  { reviewer: "Darla", source: "Google" },
  { reviewer: "Brae Broc", source: "Google" },
];

export const journey: JourneyStep[] = [
  {
    id: "street",
    label: "01  STREET",
    title: "Oxford Street",
    copy: "Cambridge Park. A local stop on the way through, not a destination you have to plan.",
  },
  {
    id: "entrance",
    label: "02  ENTRANCE",
    title: "In you go",
    copy: "A neighbourhood shop with colour on the shelves and a reason to wander a little further.",
  },
  {
    id: "basket",
    label: "03  BASKET",
    title: "Grab a basket",
    copy: "You came in for one thing. The aisle usually has other ideas.",
  },
  {
    id: "aisles",
    label: "04  AISLES",
    title: "Walk the rows",
    copy: "Pantry, snacks, drinks, household — then the surprise shelf that changes the plan.",
  },
  {
    id: "products",
    label: "05  PRODUCTS",
    title: "Everyday + unexpected",
    copy: "Essentials you need. Finds you didn’t expect. That’s the World of Discounts mix.",
  },
  {
    id: "deals",
    label: "06  DEALS",
    title: "The value bit",
    copy: "Prices live on the shelf, not on a website guess. Come in and check the tickets.",
  },
  {
    id: "checkout",
    label: "07  CHECKOUT",
    title: "See you next time",
    copy: "Friendly service, a full bag, and a store that still feels like it belongs to the street.",
  },
];

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#deals", label: "Deals" },
  { href: "#categories", label: "Categories" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit Us" },
] as const;
