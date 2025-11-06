import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Tulip Couture & Shop – Egyedi menyasszonyi ruhák Magyarországon',
  description: 'Kézzel varrt, személyre szabott menyasszonyi és alkalmi ruhák. Foglalj időpontot még ma!',
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    title: 'Tulip Couture & Shop',
    description: 'Kézzel varrt, személyre szabott menyasszonyi és alkalmi ruhák.',
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Tulip Couture & Shop',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
