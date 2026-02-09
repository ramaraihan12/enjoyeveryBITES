## ADDED Requirements

### Requirement: Products section displays 5 products
The system SHALL display all 5 Bites Fruit products with images, titles, descriptions, and highlight badges.

#### Scenario: All products display correctly
- **WHEN** user views the Products section
- **THEN** 5 products are displayed: Smoothie Bowl, Salad Buah, Jus Buah, Sop Buah, Buah Potong
- **AND** each product has image, title, description, and highlight badge
- **AND** Smoothie Bowl spans 2 columns on desktop (hero product)

### Requirement: Smoothie Bowl product displays correctly
The system SHALL display Smoothie Bowl with main image, gallery images, description, and "⭐ Best Seller" badge.

#### Scenario: Smoothie Bowl displays with all details
- **WHEN** user views the Products section
- **THEN** Smoothie Bowl main image (smoothiesBowl.jpg) is displayed
- **AND** gallery images (dineInSmoothies.jpeg, smoothiesBowl2.jpeg) are available
- **AND** title is "Smoothie Bowl"
- **AND** description is "Bowl kaya nutrisi dengan smoothie buah segar, topping granola, chia seeds, dan potongan buah pilihan. Sempurna untuk sarapan sehat atau snack bergizi."
- **AND** highlight badge "⭐ Best Seller" is displayed top-right on image
- **AND** product spans 2 columns on desktop

### Requirement: Salad Buah product displays correctly
The system SHALL display Salad Buah with main image, gallery images, description, and "❤️ Favorit Keluarga" badge.

#### Scenario: Salad Buah displays with all details
- **WHEN** user views the Products section
- **THEN** Salad Buah main image (SaladBuah.jpg) is displayed
- **AND** gallery images (saladBuah2.jpeg, saladBuahCoklat.jpeg) are available
- **AND** title is "Salad Buah"
- **AND** description is "Kombinasi buah-buahan segar dengan saus yogurt atau mayones premium. Segar, manis, dan menyehatkan."
- **AND** highlight badge "❤️ Favorit Keluarga" is displayed top-right on image

### Requirement: Jus Buah product displays correctly
The system SHALL display Jus Buah with image, description, and "🍹 Fresh Daily" badge.

#### Scenario: Jus Buah displays with all details
- **WHEN** user views the Products section
- **THEN** Jus Buah image (jusBotol.jpg) is displayed
- **AND** title is "Jus Buah"
- **AND** description is "Jus buah 100% murni tanpa tambahan gula atau pengawet. Tersedia dalam berbagai varian rasa favorit."
- **AND** highlight badge "🍹 Fresh Daily" is displayed top-right on image

### Requirement: Sop Buah product displays correctly
The system SHALL display Sop Buah with description and highlight badge.

#### Scenario: Sop Buah displays with all details
- **WHEN** user views the Products section
- **THEN** Sop Buah title is displayed
- **AND** description is "Sop buah segar dengan kuah susu yang lembut dan es serut. Kesegaran maksimal di setiap sendok."
- **AND** placeholder image or no image is displayed (since no image provided)

### Requirement: Buah Potong product displays correctly
The system SHALL display Buah Potong with image, description, and highlight badge.

#### Scenario: Buah Potong displays with all details
- **WHEN** user views the Products section
- **THEN** Buah Potong image (buahPotong.jpg) is displayed
- **AND** title is "Buah Potong"
- **AND** description is "Buah potong segar siap santap. Praktis, higienis, dan penuh vitamin untuk aktivitas harian Anda."
- **AND** placeholder or no highlight badge (since none specified)

### Requirement: Product images have consistent styling
The system SHALL apply consistent styling to product images with 4:3 aspect ratio and 12px rounded corners.

#### Scenario: Product images have uniform design
- **WHEN** user views the Products section
- **THEN** all product images have 4:3 aspect ratio
- **AND** all images have 12px border radius
- **AND** all images use lazy loading for performance
- **AND** images are optimized (<200KB each)

### Requirement: Products section has responsive grid layout
The system SHALL display products in 1 column on mobile, 2 columns on tablet, 3 columns on desktop.

#### Scenario: Mobile product layout
- **WHEN** user views page on mobile (375px-428px)
- **THEN** products are displayed in 1 column
- **AND** each product spans full width
- **AND** 16px gap between products

#### Scenario: Tablet product layout
- **WHEN** user views page on tablet (768px)
- **THEN** products are displayed in 2 columns
- **AND** products have equal spacing
- **AND** 24px gap between columns and rows

#### Scenario: Desktop product layout
- **WHEN** user views page on desktop (1024px+)
- **THEN** products are displayed in 3 columns
- **AND** Smoothie Bowl spans 2 columns (hero)
- **AND** other products span 1 column each
- **AND** 24px gap between columns and rows

### Requirement: Products animate on scroll
The system SHALL animate products with fade-in and slide-up effects when scrolling into view.

#### Scenario: Products animate sequentially
- **WHEN** user scrolls to Products section
- **THEN** products fade in and slide up
- **AND** animations are staggered by 0.15 seconds between each product
- **AND** animation duration is 0.6 seconds
- **AND** animation uses ease-out timing function

### Requirement: Product images have hover effect
The system SHALL apply hover effect to product images on desktop devices.

#### Scenario: Product image hover effect
- **WHEN** user hovers over a product image on desktop
- **THEN** image scales up to 1.05
- **AND** transition is smooth (0.3s ease)
- **AND** effect does not appear on mobile (touch devices)

### Requirement: Products section headline displays correctly
The system SHALL display headline "Menu Favorit Kami" above product cards.

#### Scenario: Products headline displays
- **WHEN** user views the Products section
- **THEN** headline "Menu Favorit Kami" is displayed prominently
- **AND** headline is centered
- **AND** headline has proper spacing from section above