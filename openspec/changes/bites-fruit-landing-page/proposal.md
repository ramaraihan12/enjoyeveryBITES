# Proposal: Bites Fruit Landing Page

## Why

Bites Fruit UMKM di Salatiga membutuhkan website profesional untuk meningkatkan visibilitas bisnis online dan mempermudah pelanggan melakukan pemesanan melalui GoFood dan WhatsApp. Website ini akan memperkuat brand, menampilkan produk secara menarik, dan meningkatkan konversi penjualan di era digital.

## What Changes

- Membuat landing page modern dengan React 18 + Vite untuk Bites Fruit
- Implementasi desain mobile-first dengan Tailwind CSS
- Menampilkan 8 section: Header, Hero, Why Bites, Location & Hours, Products, Video, Contact CTA, dan Footer
- Integrasi animasi smooth dengan Framer Motion untuk pengalaman user yang engaging
- Optimasi gambar dan performa untuk loading cepat (60fps)
- Integrasi CTAs untuk WhatsApp (0818-1819-3311) dan GoFood
- SEO optimization dengan meta tags yang proper
- Responsive design untuk mobile (375px-428px), tablet (768px), dan desktop (1024px+)

## Capabilities

### New Capabilities
- `header-navigation`: Sticky header dengan logo, hamburger menu mobile, dan smooth scroll navigation
- `hero-section`: Full viewport hero section dengan CTA buttons dan background image
- `value-proposition`: 3 cards menjelaskan keunggulan Bites Fruit (100% buah segar, sehat & bergizi, praktis & lezat)
- `location-display`: Informasi lokasi Pasar Sayangan Salatiga dengan jam operasional dan Google Maps integration
- `product-catalog`: Showcase 5 produk (Smoothie Bowl, Salad Buah, Jus Buah, Sop Buah, Buah Potong) dengan gallery images
- `video-gallery`: 2 video embed dari Instagram (process video dan influencer testimonial)
- `contact-actions`: Prominent CTAs untuk WhatsApp dan GoFood ordering
- `footer-component`: Footer 4-column dengan info kontak, jam buka, dan quick links

### Modified Capabilities
None

## Impact

**Affected Systems:**
- New standalone React/Vite application (no existing system dependencies)
- New deployment target (Vercel/Netlify)

**Dependencies:**
- React 18.2.0
- Vite 5.0.0
- Tailwind CSS 3.3.5
- Framer Motion 10.16.4
- Lucide React 0.294.0

**External Integrations:**
- WhatsApp API (wa.me link)
- GoFood integration link
- Google Maps embed
- Instagram video embeds

**Performance Requirements:**
- Bundle size < 500KB
- Images optimized to <200KB
- 60fps animations
- Mobile-first responsive design