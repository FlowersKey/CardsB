# Design Guidelines: Chemistry & Biology Study Platform

## Design Approach
**System-Based with Educational Focus**: Following a utility-first design system (similar to Linear/Notion) optimized for learning and retention. The app prioritizes clarity, focus, and cognitive ease while maintaining an engaging, modern aesthetic suitable for university students.

## Core Design Principles
1. **Clarity First**: Reduce cognitive load - every element serves learning
2. **Focused Interactions**: One primary action visible at a time
3. **Progressive Disclosure**: Show complexity only when needed
4. **Persistent Context**: Always show progress and category
5. **Instant Feedback**: Visual confirmation for all user actions

## Color Palette

### Light Mode
- **Primary Brand**: Teal (180 45% 35%) - for CTAs, active states, correct answers
- **Background**: Warm Cream (40 20% 98%) - reduces eye strain during study
- **Surface**: Off-White (40 15% 99%) - cards, modals
- **Text Primary**: Deep Slate (195 50% 15%) - high contrast for readability
- **Text Secondary**: Medium Slate (195 15% 45%) - metadata, hints
- **Success**: Emerald Green (150 60% 45%) - correct quiz answers
- **Error**: Coral Red (5 75% 55%) - incorrect answers, alerts
- **Warning**: Amber (35 85% 55%) - review needed, time warnings

### Dark Mode
- **Primary Brand**: Bright Teal (180 65% 60%) - maintains energy in dark mode
- **Background**: Charcoal (200 10% 12%) - OLED-friendly deep background
- **Surface**: Slate Gray (200 8% 16%) - elevated surfaces
- **Text Primary**: Soft White (0 0% 95%)
- **Text Secondary**: Cool Gray (200 5% 65%)
- **Success**: Mint Green (150 50% 60%)
- **Error**: Soft Coral (5 80% 65%)
- **Warning**: Soft Amber (35 75% 65%)

### Category Color Coding (Subtle Accent Borders)
Assign each of the 10 categories a unique subtle tint for instant visual recognition:
- Estructura Atómica: Blue (220 60% 50%)
- Enlaces Químicos: Purple (270 50% 55%)
- Macromoléculas: Indigo (240 55% 50%)
- Proteínas: Pink (330 60% 55%)
- Lípidos: Orange (25 70% 50%)
- Carbohidratos: Yellow (45 75% 50%)
- Ácidos Nucleicos: Cyan (190 65% 50%)
- Membranas: Green (140 55% 45%)
- Organelas: Teal (175 60% 45%)
- Dominios de la Vida: Violet (285 55% 50%)

## Typography
- **Font Stack**: System fonts for performance - SF Pro/Segoe UI/Roboto
- **Headings**: 24px bold (app title), 18px semibold (section headers)
- **Body**: 16px regular (card content, questions) - optimized for reading
- **Small**: 14px (metadata, hints, timers)
- **Monospace**: For chemical formulas and numbers (e.g., "O₂", "104.5°")
- **Line Height**: 1.6 for card content (readability), 1.4 for UI elements

## Layout System
**Spacing Units**: 4px base grid - use multiples of 4/8/12/16/24/32/48
- **Container**: Max-width 1100px, centered, 16px mobile padding, 32px desktop
- **Card Spacing**: 24px between major sections on mobile, 32px on desktop
- **Component Padding**: 16px mobile, 20px desktop (cards, buttons)

## Component Library

### Flashcard Component
- **Dimensions**: 90vw max-width 600px, aspect ratio 3:2 on mobile, 2:1 on desktop
- **Border**: 2px solid category color (10% opacity)
- **Shadow**: Soft elevation (0 4px 16px rgba(0,0,0,0.08) light, 0.12 dark)
- **Flip Animation**: 3D transform 0.6s ease-out, preserve-3d
- **States**:
  - Default: Subtle glow on category color
  - Hover: Lift 2px, increase shadow
  - Flipped: Show back face with same styling
  - Favorite: Gold star corner badge (⭐)

### Quiz Card
- **Option Buttons**: Full-width, left-aligned, 16px padding
- **States**:
  - Unselected: Light background, subtle border
  - Selected: Primary color border (3px), light tint background
  - Correct: Success green background (15% opacity), checkmark icon
  - Incorrect: Error red background (15% opacity), X icon
- **Feedback Banner**: Fixed bottom or top, full-width, animated slide-in

### Filter & Search Bar
- **Layout**: Horizontal flex on desktop, stacked on mobile
- **Search Input**: Icon prefix (🔍), clear button when active
- **Dropdown**: Custom styled, category color indicators as small dots
- **Favorite Filter**: Toggle pill button with count badge

### Progress Bar
- **Height**: 6px
- **Fill**: Animated gradient (primary color 0% to lighter tint 100%)
- **Background**: 10% opacity surface color
- **Labels**: Above bar - "Tarjeta X de Y" + Category badge

### Statistics Cards
- **Grid**: 2x2 on mobile, 4x1 on desktop
- **Design**: Subtle background tint, icon + large number + label
- **Icons**: Emoji or simple SVG (📚 📊 ⏱️ ⭐)
- **Numbers**: 32px bold, color-coded (studied: primary, accuracy: success/warning based on %)

### Navigation Buttons
- **Primary**: Teal fill, white text, 12px border-radius, medium shadow
- **Secondary**: Ghost/outline style, primary color border + text
- **Icon Buttons**: 40x40px, rounded, icon-only for prev/next
- **Disabled**: 40% opacity, no hover effect

### Timer Display
- **Format**: MM:SS, monospace font
- **Visual**: Pulsing animation every second
- **Warning State**: Text turns warning color when >80% of suggested time

## Animations & Interactions
- **Card Flip**: Smooth 3D rotation (600ms ease-out)
- **Page Transitions**: Fade + slight slide (300ms)
- **Button Feedback**: Scale 0.98 on press (100ms)
- **Quiz Feedback**: Slide-in from top (400ms ease-out)
- **Progress Bar**: Smooth width transition (500ms)
- **Category Change**: Crossfade card content (250ms)
- **NO**: Distracting particles, excessive bounce, or auto-playing animations

## Responsive Behavior
- **Mobile (<768px)**: 
  - Single column layout
  - Larger touch targets (min 44px)
  - Simplified navigation (hamburger if needed)
  - Flashcard fills 90vw
  - Stacked filters
- **Tablet (768-1024px)**:
  - 2-column statistics
  - Side-by-side filters
- **Desktop (>1024px)**:
  - Max content width 1100px
  - Horizontal controls layout
  - Hover states active

## Accessibility
- **Focus States**: 3px solid primary color outline, 2px offset
- **Color Contrast**: WCAG AA minimum (4.5:1 text, 3:1 UI)
- **Keyboard Navigation**: Full support - Space/Enter for flip, arrows for nav
- **Screen Readers**: Proper ARIA labels on interactive elements
- **Motion**: Respect prefers-reduced-motion for animations

## Images
**No images required** - This is a text-based educational tool focused on information density. Use emoji and unicode symbols (🧬 ⚛️ 🔬) for visual interest instead.

## Special Considerations
- **Dark Mode**: Automatic detection via prefers-color-scheme, manual toggle option
- **Data Persistence**: LocalStorage for favorites, quiz history, study time
- **Error States**: Clear messaging with actionable suggestions
- **Empty States**: Friendly illustrations when filters return no results
- **Loading States**: Skeleton screens for quiz generation, subtle spinners