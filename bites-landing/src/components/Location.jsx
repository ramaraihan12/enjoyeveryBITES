import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock } from 'lucide-react';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="location"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple text-center mb-12 sm:mb-16"
        >
          Lokasi & <span className="text-light-orange">Jam Buka</span>
        </motion.h2>

        {/* Content Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Google Maps Embed */}
          <motion.div
            variants={mapVariants}
            className="w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2916969343437!2d110.5037723!3d-7.3210951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a79006bcf0075%3A0xc60b98cf07d9ef5e!2sBites%20Fruit%20(Smoothies%20Bowl%2C%20Salad%20Buah%20Potong%2C%20Jus%20Botol%20%26%20Sop%20Salatiga)!5e0!3m2!1sen!2sid!4v1770608909572!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta lokasi Bites Fruit"
              className="w-full h-full"
            />
          </motion.div>

          {/* Location Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin size={24} className="text-purple" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-purple mb-2">
                    Alamat
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Pasar Sayangan, Jl. Patimura No.58a Lantai 2,<br />
                    Sidorejo, Kota Salatiga, Jawa Tengah 50711
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Bites Fruit (Smoothies Bowl, Salad Buah Potong, Jus Botol & Sop)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock size={24} className="text-purple" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-purple mb-2">
                    Jam Buka
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Buka Setiap Hari, 11.00 - 22.00 WIB
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              href="https://maps.app.goo.gl/g3Gi6XCGvyMV5sEJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-purple hover:bg-purple/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Buka lokasi di Google Maps"
            >
              <MapPin size={24} />
              <span>Buka di Maps</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;