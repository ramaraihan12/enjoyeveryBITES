## ADDED Requirements

### Requirement: Location section displays address
The system SHALL display Bites Fruit's complete address with location pin icon.

#### Scenario: Address displays correctly
- **WHEN** user views the Location & Hours section
- **THEN** location pin icon is displayed
- **AND** address "Pasar Sayangan, Jl. Patimura No.58a Lantai 2, Sidorejo, Kota Salatiga, Jawa Tengah 50711" is displayed
- **AND** text is properly formatted with line breaks

### Requirement: Location section displays operating hours
The system SHALL display Bites Fruit's operating hours with clock icon.

#### Scenario: Hours display correctly
- **WHEN** user views the Location & Hours section
- **THEN** clock icon is displayed
- **AND** hours text "Buka Setiap Hari, 11.00 - 22.00 WIB" is displayed
- **AND** text is prominently visible

### Requirement: Location section includes Google Maps integration
The system SHALL display a Google Maps embed showing Bites Fruit's location.

#### Scenario: Map embed loads correctly
- **WHEN** user views the Location & Hours section
- **THEN** Google Maps embed is displayed
- **AND** map shows Pasar Sayangan location
- **AND** map is responsive across breakpoints
- **AND** map uses lazy loading for performance

### Requirement: Location section has "Buka di Maps" button
The system SHALL provide a button that opens Bites Fruit's location in Google Maps app or website.

#### Scenario: Maps button navigates correctly
- **WHEN** user clicks "Buka di Maps" button
- **THEN** system opens Google Maps with Bites Fruit's location
- **AND** opens in new tab/window
- **AND** button color is purple (#54388f)
- **AND** button has hover effect

### Requirement: Location section has responsive layout
The system SHALL display location info and map in two columns on desktop, stacked on mobile.

#### Scenario: Mobile location layout
- **WHEN** user views page on mobile (375px-428px)
- **THEN** location info is displayed at top
- **AND** Google Maps is displayed below info
- **AND** both sections span full width
- **AND** 16px gap between sections

#### Scenario: Desktop location layout
- **WHEN** user views page on desktop (1024px+)
- **THEN** Google Maps is displayed on left column
- **AND** location info is displayed on right column
- **AND** columns have equal spacing
- **AND** 24px gap between columns

### Requirement: Location section animates on scroll
The system SHALL animate location section with fade-in and scale effects when scrolling into view.

#### Scenario: Location section animates
- **WHEN** user scrolls to Location & Hours section
- **THEN** section fades in
- **AND** map scales from 0.95 to 1.0
- **AND** animation duration is 0.5 seconds
- **AND** animation uses ease-out timing function

### Requirement: Location section uses consistent icons
The system SHALL use Lucide React icons for location pin and clock with consistent styling.

#### Scenario: Icons display consistently
- **WHEN** user views the Location & Hours section
- **THEN** location pin icon (MapPin) is displayed
- **AND** clock icon (Clock) is displayed
- **AND** icons are 24px in size
- **AND** icons have consistent color (purple #54388f)

### Requirement: Location section is accessible
The system SHALL include proper ARIA labels and keyboard navigation support.

#### Scenario: Location section is accessible
- **WHEN** user navigates with screen reader
- **THEN** location info has proper ARIA landmark
- **AND** map embed has proper title attribute
- **AND** "Buka di Maps" button has descriptive label
- **AND** all elements are keyboard accessible