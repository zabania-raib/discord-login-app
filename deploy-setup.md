# Deployment Setup Guide

## Local Setup (Manual Steps)

Since there are PowerShell execution policy restrictions, follow these manual steps:

### 1. Set up Environment Variables
Create a `.env` file in your project root with:
```env
AUTH_SECRET=your-secret-key-here-make-it-long-and-random
AUTH_URL=http://localhost:3000
AUTH_DISCORD_ID=your-discord-client-id
AUTH_DISCORD_SECRET=your-discord-client-secret
AUTH_DEBUG=true
```

### 2. Set up Database
Run these commands in your terminal:
```bash
# Generate Prisma client
npx prisma generate

# Create and push database schema
npx prisma db push
```

### 3. Test Locally
```bash
npm run dev
```

## Netlify Deployment

### 1. Push to GitHub
```bash
git add .
git commit -m "Setup for Netlify deployment"
git push origin main
```

### 2. Connect to Netlify
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. Set Environment Variables in Netlify
1. Go to Site settings > Environment variables
2. Add these variables:
   - `AUTH_SECRET` (same as local)
   - `AUTH_DISCORD_ID` (same as local)
   - `AUTH_DISCORD_SECRET` (same as local)
   - `AUTH_URL` (your Netlify domain, e.g., `https://your-app.netlify.app`)

### 4. Update Discord App Settings
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Add your Netlify callback URL:
   `https://your-app.netlify.app/api/auth/callback/discord`

### 5. Deploy
Netlify will automatically deploy when you push to your main branch.

## Database Location
Your SQLite database will be stored at `prisma/dev.db` and will be included in your deployment.

## Troubleshooting

### PowerShell Execution Policy
If you get execution policy errors, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Database Issues
If the database isn't created, manually run:
```bash
npx prisma generate
npx prisma db push
```

### Build Issues
Make sure all environment variables are set in Netlify before deploying. 