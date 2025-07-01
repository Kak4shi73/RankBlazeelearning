# Deployment Guide for RankBlaze Learning Platform

## Pre-deployment Checklist

✅ **Build Process**: The project builds successfully with `npm run build`
✅ **Firebase Configuration**: Firebase config is set up in `src/config/firebase.ts`
✅ **Vercel Configuration**: `vercel.json` is configured for optimal deployment
✅ **Environment Variables**: `.env.example` shows required variables
✅ **Git Ignore**: Proper `.gitignore` excludes sensitive files

## Quick Deployment Steps

### Method 1: Vercel Dashboard (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Configure Environment Variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add Firebase config variables with `VITE_` prefix

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy**:
   ```bash
   vercel login
   vercel
   ```

## Important Notes

### Firebase Configuration
- Current config is hardcoded in `src/config/firebase.ts`
- For production, consider using environment variables
- Ensure Firebase Authentication is enabled for your domain

### Domain Configuration
- Add your Vercel domain to Firebase Auth authorized domains
- Go to Firebase Console → Authentication → Settings → Authorized domains
- Add: `your-project-name.vercel.app`

### Build Optimization
- Current bundle size: ~516KB (warning shown)
- Consider code splitting for better performance
- Firebase adds significant bundle size

## Post-Deployment

1. **Test Authentication**:
   - Test email/password signup
   - Test Google sign-in
   - Test logout functionality

2. **Performance Check**:
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Monitor bundle size

3. **Firebase Security**:
   - Review Firebase Security Rules
   - Set up proper user permissions
   - Monitor authentication logs

## Troubleshooting

### Common Issues:

1. **Firebase Auth Domain Error**:
   - Add Vercel domain to Firebase authorized domains

2. **Build Failures**:
   - Check TypeScript errors: `npm run lint`
   - Verify all imports are correct

3. **Environment Variables**:
   - Ensure all `VITE_` prefixed variables are set
   - Restart deployment after adding env vars

## Monitoring

- **Vercel Analytics**: Enable in project settings
- **Firebase Analytics**: Already configured
- **Error Tracking**: Consider adding Sentry

---

**Your website is now ready for deployment! 🚀**

Contact: aryanrajawat.2311@gmail.com