import { motion } from 'framer-motion';
import { ShoppingBag, ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-smoothie-bowl.jpg"
          alt="Smoothie Bowl"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple/80 via-purple/60 to-beige/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Rasakan Kesegaran Alami
            <br />
            <span className="text-light-orange">Bites Fruit</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Pilihan buah segar, salad lezat, dan smoothie bowl kaya nutrisi.
            Semua dibuat dengan cinta untuk kebahagiaan Anda!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            {/* Primary CTA - GoFood */}
            <a
              href="https://gofood.link/a/PJKgC8w"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-bright-orange hover:bg-light-orange text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Pesan via GoFood"
            >
              <ShoppingBag size={24} />
              <span>Pesan via GoFood</span>
            </a>

            {/* Secondary CTA - Scroll to Products */}
            <a
              href="#products"
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
              aria-label="Lihat menu kami"
            >
              <span>Lihat Menu</span>
              <ArrowDown size={24} className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm">Scroll ke bawah</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;