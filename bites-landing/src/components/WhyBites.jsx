import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Apple, Leaf, Zap } from 'lucide-react';

const WhyBites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cards = [
    {
      icon: <Apple size={48} className="text-purple" />,
      title: '100% Buah Segar',
      description:
        'Kami hanya menggunakan buah-buahan pilihan yang segar dan berkualitas tinggi. Tanpa pengawet, murni kesegaran alami.',
    },
    {
      icon: <Leaf size={48} className="text-purple" />,
      title: 'Sehat & Bergizi',
      description:
        'Penuh vitamin, serat, dan nutrisi penting untuk tubuh Anda. Pilihan sempurna untuk gaya hidup sehat dan aktif.',
    },
    {
      icon: <Zap size={48} className="text-purple" />,
      title: 'Praktis & Lezat',
      description:
        'Siap santap kapan saja. Cita rasa yang menggugah selera, praktis dibawa ke mana saja, dan memuaskan setiap saat.',
    },
  ];

  return (
    <section
      id="why-bites"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-beige"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple text-center mb-12 sm:mb-16"
        >
          Kenapa Memilih <span className="text-light-orange">Bites?</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">{card.icon}</div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-purple text-center mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBites;