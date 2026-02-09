import { MapPin, Clock, Phone, Instagram, ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-beige text-purple">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Bites Fruit Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-purple/80">
              Kesegaran Alami Setiap Hari
            </p>
          </div>

          {/* Column 2: Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <a
                  href="https://wa.me/6281818193311"
                  className="text-purple/80 hover:text-light-orange transition-colors duration-200"
                >
                  0818-1819-3311
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Instagram size={20} className="flex-shrink-0 mt-1" />
                <a
                  href="https://www.instagram.com/bites.fruit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple/80 hover:text-light-orange transition-colors duration-200"
                >
                  @bites.fruit
                </a>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <a
                    href="https://maps.app.goo.gl/g3Gi6XCGvyMV5sEJ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple/80 hover:text-light-orange transition-colors duration-200"
                  >
                    Pasar Sayangan, Jl. Patimura No.58a Lantai 2
                  </a>
                </div>
                <p className="text-purple/80 text-sm pl-7">
                  Sidorejo, Kota Salatiga, Jawa Tengah 50711
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Jam Buka */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple">Jam Buka</h3>
            <div className="flex items-start space-x-2">
              <Clock size={20} className="flex-shrink-0 mt-1" />
              <span className="text-purple/80">
                Setiap Hari: 11.00 - 22.00 WIB
              </span>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple">Quick Links</h3>
            <div className="space-y-3">
              <a
                href="https://gofood.link/a/PJKgC8w"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple/80 hover:text-light-orange transition-colors duration-200"
              >
                <ShoppingBag size={20} />
                <span>GoFood</span>
              </a>
              <a
                href="https://wa.me/6281818193311"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple/80 hover:text-light-orange transition-colors duration-200"
              >
                <Phone size={20} />
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-purple/80 text-sm">
              © 2025 Bites Fruit. Semua hak cipta dilindungi.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/bites.fruit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-purple/80 hover:text-light-orange transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;