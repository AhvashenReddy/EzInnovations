# Ez Innovations Website

A modern, responsive Next.js website for Ez Innovations - a South African software development company.

## Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Animations**: Smooth scroll animations and hover effects using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading with Next.js optimizations
- **Accessibility**: WCAG compliant design with proper contrast and keyboard navigation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
└── components/
    ├── Navigation.tsx       # Responsive navigation bar
    ├── Hero.tsx             # Hero section with animations
    ├── About.tsx            # About section with stats
    ├── Services.tsx         # Services grid with technology stack
    ├── Process.tsx          # Process steps with timeline
    ├── Contact.tsx          # Contact form and information
    └── Footer.tsx           # Footer with links and company info
```

## Key Improvements Over Original

1. **Modern UI/UX**: 
   - Clean, minimalist design
   - Better typography and spacing
   - Consistent color scheme with gradients
   - Card-based layout for better content organization

2. **Enhanced Interactivity**:
   - Smooth scroll animations
   - Hover effects and transitions
   - Interactive contact form
   - Mobile-friendly navigation

3. **Better Performance**:
   - Next.js optimizations
   - Optimized images and fonts
   - Lazy loading and code splitting
   - SEO-friendly structure

4. **Responsive Design**:
   - Mobile-first approach
   - Flexible grid layouts
   - Touch-friendly interactions
   - Optimized for all screen sizes

5. **Accessibility**:
   - Semantic HTML structure
   - Proper ARIA labels
   - Keyboard navigation support
   - High contrast ratios

## Deployment

The site is ready for deployment on platforms like Vercel, Netlify, or any hosting service that supports Next.js.

```bash
npm run build
npm start
```

## License

© 2024 Ez Innovations (Pty) Ltd. All Rights Reserved