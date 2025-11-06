import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPreview() {
  const portfolioItems = [
    {
      title: 'Klasszikus Elegancia',
      category: 'Menyasszonyi',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Modern Romance',
      category: 'Menyasszonyi',
      image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Vintage Charm',
      category: 'Alkalmi',
      image: 'https://images.pexels.com/photos/1093242/pexels-photo-1093242.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-tulip-black transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-tulip-black dark:text-white mb-4">
            Portfólió
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tekintsd meg egyedi alkotásainkat és inspirálódj
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-tulip-red font-semibold mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-heading font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block bg-tulip-red text-white px-8 py-3 rounded-md font-semibold hover:bg-[#a40e25] transition-colors"
          >
            Összes munka megtekintése
          </Link>
        </div>
      </div>
    </section>
  );
}
