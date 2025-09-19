import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RecaptchaProvider } from '@/contexts/RecaptchaContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: 'Ez Innovations - Leading Software Development Company in South Africa',
    template: '%s | Ez Innovations'
  },
  description: 'Professional software development company in South Africa specializing in custom software solutions, mobile app development, web development, and digital transformation services. 5+ years experience, 100+ projects delivered.',
  keywords: [
    'software development South Africa',
    'custom software development',
    'mobile app development',
    'web development services',
    'digital transformation',
    'Cape Town software company',
    'React development',
    'Next.js development',
    'Node.js development',
    'Python development',
    'software consulting',
    'agile development',
    'MVP development',
    'enterprise software',
    'startup software solutions'
  ].join(', '),
  authors: [{ name: 'Ez Innovations', url: 'https://www.ezinnovations.co.za' }],
  creator: 'Ez Innovations',
  publisher: 'Ez Innovations',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.ezinnovations.co.za',
    siteName: 'Ez Innovations',
    title: 'Ez Innovations - Leading Software Development Company in South Africa',
    description: 'Professional software development services in South Africa. Custom software, mobile apps, web development, and digital transformation solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ez Innovations - Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ez Innovations - Software Development Company South Africa',
    description: 'Professional custom software development, mobile apps, and web development services in South Africa.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.ezinnovations.co.za',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ez Innovations',
    alternateName: 'Ez Innovations (Pty) Ltd',
    url: 'https://www.ezinnovations.co.za',
    logo: 'https://www.ezinnovations.co.za/logo.png',
    description: 'Professional software development company in South Africa specializing in custom software solutions, mobile app development, web development, and digital transformation services.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cape Town',
      addressCountry: 'ZA'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+27-84-807-8024',
      contactType: 'customer service',
      email: 'info@ezinnovations.co.za',
      availableLanguage: ['English', 'Afrikaans']
    },
    sameAs: [
      'https://www.linkedin.com/company/ez-innovations',
      'https://github.com/ez-innovations'
    ],
    foundingDate: '2019',
    numberOfEmployees: '10-50',
    serviceArea: {
      '@type': 'Country',
      name: 'South Africa'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            description: 'Tailored software solutions for businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Cross-platform mobile application development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Modern responsive web application development'
          }
        }
      ]
    }
  }

  return (
    <html lang="en-ZA" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://www.ezinnovations.co.za" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="geo.region" content="ZA" />
        <meta name="geo.placename" content="Cape Town" />
        <meta name="geo.position" content="-33.9249;18.4241" />
        <meta name="ICBM" content="-33.9249, 18.4241" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <RecaptchaProvider>
          {children}
        </RecaptchaProvider>
      </body>
    </html>
  )
}