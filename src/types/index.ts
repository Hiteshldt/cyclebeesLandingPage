// Common types for the CycleBees application

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ServiceBookingFormData {
  name: string;
  phone: string;
  serviceType: string;
  bikeType: string;
  preferredDateTime: string;
  address: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  /** Human-readable date shown in the UI, e.g. "Aug 5, 2025". */
  date: string;
  /**
   * ISO 8601 (YYYY-MM-DD) form of `date`. Required because schema.org
   * `datePublished` and `<time dateTime>` both need a machine-readable value —
   * the display string was previously emitted into JSON-LD, which Google
   * rejects as an invalid date.
   */
  isoDate: string;
  category: string;
  readTime: string;
  author: string;
}

export interface RepairService {
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}