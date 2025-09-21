# mydreampool
This repository is just for deploying my portfolio app with vercel.
## My skills
### Full-Stack
Python , JavaScript ,  TypeScript , React.js , Next.js ,  Node.js ,  FastAPI , 
### Databases**
 PostgreSQL ,  MySQL ,  MongoDB ,  Redis , 
### Cloud / DevOps** 
 AWS ,  GCP ,  Azure ,  Docker ,  Kubernetes ,  Terraform ,  Pulumi ,  CI/CD (GitHub Actions, GitLab CI, Jenkins, ArgoCD) ,  Prometheus ,  Grafana ,  ELK Stack , 
### AI / Data** 
 Machine Learning ,  Deep learning ,  Large Language Models ,  Generative AI ,  PyTorch ,  TensorFlow ,  Hugging Face ,  OpenAI API ,  MLflow ,  Kubeflow ,  Apache Kafka ,  Message queues , 
### Security / Blockchain**
 Web security (OAuth2, JWT, Zero-Trust) ,  Smart Contract (Solidity, ethers.js)  

 
With mydreampool, I am gonna show off my experience.


# My Dream Pool - Portfolio Website

A modern, responsive portfolio website built with React + Vite, featuring smooth animations, a mysterious smoke-like mouse effect, and a content-management approach with centralized data.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Single-page application with smooth scrolling between sections
- **Content Management**: All content centralized in `content.json` for easy updates
- **Interactive Effects**: Mysterious smoke-like particles that follow mouse movement
- **Project Showcase**: Animated project cards with hover effects
- **Experience Timeline**: Professional experience with expandable achievements
- **Skills Visualization**: Interactive skill bars with animations
- **Vercel Ready**: Optimized for deployment on Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mydreampool-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
mydreampool-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Top navigation with smooth scrolling
│   │   ├── Hero.jsx           # Landing section with profile info
│   │   ├── About.jsx          # About me section
│   │   ├── Skills.jsx         # Skills showcase with progress bars
│   │   ├── Projects.jsx       # Projects grid container
│   │   ├── ProjectCard.jsx    # Individual project cards
│   │   ├── Experience.jsx     # Experience timeline container
│   │   ├── ExperienceCard.jsx  # Individual experience cards
│   │   └── SmokeEffect.jsx    # Mysterious mouse effect
│   ├── content.json           # Centralized content data
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
├── public/
├── package.json
├── vite.config.js
├── vercel.json              # Vercel deployment configuration
└── README.md
```

## 🎨 Customization

### Updating Content

All content is managed through `src/content.json`. Simply edit this file to update:

- Personal information (name, title, description, social links)
- Skills and proficiency levels
- Projects with images, descriptions, and links
- Professional experience and achievements
- About section content

### Styling

- Global styles: `src/index.css`
- Component-specific styles: `src/App.css`
- CSS variables for easy theme customization
- Responsive design with mobile-first approach

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the section data to `content.json`
3. Import and add the component to `App.jsx`
4. Update navigation in `Navigation.jsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your site
4. Your site will be available at `https://your-project.vercel.app`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production build
3. Deploy the contents of `dist` to your hosting provider

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance Features

- Optimized images and assets
- Lazy loading for better performance
- Smooth animations with Framer Motion
- Efficient re-renders with React best practices
- Minimal bundle size with Vite

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

Made with ❤️ using React + Vite
