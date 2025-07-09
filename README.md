# Folk Life Band Website

A modern, responsive website for a Thai folk/life music band built with Nuxt 3 and Tailwind CSS. This project showcases the band's music, performances, gallery, and provides contact information for bookings and inquiries.

## Features

- **Modern Design**: Warm, earthy color palette inspired by Thai folk music aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark mode with warm, folk-inspired dark theme
- **Music Player**: Custom audio player for sampling the band's music
- **Performance Calendar**: Upcoming shows and past performances
- **Photo Gallery**: Showcasing the band's performances and behind-the-scenes moments
- **Contact Form**: For bookings, press inquiries, and fan messages
- **Interactive FAQ**: Common questions about bookings and collaborations

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - Vue.js framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Dark Mode**: [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) - Dark mode support
- **Animations**: Custom CSS animations and transitions
- **Deployment**: Static site generation for optimal performance

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

- `/pages` - Website pages (home, about, gallery, contact)
- `/components` - Reusable Vue components
- `/assets` - Static assets (images, fonts, etc.)
- `/public` - Public files (favicon, robots.txt)
- `/composables` - Shared composable functions

## Customization

The website uses a custom Tailwind theme with folk-inspired colors:

- **Primary**: Warm brown tones
- **Accent**: Vibrant orange-red highlights
- **Earth**: Natural, earthy tones
- **Dark**: Warm dark theme for dark mode

Edit `tailwind.config.js` to customize the color palette and other theme settings.

## License

MIT
