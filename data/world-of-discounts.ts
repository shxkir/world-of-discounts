export type IconName =
  | "jar"
  | "chip"
  | "bottle"
  | "candy"
  | "sparkle"
  | "care"
  | "snow"
  | "bag"
  | "surprise";

export type PriceLabel = "PRICE IN STORE" | "COMING SOON";

export type Category = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  color: string;
  icon: IconName;
};

export type Product = {
  name: string;
  category: string;
  image: string;
  price: PriceLabel;
  badge: string;
  availability: string;
  icon: IconName;
  color: string;
};

export type Deal = {
  name: string;
  category: string;
  image: string;
  price: PriceLabel;
  badge: string;
  availability: string;
  color: string;
  icon: IconName;
};

export type CustomerReview = {
  reviewer: string;
  rating: number;
  text: string;
  source: "Google";
};

export type WeeklyHour = {
  day: string;
  opens: string;
  closes: string;
};

export type SocialLinks = {
  instagram: string;
  facebook: string;
};

/**
 * Single source of truth for the website.
 * Add logo, photos, real products, prices, hours and socials here when the store supplies them.
 * Do not invent missing commercial facts.
 */
export const worldOfDiscounts = {
  business: {
    name: "WORLD OF DISCOUNTS",
    displayName: "World of Discounts",
    category: "Convenience store",
    schemaType: "GroceryStore" as const,
    tagline: "BIG VALUE. EVERY DAY.",
    description:
      "Your local place for everyday essentials, unexpected finds and great bargains.",
    googleRating: 4.3,
    googleReviewCount: 11,
    website: "",
  },
  contact: {
    phone: "(02) 4722 5786",
    phoneHref: "tel:+61247225786",
  },
  location: {
    street: "96 Oxford St",
    suburb: "Cambridge Park",
    region: "NSW",
    postalCode: "2747",
    country: "AU",
    formatted: "96 Oxford St, Cambridge Park NSW 2747",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=96+Oxford+St,+Cambridge+Park+NSW+2747",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=96+Oxford+St,+Cambridge+Park+NSW+2747",
    latitude: null as number | null,
    longitude: null as number | null,
  },
  hours: {
    status: "CHECK TODAY’S HOURS",
    note: "Confirmed weekly opening hours will appear here once the store supplies them.",
    weekly: [] as WeeklyHour[],
  },
  logo: {
    src: "",
    alt: "World of Discounts",
  },
  social: {
    instagram: "",
    facebook: "",
  } satisfies SocialLinks,
  categories: [
    {
      slug: "pantry",
      name: "Pantry",
      short: "Pantry",
      blurb: "Everyday cupboard fills.",
      color: "#ffd84d",
      icon: "jar",
    },
    {
      slug: "snacks",
      name: "Snacks",
      short: "Snacks",
      blurb: "Quick bites for the road.",
      color: "#ff7a66",
      icon: "chip",
    },
    {
      slug: "drinks",
      name: "Drinks",
      short: "Drinks",
      blurb: "Cold, fizzy and everyday.",
      color: "#7ad7e5",
      icon: "bottle",
    },
    {
      slug: "confectionery",
      name: "Confectionery",
      short: "Sweet",
      blurb: "A little something extra.",
      color: "#cc9af2",
      icon: "candy",
    },
    {
      slug: "household",
      name: "Household",
      short: "Home",
      blurb: "Keep the house running.",
      color: "#a6dc80",
      icon: "sparkle",
    },
    {
      slug: "personal-care",
      name: "Personal Care",
      short: "Care",
      blurb: "Daily care, close to home.",
      color: "#ffb1cc",
      icon: "care",
    },
    {
      slug: "frozen",
      name: "Frozen",
      short: "Frozen",
      blurb: "Grab and go from the freezer.",
      color: "#9bc7ff",
      icon: "snow",
    },
    {
      slug: "everyday-essentials",
      name: "Everyday Essentials",
      short: "Everyday",
      blurb: "The things you came in for.",
      color: "#f1a85a",
      icon: "bag",
    },
    {
      slug: "surprise-finds",
      name: "Surprise Finds",
      short: "Surprise",
      blurb: "The unexpected good find.",
      color: "#ffdf5b",
      icon: "surprise",
    },
  ] satisfies Category[],
  products: [
    {
      name: "Pantry staples",
      category: "Pantry",
      image: "",
      price: "PRICE IN STORE",
      badge: "AISLE FIND",
      availability: "Ask the team what’s in today",
      icon: "jar",
      color: "#ffd84d",
    },
    {
      name: "Snack run",
      category: "Snacks",
      image: "",
      price: "PRICE IN STORE",
      badge: "QUICK GRAB",
      availability: "Browse the snack aisle",
      icon: "chip",
      color: "#ff7a66",
    },
    {
      name: "Drinks fridge",
      category: "Drinks",
      image: "",
      price: "PRICE IN STORE",
      badge: "COLD FIND",
      availability: "See what’s chilled today",
      icon: "bottle",
      color: "#7ad7e5",
    },
    {
      name: "Sweet shelf",
      category: "Confectionery",
      image: "",
      price: "PRICE IN STORE",
      badge: "TREAT",
      availability: "Selection changes in store",
      icon: "candy",
      color: "#cc9af2",
    },
    {
      name: "Home helpers",
      category: "Household",
      image: "",
      price: "PRICE IN STORE",
      badge: "USEFUL",
      availability: "Ask if you can’t see it",
      icon: "sparkle",
      color: "#a6dc80",
    },
    {
      name: "Care corner",
      category: "Personal Care",
      image: "",
      price: "PRICE IN STORE",
      badge: "DAILY",
      availability: "Everyday care, in person",
      icon: "care",
      color: "#ffb1cc",
    },
    {
      name: "Freezer finds",
      category: "Frozen",
      image: "",
      price: "PRICE IN STORE",
      badge: "CHILLED",
      availability: "Check the freezer in store",
      icon: "snow",
      color: "#9bc7ff",
    },
    {
      name: "The usuals",
      category: "Everyday Essentials",
      image: "",
      price: "PRICE IN STORE",
      badge: "ESSENTIAL",
      availability: "The reason you popped in",
      icon: "bag",
      color: "#f1a85a",
    },
    {
      name: "Unexpected find",
      category: "Surprise Finds",
      image: "",
      price: "COMING SOON",
      badge: "LOOK OUT",
      availability: "The range moves — come have a look",
      icon: "surprise",
      color: "#ffdf5b",
    },
  ] satisfies Product[],
  deals: [
    {
      name: "The deal wall",
      category: "New specials",
      image: "",
      price: "PRICE IN STORE",
      badge: "IN STORE",
      availability: "Ask our team what’s new",
      color: "#ffde55",
      icon: "bag",
    },
    {
      name: "Bargain board",
      category: "Fresh finds",
      image: "",
      price: "COMING SOON",
      badge: "LOOK OUT",
      availability: "Updates announced in store",
      color: "#ff8c72",
      icon: "surprise",
    },
    {
      name: "Local pick",
      category: "Everyday value",
      image: "",
      price: "PRICE IN STORE",
      badge: "FIND IT",
      availability: "Discover it in person",
      color: "#a9dd85",
      icon: "jar",
    },
    {
      name: "Something unexpected",
      category: "Surprise finds",
      image: "",
      price: "COMING SOON",
      badge: "JUST IN",
      availability: "Selection changes",
      color: "#a9cbff",
      icon: "sparkle",
    },
    {
      name: "Ask the team",
      category: "Helpful service",
      image: "",
      price: "PRICE IN STORE",
      badge: "ASK US",
      availability: "Customers mention Raj and a friendly, helpful team",
      color: "#ffb1cc",
      icon: "care",
    },
    {
      name: "Next special",
      category: "Coming soon",
      image: "",
      price: "COMING SOON",
      badge: "SOON",
      availability: "This slot is ready for the next confirmed promotion",
      color: "#d8ff3e",
      icon: "candy",
    },
  ] satisfies Deal[],
  reviews: [] as CustomerReview[],
  reviewThemes: [
    "Friendly staff",
    "Helpful service",
    "Product variety",
    "Bargains",
    "Local feel",
  ],
  story: {
    eyebrow: "THE LOCAL SHORTCUT",
    title: "Good value has a friendly face.",
    body: "Customers mention friendly, helpful service, plenty of variety and bargains worth discovering. Pop in for the everyday things and leave room for an unexpected find.",
    ownerMention: "Customers have also mentioned Raj by name in supplied feedback.",
  },
} as const;

export type StoreContent = typeof worldOfDiscounts;
