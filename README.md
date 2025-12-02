# RENTSPHERE - Next.js Demo

This is a demo Next.js project for RENTSPHERE. It includes:
- Homepage (styled)
- Login (mock)
- Upload property form (saves to Supabase if configured)
- Dashboard showing properties
- Demo Mpesa and MasterCard API endpoints (simulated)

## Run locally

1. Copy `.env.example` to `.env.local` and fill values (Supabase URL & Key if you want real storage).
2. Install dependencies:
   ```
   npm install
   ```
3. Run dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Deploy to Vercel
- Push repository to GitHub and import into Vercel.
- Set environment variables on Vercel (see `.env.example`).

