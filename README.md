# Cyber Ed Group 7 - Cybersecurity Education WebApp

A comprehensive cybersecurity education platform built with modern web technologies to teach security fundamentals and best practices.

## 🛡️ Project Overview

Cyber Ed Group 7 is a full-stack web application designed to provide interactive cybersecurity education, threat awareness, and security best practices to users of all technical levels.

## ✨ Features

### 🎯 Core Functionality
- **Interactive Learning Modules** - Step-by-step cybersecurity tutorials
- **Live Threat Intelligence** - Real-time cybersecurity news and updates
- **Security Assessment** - Tools to evaluate your digital security posture
- **Best Practices Guide** - Actionable security recommendations
- **Progress Tracking** - Monitor your learning journey

### 🎨 User Experience
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Modern UI/UX** - Clean, intuitive interface with cyber-themed design
- **Dark/Light Mode** - Comfortable viewing in any lighting
- **Accessibility** - WCAG compliant design patterns

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **Shadcn/UI** - Reusable component library
- **Lucide React** - Beautiful icons

### Backend & Deployment
- **Firebase Hosting** - Global CDN deployment
- **Firebase Functions** - Serverless backend API
- **NewsAPI** - Real-time news integration

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase CLI (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/cyber-ed-group7.git
   cd cyber-ed-group7
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create `.env.local` file:
   ```env
   VITE_NEWS_API_KEY=your_newsapi_key_here
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
cyber-ed-group7/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn/ui components
│   │   └── sections/       # Page sections
│   ├── pages/              # Main application pages
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
├── functions/              # Firebase Cloud Functions
└── firebase.json          # Firebase configuration
```

## 🎯 Key Components

### News Component
- Real-time cybersecurity news feed
- Fallback to curated content when API unavailable
- Beautiful card-based layout with hover effects
- Manual refresh capability

### Learning Modules
- Interactive cybersecurity lessons
- Progress tracking
- Quiz assessments
- Certificate generation

### Security Tools
- Password strength checker
- Privacy audit tools
- Security configuration guides

## 🔧 Configuration

### NewsAPI Integration
1. Get free API key from [NewsAPI.org](https://newsapi.org)
2. Add to environment variables:
   ```env
   VITE_NEWS_API_KEY=c058acc2bd954546812b5aa6ab753a39
   ```

### Firebase Setup
1. Create Firebase project
2. Enable Hosting and Functions
3. Configure firebase.json with your settings

## 🚀 Deployment

### Firebase Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

### Environment-specific Deployments
- **Production**: `main` branch auto-deploys to live site
- **Staging**: `develop` branch for testing
- **Preview**: PR deployments for review

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- Use TypeScript for type safety
- Follow React best practices
- Write meaningful component and variable names
- Include proper error handling
- Ensure mobile responsiveness

## 🐛 Troubleshooting

### Common Issues

**News Feed Not Loading**
- Check NewsAPI key in environment variables
- Verify CORS configuration for Firebase Functions
- Ensure API rate limits aren't exceeded

**Build Failures**
- Clear node_modules and reinstall dependencies
- Check TypeScript compilation errors
- Verify all environment variables are set

**Deployment Issues**
- Ensure Firebase CLI is logged in
- Verify firebase.json configuration
- Check project permissions in Firebase console

## 📞 Support

- **Documentation**: [Project Wiki]()
- **Issues**: [GitHub Issues]()
- **Discussions**: [Community Forum]()
- **Email**: kasubaemmanuel@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NewsAPI** for providing news data
- **Shadcn/UI** for component inspiration
- **Firebase** for hosting and serverless functions
- **Tailwind CSS** for utility-first CSS framework

## 🔄 Changelog

### v1.0.0 (Current)
- Initial release with core cybersecurity modules
- Real-time news integration
- Responsive design implementation
- Firebase deployment setup

---

**Built with ❤️ by Cyber Ed Group 7 - Making cybersecurity education accessible to everyone.**
