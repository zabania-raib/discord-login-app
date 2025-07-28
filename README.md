# Discord Login App

A Next.js application with Discord authentication using NextAuth.js and a local SQLite database.

## Features

- Discord OAuth authentication
- Local SQLite database storage
- NextAuth.js integration
- TypeScript support
- Ready for Netlify deployment

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd discord-login-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with:
   ```env
   AUTH_SECRET=your-secret-key-here
   AUTH_DISCORD_ID=your-discord-client-id
   AUTH_DISCORD_SECRET=your-discord-client-secret
   AUTH_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Management

- **Generate Prisma client**: `npm run db:generate`
- **Push schema changes**: `npm run db:push`
- **Create migration**: `npm run db:migrate`
- **Open Prisma Studio**: `npm run db:studio`

## Discord App Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to OAuth2 settings
4. Add redirect URI: `http://localhost:3000/api/auth/callback/discord`
5. Copy Client ID and Client Secret to your `.env` file

## Netlify Deployment

1. **Push your code to GitHub**

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

3. **Set environment variables in Netlify**
   - Go to Site settings > Environment variables
   - Add the same environment variables from your `.env` file
   - Update `AUTH_URL` to your Netlify domain

4. **Deploy**
   - Netlify will automatically deploy when you push to your main branch

## Database Location

The SQLite database is stored locally in your project at:
- `prisma/dev.db` (development)
- The database file is included in your project and will be deployed with your app

## Project Structure

```
discord-login-app/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── prisma/                # Database schema and migrations
│   └── schema.prisma      # Prisma schema
├── auth.ts                # NextAuth configuration
├── next.config.mjs        # Next.js configuration
├── netlify.toml           # Netlify configuration
└── package.json           # Dependencies and scripts
```

## Troubleshooting

- **Database issues**: Run `npm run db:generate` and `npm run db:push`
- **Build errors**: Make sure all environment variables are set
- **Authentication issues**: Verify Discord app settings and redirect URIs

## License

MIT