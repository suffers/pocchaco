# Suffers - Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases professional work, skills, and projects with a clean, minimalist design and seamless GitHub integration.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **GitHub Integration**: Dynamic project showcase using GitHub API
- **TypeScript**: Full type safety and enhanced developer experience
- **Performance Optimized**: Built with Next.js 16 and React 19
- **SEO Ready**: Optimized for search engines and social sharing

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **GitHub API**: [Octokit](https://github.com/octokit/octokit.js)
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/suffers.git
cd suffers
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your GitHub token (optional, for higher API rate limits):
```env
GITHUB_TOKEN=your_github_token_here
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Hero.tsx        # Landing hero section
│   │   ├── Navigation.tsx  # Site navigation
│   │   ├── ProjectCard.tsx # Individual project display
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── Skills.tsx      # Skills section
│   ├── lib/
│   │   └── github.ts       # GitHub API integration
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
```

## 🎨 Customization

### Personal Information
Update the following files to customize your portfolio:

- `src/app/components/Hero.tsx` - Update name and title
- `src/app/components/About.tsx` - Modify bio and skills
- `src/app/components/Contact.tsx` - Add contact information

### GitHub Integration
The portfolio automatically fetches your GitHub repositories. Update the username in the GitHub API calls within the components to display your projects.

### Styling
The project uses Tailwind CSS for styling. Customize colors, fonts, and layouts by modifying the Tailwind classes in the component files.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or collaboration opportunities, please reach out through the contact form on the website or connect with me on GitHub.

---

Built with ❤️ using Next.js and TypeScript
