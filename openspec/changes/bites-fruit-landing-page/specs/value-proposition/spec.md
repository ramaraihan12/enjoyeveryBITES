## ADDED Requirements

### Requirement: Value proposition displays 3 cards
The system SHALL display 3 cards explaining Bites Fruit's unique selling points.

#### Scenario: All three cards display correctly
- **WHEN** user views the Why Bites section
- **THEN** 3 cards are displayed vertically on mobile
- **AND** cards are displayed horizontally on desktop
- **AND** each card has icon, title, and description

### Requirement: Card 1 displays "100% Buah Segar"
The system SHALL display a card with mango icon (🥭), title "100% Buah Segar", and description about using fresh fruits daily.

#### Scenario: First card content displays
- **WHEN** user views the Why Bites section
- **THEN** first card shows mango icon (🥭)
- **AND** title is "100% Buah Segar"
- **AND** description is "Kami hanya menggunakan buah pilihan berkualitas tinggi yang diolah fresh setiap hari. Tanpa pengawet, tanpa pemanis buatan."

### Requirement: Card 2 displays "Sehat & Bergizi"
The system SHALL display a card with leaf icon (🌱), title "Sehat & Bergizi", and description about nutritional value.

#### Scenario: Second card content displays
- **WHEN** user views the Why Bites section
- **THEN** second card shows leaf icon (🌱)
- **AND** title is "Sehat & Bergizi"
- **AND** description is "Kaya akan vitamin, serat, dan antioksidan. Pilihan sempurna untuk gaya hidup sehat Anda dan keluarga."

### Requirement: Card 3 displays "Praktis & Lezat"
The system SHALL display a card with lightning icon (⚡), title "Praktis & Lezat", and description about convenience.

#### Scenario: Third card content displays
- **WHEN** user views the Why Bites section
- **THEN** third card shows lightning icon (⚡)
- **AND** title is "Praktis & Lezat"
- **AND** description is "Dikemas dengan cantik, siap dinikmati kapan saja. Tersedia untuk dine-in dan delivery via GoFood."

### Requirement: Cards have consistent styling
The system SHALL apply consistent styling to all cards with beige background, subtle shadow, rounded corners, and generous padding.

#### Scenario: Cards have uniform design
- **WHEN** user views the Why Bites section
- **THEN** all cards have beige background (#fdf8e1)
- **AND** all cards have subtle box shadow
- **AND** all cards have 16px border radius
- **AND** all cards have 24px padding on mobile and 32px padding on desktop
- **AND** all cards have same width and height

### Requirement: Cards animate on scroll
The system SHALL animate cards with fade-in and slide-up effects when scrolling into view.

#### Scenario: Cards animate sequentially
- **WHEN** user scrolls to Why Bites section
- **THEN** cards fade in and slide up
- **AND** animations are staggered by 0.2 seconds between each card
- **AND** animation duration is 0.6 seconds
- **AND** animation uses ease-out timing function

### Requirement: Cards are responsive across breakpoints
The system SHALL adapt card layout for mobile, tablet, and desktop views.

#### Scenario: Mobile card layout
- **WHEN** user views page on mobile (375px-428px)
- **THEN** cards are stacked vertically
- **AND** each card spans full width
- **AND** 16px gap between cards

#### Scenario: Tablet card layout
- **WHEN** user views page on tablet (768px)
- **THEN** cards are displayed in horizontal row
- **AND** cards have equal spacing
- **AND** container has appropriate padding

#### Scenario: Desktop card layout
- **WHEN** user views page on desktop (1024px+)
- **THEN** cards are displayed in horizontal row with max-width container
- **AND** cards have generous spacing (24px gap)
- **AND** cards maintain proportional sizing

### Requirement: Cards have hover effects on desktop
The system SHALL apply hover effects to cards on desktop devices.

#### Scenario: Card hover effect
- **WHEN** user hovers over a card on desktop
- **THEN** card scales up slightly (1.05)
- **AND** shadow increases
- **AND** transition is smooth (0.3s ease)
- **AND** effect does not appear on mobile (touch devices)