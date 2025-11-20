# Cloudflare Pages Deployment Guide

This guide will help you deploy your personal website to Cloudflare Pages.

## Why the Fix Was Needed

Your website was appearing as basic HTML without styling because of a configuration mismatch:

- **Before**: Site was configured with `base: '/personal-website'` for GitHub Pages deployment
- **After**: Removed base path for Cloudflare Pages (serves from root `/`)

This caused all CSS and JavaScript files to 404 because they were looking for `/personal-website/_astro/...` instead of `/_astro/...`.

## Deployment Steps

### Option 1: Git Integration (Recommended)

This is the easiest method and enables automatic deployments on every push.

1. **Push your code to GitHub** (already done if you're reading this!)

2. **Log in to Cloudflare**
   - Go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
   - Navigate to "Pages" in the sidebar

3. **Create a new project**
   - Click "Create a project"
   - Click "Connect to Git"
   - Authorize Cloudflare to access your GitHub account
   - Select the `personal-website` repository

4. **Configure build settings**
   ```
   Production branch: main (or your default branch)
   Build command: npm run build
   Build output directory: dist
   Root directory: / (leave empty)
   ```

5. **Add environment variables** (Optional)
   - If you need any environment variables, add them in the "Environment variables" section
   - For this project, none are required

6. **Save and Deploy**
   - Click "Save and Deploy"
   - Wait 2-3 minutes for the first build
   - Your site will be live at `https://your-project-name.pages.dev`

### Option 2: Direct Upload with Wrangler CLI

Use this method for manual deployments or if you prefer command-line deployment.

1. **Install Wrangler CLI** (one-time setup)
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build your site**
   ```bash
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist
   ```
   
   On first deployment, you'll be prompted to:
   - Enter a project name
   - Confirm the deployment

5. **View your site**
   - After deployment completes, you'll get a URL like `https://your-project-name.pages.dev`

## Custom Domain Setup

To use your own domain (e.g., `yourname.com`):

1. **In Cloudflare Pages dashboard**
   - Go to your project
   - Click "Custom domains" tab
   - Click "Set up a custom domain"

2. **Add your domain**
   - Enter your domain name
   - Follow the instructions to update your DNS records
   - Wait for DNS propagation (usually 5-15 minutes)

## Updating the Site URL

After deployment, update the site URL in your configuration:

1. **Edit `astro.config.mjs`**
   ```javascript
   export default defineConfig({
     output: 'static',
     site: 'https://your-actual-site.pages.dev', // Update this!
   });
   ```

2. **Edit `src/pages/index.astro`**
   - Update the `structuredData.url` field around line 17
   ```javascript
   "url": "https://your-actual-site.pages.dev",
   ```

3. **Commit and push** (if using Git integration, this will trigger a new deployment)

## Verifying the Deployment

After deployment, verify that:

1. ✅ CSS is loading (site should have professional styling, not plain HTML)
2. ✅ JavaScript is working (interactive network topology should function)
3. ✅ Images are loading (certification logos)
4. ✅ Links work correctly
5. ✅ Responsive design works on mobile devices

## Troubleshooting

### CSS/JS not loading
- **Symptom**: Site appears as plain HTML
- **Solution**: Verify that `base` is NOT set in `astro.config.mjs`
- **Check**: Look at page source, CSS should reference `/_astro/...` NOT `/personal-website/_astro/...`

### Build fails
- **Common causes**:
  - Node.js version mismatch (ensure Node 18+)
  - Missing dependencies (run `npm install`)
  - Syntax errors in code

### 404 Errors
- **Solution**: Ensure build output directory is set to `dist` in Cloudflare
- **Check**: Verify files exist in `dist/` folder after building locally

## Automatic Deployments

With Git integration:
- **Automatic**: Every push to your main branch triggers a deployment
- **Branch previews**: Pull requests get preview URLs automatically
- **Rollback**: Easily rollback to previous deployments in the Cloudflare dashboard

## Performance

Cloudflare Pages provides:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Instant cache invalidation
- ✅ Unlimited bandwidth (on free plan)
- ✅ Fast builds (typically 1-2 minutes)

## Support

If you encounter issues:
1. Check the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)
2. Review build logs in the Cloudflare dashboard
3. Verify your configuration matches this guide

## Next Steps

After successful deployment:
1. ✅ Update your LinkedIn profile with your new site URL
2. ✅ Add your actual Cloudflare Pages URL to README.md
3. ✅ Update contact information in the site
4. ✅ Add your actual resume.pdf to the public folder
5. ✅ Customize the content to match your experience

Enjoy your new professional website! 🚀
