# Personal Website

A professional portfolio website built with Astro to showcase my networking, cloud, and software development expertise.

## 🌟 Features

- **🖧 Interactive Network Topology**: GNS3-style diagram using Vis.js to showcase your homelab infrastructure
  - Click nodes to view detailed server specs
  - Visual network connections with labeled links
  - Color-coded by server type (hypervisor, storage, network, etc.)
  - Mobile-friendly with touch controls
  - Direct link to your homelab GitHub repository
- **Modern Stack**: Built with Astro for fast, static site generation
- **Modern Design**: Light, clean aesthetic with off-white background and professional blue accents
- **Centralized Design System**: Programmatic CSS with design tokens for easy customization
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

4. Open your browser and visit `http://localhost:4321`

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

### Customize Network Topology

The interactive homelab diagram can be fully customized in `src/components/NetworkTopology.astro`:

**Update nodes** to match your servers:
```javascript
const nodes = [
  {
    id: 1,
    label: 'Your-Server-Name',
    group: 'hypervisor', // or 'storage', 'network', 'application', 'security'
    title: 'Server Description',
    specs: {
      cpu: 'Your CPU specs',
      ram: 'Your RAM',
      storage: 'Your storage configuration',
      role: 'What this server does'
    }
  },
  // Add more nodes...
];
```

**Update connections** between nodes:
```javascript
const edges = [
  { from: 1, to: 2, label: 'Connection Type' },
  // Add more connections...
];
```

**Update the GitHub repo link** to point to your homelab repository (currently set to `https://github.com/JashandeepJustinBains/homelab`).

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

The website uses a centralized design system with CSS custom properties (design tokens) for consistent styling. All design tokens are defined in `src/styles/global.css`.

**To customize the color scheme:**
```css
/* Edit src/styles/global.css */
:root {
  --color-primary: #2563eb;        /* Main accent color (blue) */
  --color-secondary: #0ea5e9;      /* Secondary accent (sky blue) */
  --bg-main: #fafafa;              /* Main background (off-white) */
  --bg-secondary: #ffffff;         /* Card backgrounds (white) */
  --text-primary: #1e293b;         /* Main text color */
  /* ... see file for complete design tokens ... */
}
```

**Available design token categories:**
- Colors (primary, secondary, backgrounds, text, borders)
- Typography (font families, sizes, weights, line heights)
- Spacing scale (consistent spacing throughout)
- Border radius values
- Shadows and transitions
- Z-index scale

This programmatic approach ensures design consistency and makes theme changes easy!

## 📦 Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

## 🚢 Deployment

This site is configured for **Cloudflare Pages** deployment.

### Cloudflare Pages Deployment (Recommended)

**Option 1: Git Integration (Easiest)**
1. Push your code to GitHub
2. Log in to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
6. Click "Save and Deploy"

**Option 2: Direct Upload with Wrangler CLI**
1. Install Wrangler CLI (if not already installed):
   ```bash
   npm install -g wrangler
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Deploy with Wrangler:
   ```bash
   wrangler pages deploy dist
   ```

### Alternative: GitHub Pages

To deploy to GitHub Pages instead:

1. Update `astro.config.mjs`:
   ```javascript
   {
     site: 'https://jashandeepjustinbains.github.io',
     base: '/personal-website',  // Add this line back
   }
   ```

2. Update asset paths in your code to include the base path
3. Rebuild and deploy to GitHub Pages

### Configuration Files

- `astro.config.mjs` - Astro build configuration (currently configured for Cloudflare Pages)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📞 Contact

- **LinkedIn**: [jashandeepjustinbains](https://linkedin.com/in/jashandeepjustinbains)
- **GitHub**: [@JashandeepJustinBains](https://github.com/JashandeepJustinBains)
- **Email**: your.email@example.com
