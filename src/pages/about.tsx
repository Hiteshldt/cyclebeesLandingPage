import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { BrandWatermark } from '@/components/BrandMark';
import Icon, { IconName } from '@/components/Icon';
import DownloadSection from '@/components/DownloadSection';
import { CONTACT_INFO } from '@/constants';
import { breadcrumbSchema, organizationSchema } from '@/lib/schema';

const founders = [
  {
    name: 'Guru Moorthy',
    role: 'Founder & CEO',
    image: '/founder_1_Guru Moorthy_Founder_&_CEO.webp',
    bio: 'Over 11 years as a professional cyclist and lifelong rider. Guru leads product direction and rider experience, turning first-hand rider pain into product and ops decisions.',
  },
  {
    name: 'Hitesh Gupta',
    role: 'Co-founder & CTO',
    image: '/founder_2_Hitesh_Gupta_Co_founder_&_CTO.webp',
    bio: "Tech lead who built CycleBees' platform and tracking systems. Hitesh brings product & engineering experience (including leadership roles in tech recruiting and product design) to scale the digital experience.",
  },
  {
    name: 'Babu Kumaran',
    role: 'Co-founder & Chief Mechanic Trainer',
    image: '/founder_3_Babu_Kumaran_Co_Founder_Chief_Mechanic_Trainer.webp',
    bio: '35+ years of hands-on bicycle mechanics expertise. Babu leads the CycleBees Academy and ensures every mechanic meets our quality and safety standards.',
  },
];

const values: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Quality first',
    description: 'No compromises on workmanship and parts.',
    icon: 'trophy',
  },
  {
    title: 'Customer centric',
    description: 'We design around rider needs and convenience.',
    icon: 'heart',
  },
  {
    title: 'Innovation',
    description: 'Tech and logistics create predictable, scalable service.',
    icon: 'bulb',
  },
  {
    title: 'Sustainability',
    description: 'Encouraging cycling as a greener city transport option.',
    icon: 'leaf',
  },
];

const pillars: {
  title: string;
  description: string;
  icon: IconName;
  accent: string;
}[] = [
  {
    title: 'Mission',
    description:
      'Make professional bicycle service accessible, convenient and reliable for every rider.',
    icon: 'target',
    accent: 'bg-primary text-secondary-100',
  },
  {
    title: 'Vision',
    description:
      "To be India's most trusted bicycle-service platform, expanding consistent standards of quality, training and experience city by city.",
    icon: 'telescope',
    accent: 'bg-secondary-100 text-primary',
  },
  {
    title: 'Our promise',
    description:
      'Transparent pricing, certified technicians, and a service experience that puts rider safety and satisfaction first.',
    icon: 'handshake',
    accent: 'bg-primary text-secondary-100',
  },
];

const AboutPage: React.FC = () => (
  <>
    <Seo
      title="About CycleBees — Our Story & Team"
      description="Built by riders, backed by repair, powered by tech. Meet the founders behind CycleBees and the mission to make professional bicycle service reliable across India."
      path="/about"
      jsonLd={[
        organizationSchema,
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]),
      ]}
    />

    <Layout>
        <PageHero
          eyebrow="Our story"
          title="About CycleBees"
          lead="Built by riders. Backed by repair. Powered by tech."
        />

      {/* Our Story */}
      <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-6">
                Our Story
              </h2>
              <div className="space-y-4">
                <p className="text-base text-secondary-600 leading-relaxed">
                  Founded in Coimbatore to solve bicycle service challenges,
                  CycleBees combines expert mechanics with smart technology. Our
                  platform enables doorstep repairs, bike leasing, and on-road
                  support through a seamless app experience.
                </p>
                <h3 className="text-lg font-bold text-secondary-100 mb-2">
                  Our Mission
                </h3>
                <p className="text-base text-secondary-600 leading-relaxed">
                  Delivering professional bicycle services with certified
                  technicians, genuine parts, and transparent pricing. From
                  doorstep repairs to premium rentals — designed so riders spend
                  more time riding. We follow{' '}
                  <a
                    href="https://www.sheldonbrown.com/maintenance.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-100 font-medium underline hover:text-primary transition-colors duration-200"
                  >
                    industry-standard maintenance practices
                  </a>{' '}
                  for optimal bicycle care.
                </p>
                <h3 className="text-lg font-bold text-secondary-100 mb-2">
                  The Team
                </h3>
                <p className="text-base text-secondary-600 leading-relaxed">
                  Built by a professional cyclist (Guru), veteran mechanic
                  (Babu), and tech expert (Hitesh) who combined their expertise
                  to revolutionize bicycle service in India.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative max-w-[350px] lg:max-w-[450px]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary-100/20 blur-2xl rounded-full transform scale-110"
                  aria-hidden="true"
                ></div>
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-primary/20">
                  <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-secondary-100/10 rounded-xl overflow-hidden">
                    <Image
                      src="/cyclebees_Contact_Page_Image_1.webp"
                      alt="A CycleBees mechanic servicing a customer bicycle in Coimbatore"
                      width={450}
                      height={320}
                      sizes="(max-width: 1024px) 350px, 450px"
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-8 my-3 bg-gradient-to-br from-secondary-300/20 to-primary/10 border-t border-light-yellow border-b border-light-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The team"
            title="Meet Our Founders"
            lead="The people behind CycleBees."
            className="mb-10"
          />

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((founder) => (
              <li
                key={founder.name}
                className="bg-white rounded-lg p-6 text-center shadow-lg border border-primary/10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-primary/20 ring-4 ring-primary/20">
                  <Image
                    src={founder.image}
                    alt={`${founder.name}, ${founder.role} at CycleBees`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base font-bold text-secondary-100 mb-1">
                  {founder.name}
                </h3>
                <p className="text-secondary-100 bg-primary inline-block px-2 py-0.5 rounded font-semibold text-xs mb-3">
                  {founder.role}
                </p>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {founder.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission, vision & promise */}
      <section className="py-8 my-3 bg-white border-t border-light-yellow border-b border-light-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What drives us"
            title="Our mission, vision & promise"
            className="mb-10"
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="bg-gradient-to-br from-primary/5 to-secondary-100/5 rounded-xl p-6 text-center shadow-lg border border-primary/20 hover:border-primary/40 transition-colors duration-300"
              >
                <span
                  className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${pillar.accent}`}
                >
                  <Icon name={pillar.icon} className="w-7 h-7" />
                </span>
                <h3 className="text-lg font-bold text-secondary-100 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {pillar.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden py-10 my-3 bg-gradient-to-br from-secondary-100 to-secondary-400 border-t border-light-yellow border-b border-light-yellow">
        <BrandWatermark className="-left-16 -top-12 w-72 h-72 text-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our values"
            title="What We Stand For"
            lead="The principles that guide everything we do."
            tone="light"
            className="mb-10"
          />

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <li
                key={value.title}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-primary text-secondary-100">
                  <Icon name={value.icon} className="w-6 h-6" />
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-8 my-3 bg-gradient-to-br from-secondary-300/20 to-primary/10 border-t border-light-yellow border-b border-light-yellow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-secondary-100 mb-3">
            Work with us / Partnerships
          </h2>
          <p className="text-base text-secondary-600 mb-6 max-w-4xl mx-auto">
            Want CycleBees at your hotel, event or corporate campus? Interested
            in franchise or academy partnerships? Get in touch via the Contact
            page or email {CONTACT_INFO.EMAIL} — we&apos;re actively building B2B
            programs to scale access to quality bike service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-secondary-100 px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-md text-base"
            >
              <Icon name="handshake" className="w-5 h-5" />
              Contact for Partnerships
            </Link>
            <a
              href={`mailto:${CONTACT_INFO.EMAIL}?subject=${encodeURIComponent('Partnership enquiry')}`}
              className="inline-flex items-center justify-center gap-2 bg-secondary-100 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-secondary-100/90 transition-colors duration-200 shadow-md text-base"
            >
              <Icon name="mail" className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <DownloadSection />
    </Layout>
  </>
);

export default AboutPage;
