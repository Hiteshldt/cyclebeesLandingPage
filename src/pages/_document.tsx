import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logowhite.png" />
        <link rel="apple-touch-icon" href="/logo.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.webp" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logowhite.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logowhite.png" />
        
        {/* Critical resource preloading for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/logowhite.png" as="image" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="CycleBees - Professional Bicycle Services" />
        <meta property="og:description" content="Expert bicycle mechanics, premium repairs, bike rentals & cycling coaching. Trusted by riders across Coimbatore." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero-app.webp" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CycleBees - Professional Bicycle Services" />
        <meta name="twitter:description" content="Expert bicycle mechanics, premium repairs, bike rentals & cycling coaching. Trusted by riders across Coimbatore." />
        <meta name="twitter:image" content="/hero-app.webp" />
        
        {/* Geo-location tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0168;76.9558" />
        <meta name="ICBM" content="11.0168, 76.9558" />
        
        {/* Robots and indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CycleBees",
              "description": "Professional bicycle services at your doorstep. Expert repairs, rentals, and maintenance in Coimbatore.",
              "url": "https://cyclebees.com",
              "telephone": "+91-95973-12212",
              "email": "mail@cyclebees.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "79, Aarudhra Enclvae, Athipalayam Rd, Saravanampatti",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN",
                "postalCode": "641035"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.0168,
                "longitude": 76.9558
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "06:00",
                  "closes": "22:00"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 11.0168,
                  "longitude": 76.9558
                },
                "geoRadius": "25000"
              },
              "priceRange": "₹299-₹5000",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000",
                "bestRating": "5"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bicycle Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bicycle Repair",
                      "description": "Professional bicycle repair and maintenance services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bicycle Rental",
                      "description": "Premium bicycle rental services"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CycleBees",
              "url": "https://cyclebees.com",
              "logo": "https://cyclebees.com/logo.webp",
              "description": "Professional bicycle services company based in Coimbatore, Tamil Nadu.",
              "founder": [
                {
                  "@type": "Person",
                  "name": "Guru Moorthy",
                  "jobTitle": "Founder & CEO"
                },
                {
                  "@type": "Person", 
                  "name": "Hitesh Gupta",
                  "jobTitle": "Co-founder & CTO"
                },
                {
                  "@type": "Person",
                  "name": "Babu Kumaran", 
                  "jobTitle": "Co-founder & Chief Mechanic Trainer"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/ridewithcyclebees/",
                "https://www.linkedin.com/company/cyclebees/about/",
                "https://x.com/CycleBees"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </Html>
  )
}
