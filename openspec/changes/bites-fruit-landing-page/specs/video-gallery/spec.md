## ADDED Requirements

### Requirement: Video section displays 2 videos
The system SHALL display 2 video embeds from Instagram with titles.

#### Scenario: Both videos display correctly
- **WHEN** user views the Video section
- **THEN** 2 video embeds are displayed
- **AND** each video has a title below it
- **AND** videos are displayed side by side on desktop
- **AND** videos are stacked on mobile

### Requirement: Video 1 displays process video
The system SHALL display Instagram reel embed for behind-the-scenes process video with title "Behind the Scenes".

#### Scenario: Process video embeds correctly
- **WHEN** user views the Video section
- **THEN** Instagram reel embed (https://www.instagram.com/reel/DQWm2Bikome/) is displayed
- **AND** title "Behind the Scenes" is displayed below the video
- **AND** video has autoplay muted
- **AND** video width is 100%
- **AND** video height is 480px

### Requirement: Video 2 displays testimonial video
The system SHALL display Instagram reel embed for influencer testimonial with title "Kata Mereka Tentang Bites".

#### Scenario: Testimonial video embeds correctly
- **WHEN** user views the Video section
- **THEN** Instagram reel embed (https://www.instagram.com/reel/DT7UYXZj4jz/) is displayed
- **AND** title "Kata Mereka Tentang Bites" is displayed below the video
- **AND** video has autoplay muted
- **AND** video width is 100%
- **AND** video height is 480px

### Requirement: Video section uses Instagram iframe embeds
The system SHALL use Instagram iframe embed code with proper attributes for responsive display.

#### Scenario: Instagram iframe loads correctly
- **WHEN** video section loads
- **THEN** Instagram iframe is properly embedded
- **AND** frameborder is set to 0
- **AND** scrolling is disabled
- **AND** allowtransparency is true
- **AND** allow attribute includes "autoplay; encrypted-media"

### Requirement: Video section has responsive layout
The system SHALL display videos side by side on desktop, stacked on mobile.

#### Scenario: Mobile video layout
- **WHEN** user views page on mobile (375px-428px)
- **THEN** videos are stacked vertically
- **AND** each video spans full width
- **AND** 16px gap between videos

#### Scenario: Desktop video layout
- **WHEN** user views page on desktop (1024px+)
- **THEN** videos are displayed side by side
- **THEN** videos have equal width
- **AND** 24px gap between videos

### Requirement: Video section has headline
The system SHALL display headline "Lihat Proses Pembuatan Kami" above video embeds.

#### Scenario: Video headline displays
- **WHEN** user views the Video section
- **THEN** headline "Lihat Proses Pembuatan Kami" is displayed prominently
- **AND** headline is centered
- **AND** headline has proper spacing from section above

### Requirement: Video section has cards with shadow
The system SHALL display each video in a card with subtle shadow.

#### Scenario: Video cards have shadow
- **WHEN** user views the Video section
- **THEN** each video is in a card
- **AND** each card has subtle box shadow
- **AND** cards have consistent styling
- **AND** cards have rounded corners (16px)

### Requirement: Videos use lazy loading for performance
The system SHALL load video embeds lazily using Intersection Observer for optimal performance.

#### Scenario: Videos load on scroll
- **WHEN** user scrolls to Video section
- **THEN** video embeds are loaded
- **AND** videos do not load when section is not in viewport
- **AND** intersection observer triggers at 20% visibility

### Requirement: Video section animates on scroll
The system SHALL animate video section with fade-in effect when scrolling into view.

#### Scenario: Video section animates
- **WHEN** user scrolls to Video section
- **THEN** section fades in
- **AND** animation duration is 0.6 seconds
- **AND** animation uses ease-out timing function

### Requirement: Video section has fallback links
The system SHALL provide fallback "Lihat di Instagram" links for each video.

#### Scenario: Fallback links work
- **WHEN** user clicks "Lihat di Instagram" link
- **THEN** Instagram reel opens in new tab
- **AND** link corresponds to correct video
- **AND** fallback is visible if embed fails to load

### Requirement: Video section is accessible
The system SHALL include proper ARIA labels and keyboard navigation support.

#### Scenario: Video section is accessible
- **WHEN** user navigates with screen reader
- **THEN** video section has proper ARIA landmark
- **AND** iframe has proper title attribute
- **AND** fallback links have descriptive labels
- **AND** all elements are keyboard accessible