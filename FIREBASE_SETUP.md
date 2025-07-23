# 🔥 Firebase Authentication Setup Guide

## The Problem
Your login/signup is not working on the live website because of Firebase configuration issues.

## 🚨 IMMEDIATE FIXES NEEDED

### 1. Add Your Live Domain to Firebase
**This is the most likely cause of your issue!**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `rankblaze-138f7`
3. Go to **Authentication** → **Settings** → **Authorized domains**
4. Click **Add domain**
5. Add your live website domain (e.g., `your-project.vercel.app`)

### 2. Enable Authentication Methods

1. In Firebase Console → **Authentication** → **Sign-in method**
2. Enable these providers:
   - ✅ **Email/Password** (should be enabled)
   - ✅ **Google** (configure with your OAuth 2.0 credentials)

### 3. Configure Google OAuth (if using Google Sign-in)

1. In Firebase Console → **Authentication** → **Sign-in method** → **Google**
2. Enable Google sign-in
3. Add your domain to **Authorized domains**
4. Configure OAuth consent screen in Google Cloud Console

## 🧪 Testing Your Fixes

### Method 1: Check Browser Console
1. Open your live website
2. Press F12 → Console tab  
3. Try to login/signup
4. Look for Firebase error messages:
   - `auth/unauthorized-domain` → Add domain to Firebase
   - `auth/popup-blocked` → Allow popups for Google sign-in
   - `auth/network-request-failed` → Check internet connection

### Method 2: Use Debug Component
The AuthDebug component will show in development mode and display:
- Firebase initialization status
- Authentication state
- Current domain

## 🔧 Code Changes Made

### Enhanced Error Handling
- Better error messages in `LoginModal.tsx` and `SignupModal.tsx`
- Specific error codes for different Firebase auth errors
- Network error detection

### Firebase Configuration
- Added analytics check for browser environment
- Enabled device language for auth
- Better error handling in `firebase.ts`

### Debug Component
- Created `AuthDebug.tsx` for development testing
- Shows Firebase status and auth state
- Only visible in development mode

## 🚀 Deploy Instructions

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to your hosting**:
   - If using Vercel: `vercel --prod`
   - If using Netlify: drag `dist` folder to Netlify

3. **Test immediately after deployment**:
   - Try email signup with a test email
   - Try Google sign-in
   - Check browser console for errors

## 🔍 Common Error Solutions

| Error Code | Solution |
|------------|----------|
| `auth/unauthorized-domain` | Add your domain to Firebase authorized domains |
| `auth/popup-blocked` | Enable popups for your website |
| `auth/network-request-failed` | Check internet connection and Firebase status |
| `auth/api-key-not-valid` | Verify API key in Firebase config |
| `auth/project-not-found` | Check project ID in Firebase config |

## 📞 Quick Test

After deployment, try this test account:
- Email: `test@example.com`
- Password: `test123`

If signup works, the issue was domain authorization!

## 🎯 Final Checklist

- [ ] Added live domain to Firebase authorized domains
- [ ] Enabled Email/Password authentication
- [ ] Configured Google OAuth (if using)
- [ ] Deployed latest code changes
- [ ] Tested login/signup on live site
- [ ] Checked browser console for errors

---

**Need help?** The enhanced error messages will now show exactly what's wrong in the browser console.

Your authentication should work after adding the domain to Firebase! 🎉