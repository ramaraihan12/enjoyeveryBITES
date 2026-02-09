# Bites Fruit Landing Page

Website landing page untuk UMKM Bites Fruit yang menjual smoothie bowl, salad buah, jus buah, sop buah, dan buah potong segar di Salatiga.

## 🌟 Fitur

- **Hero Section**: Headline menarik dengan background image dan CTA buttons
- **Kenapa Bites**: Menampilkan value proposition (Fresh, Healthy, Convenient)
- **Lokasi**: Google Maps embed dengan informasi alamat dan jam buka
- **Produk**: Katalog produk dengan gambar dan deskripsi
- **Video Gallery**: Embed video Instagram
- **Kontak**: WhatsApp dan GoFood CTA
- **Responsive Design**: Optimasi untuk desktop, tablet, dan mobile
- **Smooth Animations**: Animasi scroll menggunakan Framer Motion

## 🚀 Teknologi

- **React 19.2.0** - UI Framework
- **Vite 7.3.1** - Build Tool
- **Tailwind CSS 4.1.11** - Styling
- **Framer Motion 12.23.24** - Animasi
- **Lucide React 0.469.0** - Icons

## 📦 Instalasi

```bash
# Install dependencies
npm install
```

## 🚀 Menjalankan Server

### Cara 1: Menggunakan File Batch (Windows - Paling Mudah)

**Start Server:**
- Double-click file `start.bat`
- Atau ketik di terminal: `start.bat`

Server akan berjalan di:
- **Local**: http://localhost:5173
- **Network**: http://192.168.1.92:5173 (untuk akses dari HP di WiFi yang sama)

**Stop Server:**
- Double-click file `stop.bat`
- Atau ketik di terminal: `stop.bat`
- Atau tekan `Ctrl+C` di terminal server

### Cara 2: Menggunakan NPM Commands

```bash
# Run development server (localhost only)
npm run dev

# Run development server (accessible from mobile)
npm run dev -- --host

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Desain

### Color Palette
- **Primary Purple**: `#54388f`
- **Light Orange**: `#f4c369`
- **Bright Orange**: `#f5b942`
- **Pink**: `#eb84b0`
- **Beige**: `#fdf8e1`

## 📁 Struktur Proyek

```
bites-landing/
├── public/
│   └── images/          # Aset gambar
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── WhyBites.jsx
│   │   ├── Location.jsx
│   │   ├── Products.jsx
│   │   ├── Video.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── start.bat            # File batch untuk start server (Windows)
├── stop.bat             # File batch untuk stop server (Windows)
├── index.html           # HTML template
├── package.json
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## 🔗 Links Penting

- **Instagram**: [@bites.fruit](https://www.instagram.com/bites.fruit)
- **GoFood**: [https://gofood.link/a/PJKgC8w](https://gofood.link/a/PJKgC8w)
- **WhatsApp**: +62 818-1819-3311
- **Lokasi**: Pasar Sayangan, Jl. Patimura No.58a Lantai 2, Sidorejo, Kota Salatiga, Jawa Tengah 50711

## 📝 OpenSpec Change

Proyek ini dibuat menggunakan OpenSpec workflow dengan change name: `bites-fruit-landing-page`

Artifacts yang dibuat:
- `proposal.md` - Proposal change
- `design.md` - Desain sistem
- `specs/` - Spesifikasi untuk setiap komponen
- `tasks.md` - Daftar tasks implementasi

## 📄 Lisensi

© 2025 Bites Fruit. Semua hak cipta dilindungi.