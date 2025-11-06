import { Sparkles, Scissors, Gift } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: 'Tervezés',
      description: 'Egyedi elképzeléseid alapján alkotunk. Közösen tervezzük meg álmaid ruháját, minden részletet figyelembe véve.',
    },
    {
      icon: Scissors,
      title: 'Próba',
      description: 'Többszöri próba biztosítja a tökéletes illeszkedést. Minden részletet finomítunk, hogy tökéletesen érezd magad.',
    },
    {
      icon: Gift,
      title: 'Átadás',
      description: 'A nagy napodra készen állsz. Ruhádat gondosan elkészítjük és időben átadjuk, hogy minden tökéletes legyen.',
    },
  ];

  return (
    <section className="py-20 bg-tulip-light-gray dark:bg-tulip-dark-gray transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-tulip-black dark:text-white mb-4">
            Szolgáltatásaink
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Végigkísérünk az út minden lépésén, az első szkicctől a nagy napig
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-tulip-black rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-tulip-red/10 dark:bg-tulip-red/20 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-tulip-red" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-tulip-black dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
