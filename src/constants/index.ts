// Constants for the CycleBees application

export const CONTACT_INFO = {
  PHONE: '+91 95973 12212',
  EMAIL: 'mail@cyclebees.in',
  ADDRESS: '79, Aarudhra Enclvae, Athipalayam Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035',
  POSTAL_CODE: '641035',
  STATE: 'Tamil Nadu',
  WHATSAPP_NUMBER: '919597312212'
} as const;

export const BUSINESS_INFO = {
  NAME: 'CycleBees',
  TAGLINE: 'Professional Bicycle Services',
  DESCRIPTION: 'Expert mechanics, premium repairs, bike rentals & cycling coaching. Trusted by riders across Coimbatore.',
  VISIT_FEE: '₹299',
  RATING: '4.8',
  CUSTOMERS_SERVED: '1000+',
  AVG_ARRIVAL_TIME: '~60 minutes'
} as const;

export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://www.instagram.com/ridewithcyclebees/',
  LINKEDIN: 'https://www.linkedin.com/company/cyclebees/about/',
  TWITTER: 'https://x.com/CycleBees'
} as const;

export const GEO_LOCATION = {
  LATITUDE: 11.0168,
  LONGITUDE: 76.9558,
  SERVICE_RADIUS: '25000' // in meters
} as const;

export const CLOUDINARY_CONFIG = {
  CLOUD_NAME: 'dc6t0u2j2',
  BLOG_FOLDER: 'blog'
} as const;

export const CACHE_CONFIG = {
  SERVICE_WORKER_VERSION: 'cyclebees-v1',
  IMAGE_CACHE_TTL: 60 // seconds
} as const;
