'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

// Blog post data remains in Hungarian — content exclusion per spec
const blogPosts = [
  { id: 'divatbemutato-a-jegen', title: 'Divatbemutató a jégen', subtitle: 'Oszoli Nikolett új kollekciót mutat be Székesfehérváron', date: '2026. március 8.', excerpt: 'A székesfehérvári MET Aréna ad otthont április 18-án egy rendhagyó divatbemutatónak, amely eltér a hagyományos kifutós formátumtól.', href: '/blog/divatbemutato-a-jegen' },
  { id: 'tulip-szuletese-interju', title: 'A Tulip születése', subtitle: 'Interjú Oszoli Nikolettel, a magyar divat új hangjával', date: '2026. január 28.', excerpt: 'Vannak alkotók, akiknek a munkája mögött nem trendkövetés, hanem egy hosszú belső út áll.', href: '/blog/tulip-szuletese-interju' },
  { id: 'csipke-csillogas', title: 'Csipke, csillogás', subtitle: 'Egy székesfehérvári tervező, aki újragondolja a magyar divatot', date: '2026. január 13.', excerpt: 'A magyar ruhaipar hosszú ideje keresi az új egyensúlyt a hagyomány, a nemzetközi trendek és a fenntartható működés között.', href: '/blog/csipke-csillogas' },
  { id: 'divat-megujulas', title: 'Divat és megújulás', subtitle: 'Székesfehérvári tervező, aki újragondolja a magyar divatot', date: '2026. január', excerpt: 'A divat jövője nem kampányokban, hanem rendszerekben dől el.', href: '/blog/divat-megujulas' },
];

export default function BlogPage() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
            {t('blog.heading')}
          </h1>
          <p className="text-5xl font-waterfall font-light text-brand-fuchsia max-w-2xl mx-auto leading-relaxed text-center">
            {t('blog.tagline')}
          </p>
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify mt-8">
            {t('blog.intro')}
          </p>
        </div>

        {/* Article cards: titles/excerpts remain in Hungarian per spec */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group bg-background border border-border p-8 transition-all hover:shadow-2xl hover:border-brand-fuchsia"
            >
              <article>
                <time className="text-sm font-rubik text-foreground/60 mb-4 block">{post.date}</time>
                <h2 className="text-2xl md:text-3xl font-inter font-light text-[#d11133] uppercase tracking-wider mb-3 group-hover:text-brand-fuchsia transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg font-rubik font-light text-brand-fuchsia italic mb-4">{post.subtitle}</p>
                <p className="text-base font-rubik font-light text-foreground leading-relaxed text-justify">{post.excerpt}</p>
                <div className="mt-6 flex items-center text-brand-fuchsia font-rubik font-medium text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  {t('blog.read_more')}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
