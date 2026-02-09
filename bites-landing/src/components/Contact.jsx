import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-r from-purple via-purple to-pink"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Siap Menikmati <span className="text-light-orange">Kesegaran Bites?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/90 mb-8"
          >
            Pesan sekarang dan rasakan perbedaannya!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6281818193311"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20BA4F] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg min-h-[48px]"
              aria-label="Chat di WhatsApp"
            >
              <MessageCircle size={24} />
              <span>Chat Langsung</span>
            </a>

            {/* GoFood Button */}
            <a
              href="https://gofood.link/a/PJKgC8w"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center space-x-2 bg-bright-orange hover:bg-[#e5a01b] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg min-h-[48px]"
              aria-label="Pesan via GoFood"
            >
              <ShoppingBag size={24} />
              <span>Pesan Sekarang</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;