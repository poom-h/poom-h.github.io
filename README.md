# 🌿 Vanilla Promotion Frontend

A React-based frontend application to promote vanilla with an integrated survey. The site follows a "Natural Minimalism" theme and focuses on educating users about vanilla while collecting feedback through a survey.

## 🚀 Features

- **Educational Content**: Comprehensive information about vanilla cultivation, forms, and uses
- **Survey Integration**: Google Forms integration for user feedback collection
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: WCAG 2.2 AA compliant
- **Performance**: Optimized for Core Web Vitals
- **Analytics**: Google Analytics 4 integration

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Helmet Async** for SEO
- **Local Storage** for data persistence

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Site navigation
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section component
│   ├── ContentSection.tsx # Content display component
│   ├── SurveyButton.tsx   # Survey integration
│   └── SEO.tsx         # SEO meta tags
├── pages/              # Page components
│   ├── About.tsx       # About Us page
│   ├── VanillaInfo.tsx # Vanilla information page
│   ├── Survey.tsx      # Survey page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts # Local storage hook
├── utils/              # Utility functions
│   └── analytics.ts    # Analytics tracking
├── data/               # Content and configuration
│   ├── content.ts      # Page content
│   └── survey.ts       # Survey configuration
├── types/              # TypeScript type definitions
│   └── index.ts        # Type definitions
└── styles/             # Global styles
    └── index.css       # Tailwind CSS imports
```

## 🎨 Design System

### Color Palette

- **Primary Brown**: `#5C4033` - Vanilla bean brown
- **Cream**: `#FAF3E0` - Vanilla essence cream
- **Accent Green**: `#6B8E23` - Leaf green for highlights
- **Neutral Gray**: `#E5E5E5` - Light gray for sections

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 🚀 Getting Started

### Prerequisites

- Node.js 20.14.0 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd vanilla-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp env.example .env.local
```

4. Update `.env.local` with your actual values:

```bash
VITE_GA_MEASUREMENT_ID=your_ga_measurement_id
VITE_SURVEY_URL=https://forms.gle/your-google-form-id
VITE_SITE_URL=https://your-domain.com
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🎯 Pages

### About Us (`/about`)

- Hero section with vanilla background
- Organization overview and mission
- Call-to-action for survey

### Vanilla Info (`/vanilla`)

- Educational content about vanilla
- Cultivation basics and forms
- Quality indicators and uses

### Survey (`/survey`)

- Google Form integration
- Privacy notice
- User-friendly interface

## 🔧 Configuration

### Survey Integration

Update the survey URL in `src/data/survey.ts`:

```typescript
export const surveyConfig: SurveyConfig = {
  url: "https://forms.gle/your-actual-form-id",
  // ... other config
};
```

### Analytics

Add your Google Analytics Measurement ID to `.env.local`:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Content Management

Update content in `src/data/content.ts` to modify page text and images.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app is a static site and can be deployed to any static hosting service:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

## 📊 Performance

The app is optimized for Core Web Vitals:

- **LCP**: ≤ 2.5s
- **CLS**: ≤ 0.1
- **INP**: ≤ 200ms

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Semantic HTML structure

## 🧪 Testing

Run the following commands to test the application:

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For support, email info@vanillaexperts.com or create an issue in the repository.
