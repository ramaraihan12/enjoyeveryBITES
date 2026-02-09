## ADDED Requirements

### Requirement: Hero section displays headline and subheadline
The system SHALL display a headline "Nikmati Kesegaran Alami Setiap Hari" and subheadline about Bites Fruit products.

#### Scenario: Hero text displays correctly
- **WHEN** user views the hero section
- **THEN** headline "Nikmati Kesegaran Alami Setiap Hari" is displayed prominently
- **AND** subheadline "Smoothie bowls, salad buah, jus segar, dan olahan buah pilihan dari bahan berkualitas. Sehat itu mudah, dimulai dari Bites!" is displayed below headline
- **AND** text color has sufficient contrast against background

### Requirement: Hero section has primary CTA to GoFood
The system SHALL provide a primary CTA button "Pesan Sekarang via GoFood" that links to GoFood URL.

#### Scenario: GoFood CTA navigates correctly
- **WHEN** user clicks "Pesan Sekarang via GoFood" button
- **THEN** system navigates to GoFood URL (https://gofood.link/a/PJKgC8w)
- **AND** link opens in new tab
- **AND** button color is bright orange (#f7b12b)
- **AND** button has hover effect

### Requirement: Hero section has secondary CTA to menu
The system SHALL provide a secondary CTA button "Lihat Menu Kami" that smoothly scrolls to products section.

#### Scenario: Menu CTA scrolls to products
- **WHEN** user clicks "Lihat Menu Kami" button
- **THEN** page smoothly scrolls to products section
- **AND** scroll animation uses CSS smooth scrolling
- **AND** button has distinct style from primary CTA

### Requirement: Hero section has background image with overlay
The system SHALL display a background image (smoothiesBowl.jpg) with gradient overlay for text readability.

#### Scenario: Background image loads correctly
- **WHEN** hero section loads
- **THEN** background image (smoothiesBowl.jpg) covers entire hero section
- **AND** gradient overlay is applied from purple rgba(84, 56, 143, 0.3) to beige rgba(253, 248, 225, 0.8)
- **AND** text remains readable against background
- **AND** image uses lazy loading for performance

### Requirement: Hero section is full viewport height on mobile
The system SHALL display hero section at full viewport height on mobile devices.

#### Scenario: Mobile hero section fills viewport
- **WHEN** user views page on mobile (375px-428px)
- **THEN** hero section fills 100vh
- **AND** content is vertically centered
- **AND** text is readable without horizontal scrolling

### Requirement: Hero text animates on load
The system SHALL animate hero text elements with staggered fade-in and slide-up effects.

#### Scenario: Hero text animates sequentially
- **WHEN** page loads
- **THEN** headline slides up and fades in
- **AND** subheadline animates after headline with 0.2s stagger
- **AND** CTA buttons scale in after text with 0.3s delay
- **AND** all animations complete within 1.5 seconds

### Requirement: Hero section is responsive across breakpoints
The system SHALL adapt hero section layout and content for mobile, tablet, and desktop views.

#### Scenario: Tablet hero layout
- **WHEN** user views page on tablet (768px)
- **THEN** hero section maintains appropriate spacing
- **AND** text size scales appropriately
- **AND** background image remains properly positioned

#### Scenario: Desktop hero layout
- **WHEN** user views page on desktop (1024px+)
- **THEN** hero section uses optimal width (max 1280px)
- **AND** text is centered with generous padding
- **AND** CTA buttons are prominently displayed

### Requirement: Hero section has accessible ARIA labels
The system SHALL include proper ARIA labels for accessibility compliance.

#### Scenario: Hero section is accessible
- **WHEN** user navigates with screen reader
- **THEN** hero section has proper ARIA landmark
- **AND** CTA buttons have descriptive labels
- **AND** contrast ratio meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)