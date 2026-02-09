# Design: Bites Fruit Landing Page

## Context

Bites Fruit adalah UMKM di Salatiga yang menjual produk olahan buah (smoothie bowls, salad buah, jus segar, dll). Saat ini bisnis hanya memiliki kehadiran di Instagram dan GoFood tanpa website profesional. Target pasar adalah pelanggan lokal Salatiga yang mencari makanan sehat dan praktis.

**Current State:**
- Tidak ada website atau landing page
- Produk dipromosikan melalui Instagram
- Pemesanan melalui GoFood dan WhatsApp manual
- Aset foto tersedia di direktori Assets_Foto/

**Constraints:**
- Mobile-first design (prioritas 375px-428px)
- Bundle size harus < 500KB
- Loading performance harus optimal (60fps animations)
- Bahasa: Indonesia dengan tone profesional namun hangat
- Tidak memerlukan backend/database (static site)

**Stakeholders:**
- Owner Bites Fruit
- Pelanggan UMKM Salatiga
- Pengunjung mobile dan desktop

## Goals / Non-Goals

**Goals:**
- Membuat landing page modern yang meningkatkan konversi penjualan
- Menampilkan produk dengan visual yang menarik dan profesional
- Mempermudah pelanggan melakukan pemesanan via WhatsApp dan GoFood
- Optimasi performa untuk loading cepat di mobile dan desktop
- SEO-friendly untuk visibilitas di search engine lokal
- Animasi smooth yang engaging tanpa mengorbankan performa

**Non-Goals:**
- Implementasi sistem login/akun pengguna
- Backend API atau database
- E-commerce checkout (menggunakan GoFood/WhatsApp)
- Multi-language support
- Admin dashboard untuk konten management

## Decisions

### 1. Framework: React 18 + Vite (bukan CRA)
**Rationale:**
- Vite lebih cepat untuk development dan production build
- Better HMR (Hot Module Replacement) untuk development experience yang lebih smooth
- Smaller bundle size secara default
- Modern ES modules support

**Alternatives considered:**
- Create React App: Lebih berat, HMR lebih lambat
- Next.js: Overkill untuk static landing page, tidak memerlukan SSR/SSG features

### 2. Styling: Tailwind CSS (bukan CSS modules atau styled-components)
**Rationale:**
- Utility-first approach mempercepat development
- Built-in responsive design system
- Custom colors mudah dikonfigurasi
- Smaller CSS bundle setelah purging

**Alternatives considered:**
- CSS Modules: Lebih verbose, tidak ada built-in responsive utilities
- Styled-components: Runtime overhead, bundle size lebih besar

### 3. Animation: Framer Motion (bukan CSS animations saja)
**Rationale:**
- Declarative API yang mudah digunakan
- Scroll-triggered animations built-in (`useInView`)
- Better performance dengan hardware acceleration
- Gesture support jika diperlukan di masa depan

**Alternatives considered:**
- CSS animations: Kurang powerful untuk scroll-triggered animations
- GSAP: Lebih berat, overkill untuk kebutuhan ini

### 4. Icons: Lucide React (bukan Font Awesome atau Material UI)
**Rationale:**
- Tree-shakable (hanya icon yang digunakan masuk bundle)
- Consistent stroke width dan style
- Modern dan clean look
- Lebih kecil daripada icon libraries lainnya

**Alternatives considered:**
- Font Awesome: Bundle size besar, tidak tree-shakable
- Material UI Icons: Bundle size lebih besar, style kurang match dengan brand

### 5. Image Loading: Lazy loading dengan Intersection Observer
**Rationale:**
- Mengurangi initial load time
- Menghemat bandwidth untuk user yang tidak scroll ke bawah
- Native browser support modern (Chrome, Firefox, Safari)

**Alternatives considered:**
- Load semua images sekaligus: Lebih cepat untuk user yang scroll, tapi initial load lambat
- Custom lazy loading library: Overkill, native API sudah cukup

### 6. Color Palette: Custom Tailwind config dengan brand colors
**Rationale:**
- Warna spesifik untuk brand consistency
- Easy maintenance dengan centralized config
- Automatic generation untuk dark mode jika diperlukan nanti

**Palette:**
- Beige (#fdf8e1): Background
- Purple (#54388f): Primary text/CTA
- Light Orange (#ffce88): Accents
- Pink (#fd6eac): Highlights
- Bright Orange (#f7b12b): Secondary CTA
- Red (#d52441): Urgency/Special

### 7. Video Embeds: Instagram iframe (bukan custom video player)
**Rationale:**
- Source videos dari Instagram (sesuai requirement)
- Lebih mudah maintenance (Instagram handle embed)
- Otomatis update jika ada perubahan di Instagram

**Alternatives considered:**
- Custom video player: Memerlukan download dan hosting video, lebih kompleks
- YouTube embed: Videos tidak ada di YouTube

### 8. Deployment Strategy: Vercel (atau Netlify)
**Rationale:**
- Automatic HTTPS
- CDN global untuk performa
- Easy deployment dari Git
- Zero config untuk Vite builds

**Alternatives considered:**
- Self-hosted: Lebih kompleks, perlu maintenance server
- GitHub Pages: Kurang performant, no edge caching

## Risks / Trade-offs

### Risk 1: Performance degradation dengan terlalu banyak animations
**Mitigation:** 
- Gunakan Framer Motion dengan `transform` dan `opacity` (GPU-accelerated)
- Test dengan Lighthouse performance audit
- Limit animations pada viewport pertama

### Risk 2: Large image sizes melambatkan loading
**Mitigation:**
- Compress images ke <200KB
- Convert ke WebP dengan JPG fallback
- Lazy loading untuk images di bawah fold
- Use `loading="lazy"` attribute

### Risk 3: Mobile-first design kurang optimal pada desktop
**Mitigation:**
- Design dengan mobile-first approach, lalu enhance untuk desktop
- Test pada 3 breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop)
- Use Tailwind responsive classes untuk adjustments

### Risk 4: Instagram embeds bisa berubah atau dihapus
**Mitigation:**
- Add fallback link "Lihat di Instagram"
- Monitor secara berkala untuk broken embeds
- Consider self-hosting critical videos jika Instagram tidak stabil

### Risk 5: Bundle size melebihi 500KB dengan dependencies
**Mitigation:**
- Code splitting dengan dynamic imports untuk heavy components
- Tree-shaking untuk libraries (Framer Motion, Lucide React)
- Analyze bundle dengan `npm run build` dan bundle analyzer
- Minimize第三方依赖

## Migration Plan

### Deployment Steps:
1. **Local Development:**
   - Initialize Vite + React project
   - Install dependencies
   - Configure Tailwind dengan custom colors
   - Setup folder structure
   - Copy dan optimize images ke public/images/

2. **Build Components:**
   - Implement components secara berurutan: Header → Hero → Why Bites → Location → Products → Video → Contact CTA → Footer
   - Add animations dengan Framer Motion
   - Test responsiveness pada setiap breakpoint

3. **Optimization:**
   - Compress dan convert images
   - Minify CSS dan JS (Vite otomatis)
   - Run Lighthouse audit (target: 90+ score)
   - Test performa di mobile device real

4. **Deployment:**
   - Push ke Git repository
   - Deploy ke Vercel/Netlify
   - Setup custom domain jika diperlukan
   - Enable HTTPS dan CDN

### Rollback Strategy:
- Git history untuk version control
- Vercel/Netlify deployments bisa di-rollback dengan 1-click
- Keep production backup jika ada critical changes

## Open Questions

1. **Google Maps Integration:** Apakah perlu interactive map atau static image cukup?
   - *Rekomendasi:* Interactive embed untuk better UX, tapi perlu API key untuk production

2. **Video Gallery:** Apakah perlu video testimonials tambahan di luar Instagram?
   - *Rekomendasi:* Mulai dengan 2 Instagram embeds, tambah jika user engagement tinggi

3. **Contact Form:** Apakah perlu contact form atau cukup CTAs ke WhatsApp/GoFood?
   - *Rekomendasi:* Cukup CTAs langsung ke WhatsApp/GoFood untuk simplicity

4. **Social Proof:** Apakah perlu customer reviews/testimonials section?
   - *Rekomendasi:* Video testimonials sudah mencakup social proof, tidak perlu section tambahan

5. **Newsletter:** Apakah perlu email subscription untuk promosi?
   - *Rekomendasi:* Out of scope untuk MVP, bisa ditambahkan di phase berikutnya