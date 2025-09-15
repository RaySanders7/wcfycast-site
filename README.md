# We Comin' For You Cast - Podcast Website

A modern, responsive podcast website built with Astro, Tailwind CSS, and Decap CMS for content management.

## 🎙️ Features

- **Modern Design**: Beautiful, responsive design optimized for all devices
- **Episode Management**: Integrated Decap CMS for easy episode content management
- **Media Players**: Embedded YouTube and Audiomack players for each episode
- **SEO Optimized**: Built-in SEO features with proper meta tags and structured data
- **Fast Performance**: Static site generation with Astro for lightning-fast loading
- **Content Collections**: Organized episode content with TypeScript validation

## 🚀 Project Structure

```text
/
├── public/
│   ├── admin/              # Decap CMS admin interface
│   ├── uploads/            # Media uploads from CMS
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── EpisodePlayer.astro
│   ├── content/
│   │   ├── episodes/       # Episode markdown files
│   │   └── config.ts       # Content collection schema
│   ├── layouts/
│   │   └── Layout.astro    # Main site layout
│   └── pages/
│       ├── episodes/
│       │   ├── [id].astro  # Individual episode pages
│       │   └── index.astro # Episodes listing
│       ├── about.astro     # About page
│       └── index.astro     # Homepage
└── static/
    └── admin/
        └── config.yml      # Decap CMS configuration
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 Content Management

### Using Decap CMS

1. After deployment, access the CMS at `yoursite.com/admin`
2. Authenticate using Netlify Identity or your chosen authentication provider
3. Create and manage episodes through the intuitive interface
4. Episodes are stored as markdown files in `src/content/episodes/`

### Manual Content Creation

You can also create episodes manually by adding markdown files to `src/content/episodes/` with the following frontmatter:

```yaml
---
title: "Episode Title"
date: "2023-04-10"
description: "Brief episode description"
longDescription: "Detailed episode description"
duration: "1:25:36"
youtubeId: "VIDEO_ID"
audiomackUrl: "https://audiomack.com/your-episode-url"
image: "/path-to-episode-image.jpg"
tags: ["tag1", "tag2"]
hostNotes:
  - "00:01:30 - Topic 1"
  - "00:15:45 - Topic 2"
draft: false
---
```

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable Netlify Identity for CMS authentication
5. Configure Git Gateway in Netlify Identity settings

### Other Platforms

The site can be deployed to any static hosting platform:
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 🎨 Customization

### Colors & Branding

The site uses a red and yellow color scheme that can be customized in:
- `src/layouts/Layout.astro` - Global styles
- Tailwind CSS classes throughout components

### Content

- Update site title and description in `src/layouts/Layout.astro`
- Modify team information in `src/pages/about.astro`
- Customize episode data structure in `src/content/config.ts`

## 🔧 Configuration

### Decap CMS

CMS configuration is in `static/admin/config.yml`. Modify this file to:
- Change authentication providers
- Add new content types
- Customize field types and validation

### Astro

Site configuration is in `astro.config.mjs`. Current setup includes:
- Tailwind CSS integration
- Static file serving for admin panel

## 📱 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Episode Players**: Embedded YouTube and Audiomack players
- **SEO Friendly**: Proper meta tags, structured data, and semantic HTML
- **Fast Loading**: Static site generation with optimized assets
- **Content Management**: Easy-to-use CMS for non-technical users
- **Social Sharing**: Built-in social media sharing buttons

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For support or questions:
- Check the [Astro documentation](https://docs.astro.build)
- Review [Decap CMS documentation](https://decapcms.org/docs/)
- Open an issue in this repository
