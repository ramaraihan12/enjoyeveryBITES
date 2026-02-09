import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Video = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
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

  const videos = [
    {
      id: 1,
      url: 'https://www.instagram.com/reel/DQWm2Bikome/embed?autoplay=1&mute=1',
      title: 'Behind the Scenes',
      fallbackUrl: 'https://www.instagram.com/reel/DQWm2Bikome/',
      isEmbeddable: true,
    },
    {
      id: 2,
      url: 'https://www.instagram.com/reel/DUBAF-_kvFa/embed?autoplay=1&mute=1',
      title: 'Kata Mereka Tentang Bites',
      fallbackUrl: 'https://www.instagram.com/reel/DUBAF-_kvFa/',
      isEmbeddable: true,
    },
  ];

  return (
    <section
      id="video"
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
          Lihat Proses <span className="text-light-orange">Pembuatan Kami</span>
        </motion.h2>

        {/* Videos Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Video Embed or Placeholder */}
              {video.isEmbeddable ? (
                <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] bg-gray-100">
                  <iframe
                    src={video.url}
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    allow="autoplay; encrypted-media; fullscreen"
                    loading="lazy"
                    title={`Video ${video.title}`}
                  />
                </div>
              ) : (
                <a
                  href={video.fallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] bg-gradient-to-br from-purple/10 to-light-orange/10 flex items-center justify-center group hover:from-purple/20 hover:to-light-orange/20 transition-all duration-300"
                >
                  <div className="text-center space-y-6 p-8">
                    {/* Play Button */}
                    <div className="w-24 h-24 mx-auto bg-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-12 h-12 text-white ml-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    
                    {/* Text */}
                    <div>
                      <h4 className="text-2xl font-bold text-purple mb-2">
                        Lihat Video di Instagram
                      </h4>
                      <p className="text-purple/80">
                        Klik untuk menonton "{video.title}"
                      </p>
                    </div>
                  </div>
                </a>
              )}

              {/* Video Title */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-purple mb-3">
                  {video.title}
                </h3>

                {/* Fallback Link for embeddable videos */}
                {video.isEmbeddable && (
                  <a
                    href={video.fallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple hover:text-light-orange font-medium transition-colors duration-200"
                  >
                    <span>Lihat di Instagram</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Video;