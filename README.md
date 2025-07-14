# Suvojeet Sengupta - Professional Singer Website

A modern, responsive website for a professional singer featuring YouTube videos, reels, and contact information.

## Features

- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion animations
- **Professional Sections**:
  - Hero section with introduction
  - About section with profile image
  - YouTube videos showcase
  - Reels & shorts gallery
  - Contact form and social media links

## Technologies Used

- React 18
- Vite (Build tool)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- Shadcn/UI (UI Components)
- Lucide React (Icons)

## GitHub Pages Deployment

### Method 1: Using GitHub Actions (Recommended)

1. Push this code to your GitHub repository
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as the source
4. Create `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pages: write
      id-token: write
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: pnpm/action-setup@v2
      with:
        version: '8' # Specify pnpm version
        run_install: false # Do not run install automatically

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'pnpm'
        
    - name: Install dependencies
      run: pnpm install --no-frozen-lockfile
      
    - name: Build
      run: pnpm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Method 2: Manual Deployment

1. Build the project: `npm run build`
2. Push the `dist` folder contents to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Local Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm run dev
   ```

3. Build for production:
   ```bash
   pnpm run build
   ```

## Customization

### Adding Your YouTube Videos

Edit the `youtubeVideos` array in `src/App.jsx`:

```javascript
const youtubeVideos = [
  {
    id: 'YOUR_VIDEO_ID',
    title: 'Your Video Title',
    description: 'Your video description',
    thumbnail: `https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg`
  },
  // Add more videos...
]
```

### Updating Contact Information

Update the contact details in the contact section of `src/App.jsx`.

### Changing Colors and Styling

The website uses Tailwind CSS. You can customize colors by modifying the gradient classes and color schemes in the components.

## File Structure

```
singer-website/
├── public/
├── src/
│   ├── assets/
│   │   └── profile_image.jpg
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Support

For any issues or customizations, please refer to the documentation of the used technologies:
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)

---

**Developed by Suvojeet**

