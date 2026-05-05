import './globals.css';
import type { Metadata } from 'next';
import { Inter, Rubik, Waterfall } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });
const waterfall = Waterfall({ weight: '400', subsets: ['latin'], variable: '--font-waterfall' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tulip.hu'),
  title: 'TULIP – Egyedi menyasszonyi ruhák Magyarországon',
  description: 'Kézzel varrt, személyre szabott menyasszonyi és alkalmi ruhák. Foglalj időpontot még ma!',
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    title: 'TULIP',
    description: 'Kézzel varrt, személyre szabott menyasszonyi és alkalmi ruhák.',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: 'TULIP' }],
  },
  alternates: {
    canonical: 'https://www.tulip.hu/',
    languages: {
      'hu': 'https://www.tulip.hu/',
      'en': 'https://www.tulip.hu/en/',
      'de': 'https://www.tulip.hu/de/',
      'x-default': 'https://www.tulip.hu/',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${inter.variable} ${rubik.variable} ${waterfall.variable}`} suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="hu" href="https://www.tulip.hu/" />
        <link rel="alternate" hrefLang="en" href="https://www.tulip.hu/en/" />
        <link rel="alternate" hrefLang="de" href="https://www.tulip.hu/de/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.tulip.hu/" />
      </head>
      <body className={`${inter.className} selection:bg-brand-fuchsia selection:text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
