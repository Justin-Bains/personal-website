# Personal Website

A professional portfolio website built with Astro to showcase my networking, cloud, and software development expertise.

## 🌟 Features

- **Modern Stack**: Built with Astro for fast, static site generation
- **Networking/IT Aesthetic**: Dark theme with blue/teal color scheme inspired by network diagrams
- **SEO Optimized**: JSON-LD structured data and comprehensive meta tags for social sharing
- **GitHub Integration**: Automatically fetches and displays public repositories
- **Certifications Showcase**: Display professional certifications with verification links
- **Résumé Download**: Easy access to download your résumé
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Layout**: Recruiter-friendly design suitable for LinkedIn sharing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/JashandeepJustinBains/personal-website.git
cd personal-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321/personal-website`

## 🛠️ Customization

### Update Certifications

Edit `src/components/Certifications.astro` to add your actual certifications:
```javascript
const certifications = [
  {
    name: "Your Certification Name",
    issuer: "Issuing Organization",
    url: "https://www.credly.com/badges/your-actual-badge-id",
    date: "2024",
    logo: "https://path-to-cert-logo.png"
  },
  // Add more certifications...
];
```

### Update GitHub Username

If your GitHub username is different, update it in `src/components/GitHubRepos.astro`:
```javascript
const response = await fetch('https://api.github.com/users/YOUR-USERNAME/repos?sort=updated&per_page=10');
```

### Add Your Résumé

Replace the placeholder file:
1. Add your résumé PDF to `public/resume.pdf`
2. The download link will automatically work

### Update Contact Information

Edit `src/pages/index.astro` to update:
- LinkedIn profile URL
- Email address
- GitHub profile URL
- Personal information in the About section

### Customize Styling

All global styles are in `src/layouts/BaseLayout.astro`. Modify CSS variables to change colors:
```css
:root {
  --primary: #0066cc;      /* Main accent color */
  --secondary: #00cc99;    /* Secondary accent */
  --dark: #1a1a2e;         /* Background color */
  /* ... more variables ... */
}
```

## 📦 Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

## 🚢 Deployment

This site is configured for GitHub Pages deployment. To deploy:

1. Build the site: `npm run build`
2. The `dist/` folder contains your static site
3. Deploy to GitHub Pages, Netlify, Vercel, or any static hosting service

### GitHub Pages Configuration

The `astro.config.mjs` includes:
```javascript
{
  site: 'https://jashandeepjustinbains.github.io',
  base: '/personal-website',
}
```

Update these values if deploying to a different URL.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📞 Contact

- **LinkedIn**: [jashandeepjustinbains](https://linkedin.com/in/jashandeepjustinbains)
- **GitHub**: [@JashandeepJustinBains](https://github.com/JashandeepJustinBains)
- **Email**: your.email@example.com
