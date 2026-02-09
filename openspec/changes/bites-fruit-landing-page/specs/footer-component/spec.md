## ADDED Requirements

### Requirement: Footer displays 4 columns on desktop
The system SHALL display footer with 4 columns: Logo + tagline, Kontak, Jam Buka, and Quick Links.

#### Scenario: All four columns display correctly
- **WHEN** user views the footer
- **THEN** 4 columns are displayed on desktop
- **AND** columns are stacked on mobile
- **AND** each column has proper spacing

### Requirement: Footer column 1 displays logo and tagline
The system SHALL display Bites Fruit logo and tagline "Kesegaran Alami Setiap Hari" in first column.

#### Scenario: Logo and tagline display correctly
- **WHEN** user views the footer
- **THEN** Bites Fruit logo is displayed
- **AND** tagline "Kesegaran Alami Setiap Hari" is displayed below logo
- **AND** content is properly aligned

### Requirement: Footer column 2 displays contact information
The system SHALL display WhatsApp, Instagram, and location information in second column.

#### Scenario: Contact info displays correctly
- **WHEN** user views the footer
- **THEN** WhatsApp number "0818-1819-3311" is displayed
- **AND** Instagram handle "@bites.fruit" is displayed with link
- **AND** location "Pasar Sayangan, Salatiga" is displayed
- **AND** column heading "Kontak" is displayed

### Requirement: Footer column 3 displays operating hours
The system SHALL display operating hours in third column.

#### Scenario: Hours display correctly
- **WHEN** user views the footer
- **THEN** column heading "Jam Buka" is displayed
- **AND** hours "Setiap Hari: 11.00 - 22.00 WIB" is displayed
- **AND** content is properly formatted

### Requirement: Footer column 4 displays quick links
The system SHALL display quick links to GoFood and WhatsApp in fourth column.

#### Scenario: Quick links display correctly
- **WHEN** user views the footer
- **THEN** column heading "Quick Links" is displayed
- **AND** "GoFood" link is displayed
- **AND** "WhatsApp Order" link is displayed
- **AND** links open in new tab

### Requirement: Footer has bottom bar with copyright
The system SHALL display bottom bar with copyright text and social media icons.

#### Scenario: Bottom bar displays correctly
- **WHEN** user views the footer
- **THEN** copyright text "© 2025 Bites Fruit. Semua hak cipta dilindungi." is displayed
- **AND** social media icons are displayed
- **AND** icons are 24px in size
- **AND** icons have consistent spacing

### Requirement: Footer has purple background
The system SHALL display footer with purple background (#54388f) and beige text (#fdf8e1).

#### Scenario: Footer colors display correctly
- **WHEN** user views the footer
- **THEN** background color is purple (#54388f)
- **AND** text color is beige (#fdf8e1)
- **AND** link hover color is light orange (#ffce88)
- **AND** contrast meets WCAG AA standards

### Requirement: Footer has responsive layout
The system SHALL display 4 columns on desktop, stack on mobile.

#### Scenario: Mobile footer layout
- **WHEN** user views page on mobile (375px-428px)
- **THEN** all 4 columns are stacked vertically
- **AND** each column spans full width
- **AND** 24px gap between columns

#### Scenario: Tablet footer layout
- **WHEN** user views page on tablet (768px)
- **THEN** columns are displayed in 2x2 grid
- **AND** columns have equal spacing
- **AND** 24px gap between columns

#### Scenario: Desktop footer layout
- **WHEN** user views page on desktop (1024px+)
- **THEN** 4 columns are displayed horizontally
- **AND** columns have equal width
- **AND** 32px gap between columns
- **AND** footer content is centered in max-width container

### Requirement: Footer links have hover effects
The system SHALL apply hover effects to footer links on desktop devices.

#### Scenario: Link hover effect
- **WHEN** user hovers over a footer link
- **THEN** link color changes to light orange (#ffce88)
- **AND** transition is smooth (0.3s ease)
- **AND** effect does not appear on mobile (touch devices)

### Requirement: Footer social media icons are clickable
The system SHALL provide clickable links for social media icons.

#### Scenario: Social media icons navigate correctly
- **WHEN** user clicks Instagram icon
- **THEN** Instagram profile (@bites.fruit) opens in new tab
- **AND** other social media icons work similarly
- **AND** icons have hover effects on desktop

### Requirement: Footer is accessible
The system SHALL include proper ARIA labels and keyboard navigation support.

#### Scenario: Footer is accessible
- **WHEN** user navigates with screen reader
- **THEN** footer has proper ARIA landmark
- **AND** links have descriptive labels
- **AND** social media icons have descriptive labels
- **AND** all elements are keyboard accessible
- **AND** focus states are clearly visible

### Requirement: Footer has proper spacing
The system SHALL apply proper spacing to footer sections.

#### Scenario: Footer spacing is consistent
- **WHEN** user views the footer
- **THEN** 4-column section has 48px padding top
- **AND** 4-column section has 32px padding bottom
- **AND** bottom bar has 16px padding
- **AND** spacing is consistent across breakpoints