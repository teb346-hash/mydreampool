# Installation Guide

## 🚀 Runtime Environment Setup

### 1. Install Node.js

**Download and install Node.js (version 16 or higher):**
- Visit [nodejs.org](https://nodejs.org/)
- Download the LTS (Long Term Support) version
- Run the installer and follow the setup wizard
- Verify installation by running: `node --version` and `npm --version`

### 2. Install Project Dependencies

**Navigate to your project directory and install dependencies:**
```bash
cd mydreampool-portfolio
npm install
```

This will install:
- React 18.2.0
- Vite 4.5.0
- Tailwind CSS 3.3.5
- Framer Motion 10.16.4
- PostCSS and Autoprefixer
- ESLint and development tools

### 3. Start Development Server

**Run the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

**Create production build:**
```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🎨 Tailwind CSS Features

### Custom Theme
- **Primary Colors**: Indigo palette (50-900)
- **Secondary Colors**: Pink palette (50-900)  
- **Accent Colors**: Cyan palette (50-900)
- **Custom Gradients**: Primary and secondary gradients
- **Custom Animations**: Fade-in-up, float, smoke effects

### Component Classes
- `.btn` - Button styles with primary/secondary variants
- `.section` - Section spacing and layout
- `.section-title` - Gradient text headings
- `.card` - Card components with hover effects
- `.gradient-text` - Gradient text effect
- `.hover-lift` - Hover animation effects

## 📁 Project Structure

```
mydreampool-portfolio/
├── src/
│   ├── components/          # React components
│   ├── content.json         # Centralized content data
│   ├── index.css           # Tailwind CSS imports
│   ├── App.css             # Component styles
│   └── main.jsx            # App entry point
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json           # Dependencies
└── vite.config.js         # Vite configuration
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Automatic deployment on every push

### Manual Deployment
1. Run `npm run build`
2. Upload `dist` folder contents to your hosting provider

## 🎯 Next Steps

1. **Customize Content**: Edit `src/content.json` with your information
2. **Update Images**: Replace placeholder images with your photos
3. **Modify Colors**: Adjust colors in `tailwind.config.js`
4. **Add Sections**: Create new components and add to navigation
5. **Deploy**: Push to GitHub and connect to Vercel

## 🆘 Troubleshooting

### Common Issues

**Node.js version error:**
- Ensure Node.js version 16+ is installed
- Check with `node --version`

**Dependencies not installing:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Tailwind styles not applying:**
- Ensure Tailwind is properly imported in `src/index.css`
- Check `tailwind.config.js` content paths
- Restart development server

**Build errors:**
- Check for syntax errors in components
- Ensure all imports are correct
- Run `npm run lint` to check for issues

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the README.md for detailed information
3. Ensure all dependencies are properly installed
4. Verify Node.js version compatibility

