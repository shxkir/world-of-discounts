import { StoreExperience } from "@/components/store-experience";
import { worldOfDiscounts } from "@/data/world-of-discounts";

export default function Home() {
  const { business, contact, location } = worldOfDiscounts;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["GroceryStore", "LocalBusiness"],
    name: business.name,
    description: business.description,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street,
      addressLocality: location.suburb,
      addressRegion: location.region,
      postalCode: location.postalCode,
      addressCountry: location.country,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleRating,
      reviewCount: business.googleReviewCount,
      bestRating: 5,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <StoreExperience />
    </>
  );
}
