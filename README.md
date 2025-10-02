# Blue Balls SvelteKit App

A SvelteKit app based on the original Blue Balls HTML game with user authentication and high scores.

## Features

- 🎮 Full game functionality converted from HTML/JS to SvelteKit
- 🔐 User authentication with Supabase
- 🏆 Global leaderboard and high score tracking
- 📱 Responsive design for mobile and desktop
- 🎯 Score saving to database
- 🚀 Fast, modern SvelteKit architecture
- 💳 Stripe integration for premium subscriptions
- 📊 Advanced analytics and dashboard
- 🎨 Modern dark theme with glassmorphism effects

## Setup Instructions

### 1. Database Setup (Supabase)

Run the provided SQL scripts to set up your database schema:

- `database-setup.sql` - Main database schema
- `subscription_schema.sql` - Stripe subscription tables
- `migration_progression_system.sql` - User progression system

### 2. Environment Variables

Create a `.env` file with your credentials:

```env
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PUBLIC_SUPABASE_URL=your_supabase_url
VITE_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 3. Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── GameCanvas.svelte          # Main game component
│   │   ├── LeaderboardDisplay.svelte  # Leaderboard component
│   │   ├── LivesDisplay.svelte        # Lives system UI
│   │   ├── LoginForm.svelte           # Login form
│   │   ├── ProgressionDisplay.svelte  # User progression UI
│   │   └── RegisterForm.svelte        # Registration form
│   ├── livesSystem.ts                 # Lives management system
│   ├── progressionSystem.ts           # User progression logic
│   ├── stores.ts                      # Svelte stores
│   ├── stripe.ts                      # Stripe client
│   ├── subscriptionStore.ts           # Subscription management
│   └── supabase.ts                    # Supabase client
├── routes/
│   ├── +layout.svelte                 # Main layout
│   ├── +page.svelte                   # Homepage with game
│   ├── api/                           # API endpoints
│   ├── dashboard/                     # User dashboard
│   ├── leaderboard/                   # Leaderboard page
│   ├── subscription/                  # Premium subscription
│   └── ...
└── app.css                            # Global styles
```

## Game Features

- **Authentication**: Complete user registration and login system
- **Game Play**: Full Blue Balls game with modern enhancements
- **Lives System**: Energy-based gameplay with regeneration
- **Progression**: Level and tier-based advancement
- **Leaderboards**: Multiple leaderboard types (levels, tiers, scores)
- **Premium Subscriptions**: Stripe-powered premium features
- **Dashboard**: Comprehensive user analytics and settings
- **Responsive Design**: Optimized for all devices
- **Dark Theme**: Modern glassmorphism design

## Technologies Used

- **SvelteKit** - Modern web framework
- **TypeScript** - Type safety
- **Supabase** - Backend as a service
- **PostgreSQL** - Database via Supabase
- **Stripe** - Payment processing
- **Canvas API** - Game rendering
- **CSS Custom Properties** - Dynamic theming

## Deployment

The app can be deployed to any platform supporting SvelteKit. Environment variables need to be configured for Supabase and Stripe integration.

## Development Notes

This project includes comprehensive database management scripts, advanced user progression systems, and modern web development practices. See the individual documentation files for detailed setup instructions.