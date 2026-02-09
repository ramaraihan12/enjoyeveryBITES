## 1. Project Setup

- [ ] 1.1 Initialize Vite + React project with `npm create vite@latest bites-landing -- --template react`
- [ ] 1.2 Navigate to project directory with `cd bites-landing`
- [ ] 1.3 Install base dependencies with `npm install`
- [ ] 1.4 Install Tailwind CSS dependencies with `npm install -D tailwindcss postcss autoprefixer`
- [ ] 1.5 Install additional dependencies with `npm install framer-motion lucide-react`
- [ ] 1.6 Initialize Tailwind config with `npx tailwindcss init -p`
- [ ] 1.7 Update package.json scripts to include dev, build, and preview

## 2. Configuration

- [ ] 2.1 Configure Tailwind with custom color palette (beige, purple, light-orange, pink, bright-orange, red)
- [ ] 2.2 Configure Tailwind custom breakpoints (sm: 375px, md: 768px, lg: 1024px, xl: 1280px)
- [ ] 2.3 Add Tailwind directives to index.css (@tailwind base, components, utilities)
- [ ] 2.4 Configure Vite for optimal production build
- [ ] 2.5 Setup folder structure (src/components, public/images)
- [ ] 2.6 Configure ESLint and Prettier for consistent code style

## 3. Image Preparation

- [ ] 3.1 Copy Bites_Logo.png to public/images/logo.png
- [ ] 3.2 Copy smoothiesBowl.jpg to public/images/hero-smoothie-bowl.jpg
- [ ] 3.3 Copy all product images to public/images/ with proper naming
- [ ] 3.4 Compress all images to <200KB each
- [ ] 3.5 Convert images to WebP format with JPG fallback
- [ ] 3.6 Add loading="lazy" attribute to all non-hero images

## 4. Core Components

- [ ] 4.1 Create Header component with sticky behavior and scroll detection
- [ ] 4.2 Implement mobile hamburger menu with smooth animation
- [ ] 4.3 Implement desktop horizontal navigation
- [ ] 4.4 Add smooth scroll behavior to navigation links
- [ ] 4.5 Add header fade-in animation on page load
- [ ] 4.6 Test header responsiveness on mobile (375px), tablet (768px), and desktop (1024px)

## 5. Hero Section

- [ ] 5.1 Create Hero component with headline and subheadline
- [ ] 5.2 Add background image with gradient overlay (purple to beige)
- [ ] 5.3 Implement primary CTA button (GoFood link)
- [ ] 5.4 Implement secondary CTA button (scroll to products)
- [ ] 5.5 Add staggered text animations (headline, subheadline, CTAs)
- [ ] 5.6 Ensure hero section is full viewport height on mobile
- [ ] 5.7 Add ARIA labels for accessibility

## 6. Why Bites Section

- [ ] 6.1 Create Why Bites component with 3 cards
- [ ] 6.2 Implement Card 1: 100% Buah Segar with mango icon
- [ ] 6.3 Implement Card 2: Sehat & Bergizi with leaf icon
- [ ] 6.4 Implement Card 3: Praktis & Lezat with lightning icon
- [ ] 6.5 Apply consistent styling (beige background, shadow, rounded corners)
- [ ] 6.6 Add scroll-triggered animations with stagger effect
- [ ] 6.7 Add hover effects on desktop
- [ ] 6.8 Test responsive layout (vertical stack on mobile, horizontal on desktop)

## 7. Location & Hours Section

- [ ] 7.1 Create Location component with address and hours display
- [ ] 7.2 Add location pin icon (MapPin) and clock icon (Clock)
- [ ] 7.3 Implement Google Maps embed with Pasar Sayangan location
- [ ] 7.4 Add "Buka di Maps" button with proper link
- [ ] 7.5 Apply responsive layout (stacked on mobile, 2 columns on desktop)
- [ ] 7.6 Add fade-in and scale animation on scroll
- [ ] 7.7 Add lazy loading to map embed

## 8. Products Section

- [ ] 8.1 Create Products component with headline "Menu Favorit Kami"
- [ ] 8.2 Implement Smoothie Bowl product with gallery images and "⭐ Best Seller" badge
- [ ] 8.3 Implement Salad Buah product with gallery images and "❤️ Favorit Keluarga" badge
- [ ] 8.4 Implement Jus Buah product with image and "🍹 Fresh Daily" badge
- [ ] 8.5 Implement Sop Buah product with description
- [ ] 8.6 Implement Buah Potong product with image
- [ ] 8.7 Apply consistent image styling (4:3 aspect ratio, 12px border radius)
- [ ] 8.8 Implement responsive grid (1 column mobile, 2 tablet, 3 desktop)
- [ ] 8.9 Make Smoothie Bowl span 2 columns on desktop
- [ ] 8.10 Add scroll-triggered animations with 0.15s stagger
- [ ] 8.11 Add image hover effects on desktop

## 9. Video Section

- [ ] 9.1 Create Video component with headline "Lihat Proses Pembuatan Kami"
- [ ] 9.2 Implement Instagram embed for process video (Behind the Scenes)
- [ ] 9.3 Implement Instagram embed for testimonial video (Kata Mereka Tentang Bites)
- [ ] 9.4 Apply iframe attributes (frameborder, scrolling, allowtransparency, allow)
- [ ] 9.5 Add video cards with subtle shadow
- [ ] 9.6 Implement responsive layout (stacked mobile, side-by-side desktop)
- [ ] 9.7 Add lazy loading with Intersection Observer
- [ ] 9.8 Add fade-in animation on scroll
- [ ] 9.9 Add fallback "Lihat di Instagram" links

## 10. Contact CTA Section

- [ ] 10.1 Create Contact CTA component with headline and subheadline
- [ ] 10.2 Implement WhatsApp button (green, Chat Langsung, WhatsApp icon)
- [ ] 10.3 Implement GoFood button (bright orange, Pesan Sekarang, shopping bag icon)
- [ ] 10.4 Add gradient background (purple to pink)
- [ ] 10.5 Apply responsive layout (stacked mobile, side-by-side desktop)
- [ ] 10.6 Add generous padding (48px top/bottom)
- [ ] 10.7 Add hover effects (pulse and scale) on desktop
- [ ] 10.8 Add click/tap feedback
- [ ] 10.9 Ensure buttons are thumb-friendly (min 48px height)
- [ ] 10.10 Add ARIA labels for accessibility

## 11. Footer Component

- [ ] 11.1 Create Footer component with purple background
- [ ] 11.2 Implement Column 1: Logo + tagline "Kesegaran Alami Setiap Hari"
- [ ] 11.3 Implement Column 2: Kontak (WhatsApp, Instagram, Location)
- [ ] 11.4 Implement Column 3: Jam Buka (Setiap Hari: 11.00 - 22.00 WIB)
- [ ] 11.5 Implement Column 4: Quick Links (GoFood, WhatsApp Order)
- [ ] 11.6 Add bottom bar with copyright and social media icons
- [ ] 11.7 Apply responsive layout (4 columns desktop, stacked mobile, 2x2 tablet)
- [ ] 11.8 Add hover effects to links (light orange on hover)
- [ ] 11.9 Add ARIA labels for accessibility

## 12. App Integration

- [ ] 12.1 Create App.jsx component that imports all sections
- [ ] 12.2 Configure App component structure and section order
- [ ] 12.3 Add smooth scroll behavior to html element
- [ ] 12.4 Configure meta tags in index.html (title, description, keywords)
- [ ] 12.5 Add Open Graph meta tags for social sharing
- [ ] 12.6 Add viewport meta tag for responsive design
- [ ] 12.7 Add theme-color meta tag

## 13. Animation Implementation

- [ ] 13.1 Configure Framer Motion global variants (fadeInUp, staggerContainer, scaleIn)
- [ ] 13.2 Add useInView hook to components for scroll-triggered animations
- [ ] 13.3 Implement header fade-in animation (0.5s delay)
- [ ] 13.4 Implement hero staggered animations (0.2s between elements)
- [ ] 13.5 Implement Why Bites card staggered animations (0.2s between cards)
- [ ] 13.6 Implement product staggered animations (0.15s between products)
- [ ] 13.7 Implement location fade-in and scale animation
- [ ] 13.8 Implement video fade-in animation
- [ ] 13.9 Ensure all animations use transform/opacity for 60fps performance

## 14. Testing

- [ ] 14.1 Test on mobile (375px - iPhone SE, 393px - iPhone 14 Pro)
- [ ] 14.2 Test on tablet (768px)
- [ ] 14.3 Test on desktop (1024px, 1280px)
- [ ] 14.4 Test all navigation links and smooth scrolling
- [ ] 14.5 Test all CTAs (WhatsApp, GoFood, Maps)
- [ ] 14.6 Test mobile hamburger menu
- [ ] 14.7 Test header background transition on scroll
- [ ] 14.8 Test all animations for smooth 60fps performance
- [ ] 14.9 Test with screen reader for accessibility
- [ ] 14.10 Test keyboard navigation

## 15. Optimization

- [ ] 15.1 Run `npm run build` and verify bundle size < 500KB
- [ ] 15.2 Optimize images (compress, convert to WebP)
- [ ] 15.3 Run Lighthouse audit (target: 90+ score)
- [ ] 15.4 Fix any Lighthouse warnings
- [ ] 15.5 Verify color contrast ratios meet WCAG AA standards
- [ ] 15.6 Test loading performance on slow 3G connection
- [ ] 15.7 Verify lazy loading is working correctly
- [ ] 15.8 Check for console errors and warnings

## 16. Deployment Preparation

- [ ] 16.1 Create .gitignore file (node_modules, dist, .env)
- [ ] 16.2 Initialize Git repository
- [ ] 16.3 Commit all code changes
- [ ] 16.4 Prepare for deployment to Vercel/Netlify
- [ ] 16.5 Create deployment documentation
- [ ] 16.6 Test production build locally with `npm run preview`