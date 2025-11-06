import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1702316/pexels-photo-1702316.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
          Kézzel varrt menyasszonyi ruhák<br />
          <span className="text-tulip-red">egyedi tervezéssel</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
          Minden ruha egy történet. A tiéd velünk kezdődik.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/kapcsolat"
            className="bg-tulip-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#a40e25] transition-all hover:scale-105 shadow-lg"
          >
            Időpontfoglalás
          </Link>
          <Link
            href="/portfolio"
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-tulip-black transition-all hover:scale-105"
          >
            Kollekció megtekintése
          </Link>
        </div>
      </div>
    </section>
  );
}
