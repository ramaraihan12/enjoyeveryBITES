import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const productVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const products = [
    {
      id: 1,
      name: 'Smoothie Bowl',
      description:
        'Bowl kaya nutrisi dengan smoothie buah segar, topping granola, chia seeds, dan potongan buah pilihan. Sempurna untuk sarapan sehat atau snack bergizi.',
      image: '/images/hero-smoothie-bowl.jpg',
      gallery: ['/images/hero-smoothie-bowl.jpg', '/images/smoothie-bowl-2.jpg', '/images/smoothie-bowl-3.jpg'],
      badge: '⭐ Best Seller',
      span: 'lg:col-span-2',
    },
    {
      id: 2,
      name: 'Salad Buah',
      description:
        'Kombinasi buah-buahan segar dengan saus yogurt atau mayones premium. Segar, manis, dan menyehatkan.',
      image: '/images/salad-buah.jpg',
      gallery: ['/images/salad-buah.jpg', '/images/salad-buah-2.jpg', '/images/salad-buah-3.jpg'],
      badge: '❤️ Favorit Keluarga',
      span: '',
    },
    {
      id: 3,
      name: 'Jus Buah',
      description:
        'Jus buah 100% murni tanpa tambahan gula atau pengawet. Tersedia dalam berbagai varian rasa favorit.',
      image: '/images/jus-buah.jpg',
      gallery: ['/images/jus-buah.jpg'],
      badge: '🍹 Fresh Daily',
      span: '',
    },
    {
      id: 4,
      name: 'Sop Buah',
      description:
        'Sop buah segar dengan kuah susu yang lembut dan es serut. Kesegaran maksimal di setiap sendok.',
      image: null,
      gallery: [],
      badge: null,
      span: '',
    },
    {
      id: 5,
      name: 'Buah Potong',
      description:
        'Buah potong segar siap santap. Praktis, higienis, dan penuh vitamin untuk aktivitas harian Anda.',
      image: '/images/buah-potong.jpg',
      gallery: ['/images/buah-potong.jpg'],
      badge: null,
      span: '',
    },
  ];

  return (
    <section
      id="products"
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
          Menu <span className="text-light-orange">Favorit Kami</span>
        </motion.h2>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={productVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${product.span}`}
            >
              {/* Product Image */}
              {product.image ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md text-sm font-semibold text-purple">
                      {product.badge}
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-purple/10 to-pink/10 flex items-center justify-center">
                  <span className="text-purple/30 text-6xl font-bold">
                    {product.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* Product Info */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-purple mb-3">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;