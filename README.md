# RankBlaze Learning Platform

A modern e-learning platform built with React, TypeScript, and Firebase authentication.

## Features

- 🔐 Firebase Authentication (Email/Password & Google Sign-in)
- 📱 Responsive Design with Tailwind CSS
- 🎨 Modern UI with Lucide React Icons
- 🚀 Fast Development with Vite
- 📚 Course Management System
- 👤 User Profile Management

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Firebase project (for authentication)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd RankBlazeelearning
```

2. Install dependencies
```bash
npm install
```

3. Configure Firebase
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password and Google providers
   - Copy your Firebase config to `src/config/firebase.ts`

4. Start development server
```bash
npm run dev
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Login to Vercel
```bash
vercel login
```

3. Deploy
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Vite project and configure the build settings

### Environment Variables

If you need to add environment variables for Firebase config:

1. In Vercel Dashboard, go to your project settings
2. Navigate to "Environment Variables"
3. Add your Firebase configuration variables:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - etc.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with auth
│   ├── Footer.tsx      # Footer component
│   ├── LoginModal.tsx  # Login modal
│   ├── SignupModal.tsx # Signup modal
│   └── ...
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── config/             # Configuration files
│   └── firebase.ts     # Firebase configuration
├── pages/              # Page components
├── types/              # TypeScript type definitions
└── data/               # Static data
```

## Contact

- Email: aryanrajawat.2311@gmail.com
- Phone: +91 9891474595
- Location: Faridabad, Haryana, India

## License

This project is private and proprietary.