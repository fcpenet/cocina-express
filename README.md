# Cocina Meals - Restaurant Menu

A beautiful, responsive Filipino restaurant menu built with Next.js and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Static site generation for fast loading
- 🚀 Automated deployment to GitHub Pages

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

```bash
npm run build
```

This will generate a static site in the `out` directory.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup Instructions:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Push your code to the main branch
5. The workflow will automatically build and deploy your site

Your site will be available at: `https://[your-username].github.io/cocina-express/`

### Manual Deployment

You can also trigger the deployment manually:

1. Go to the **Actions** tab in your repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Customization

- Edit the menu items in `app/page.tsx`
- Modify colors and styles in `app/globals.css` and Tailwind config
- Update restaurant information in the header and footer

## License

MIT
