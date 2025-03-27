# FireMovies Frontend

## Project Overview
FireMovies is a modern web application for browsing and exploring movies, built with React and enhanced with various frontend technologies.

## Project Structure
```
src/
│
├── assets/                  # Static assets (images, icons, etc.)
│
├── components/              # Reusable React components
│   ├── AboutUs.jsx
│   ├── AddMovie.jsx
│   ├── AlphabeticList.jsx
│   ├── Carousel.jsx
│   ├── Footer.jsx
│   ├── Movies.jsx
│   ├── Navbar.jsx
│   ├── Slideshow.jsx
│   └── ViewMovies.jsx
│
├── config/                  # Configuration files
│   └── FirebaseConfig.jsx   # Firebase configuration
│
├── styles/                  # CSS stylesheets
│   ├── AboutUs.css
│   ├── AddMovie.css
│   ├── Carousel.css
│   ├── Footer.css
│   ├── Movies.css
│   ├── Navbar.css
│   ├── Slideshow.css
│   └── ViewMovies.css
│
├── context/                 # React context providers
│   └── (context files)
│
├── hooks/                   # Custom React hooks
│   └── (hook files)
│
├── pages/                   # Page components
│   └── (page components)
│
├── services/                # API and external service integrations
│   └── (service files)
│
├── utils/                   # Utility functions
│   └── (utility files)
│
├── App.jsx                  # Main application component
├── main.jsx                 # Entry point
├── index.html               # HTML template
│
├── package.json             # Project dependencies and scripts
└── vite.config.js           # Vite configuration
```

## Prerequisites
- Node.js (v14+ recommended)
- npm (v6+)
- Vite

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd firemovies-frontend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file for environment variables (if needed)
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
# Add other Firebase config variables
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Key Components

### Main Components
- `Navbar`: Site navigation
- `Carousel`: Movie showcase
- `Movies`: Movie listing
- `ViewMovies`: Detailed movie view
- `AddMovie`: Movie addition interface
- `Slideshow`: Movie slideshow display

### Styling
- Modular CSS approach
- Separate style files for each component

## Technologies Used
- React
- Vite
- Firebase
- CSS
- React Hooks
- Context API

## State Management
- Utilizes React Context for global state
- Custom hooks for complex logic

## Routing
React Router

## Firebase Integration
- Authentication
- Firestore Database
- Storage

## Deployment Link 
#https://rad-gumdrop-7d9b9d.netlify.app/

## Performance Optimization
- Vite for fast builds
- Code splitting
- Lazy loading

## Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License
MIT



