# 🎬 Netflix Clone - Next.js 15 Edition

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Deployed-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

A high-performance, responsive Netflix clone built with **Next.js 15**, **React 19**, and the **TMDB API**. This project features dynamic movie rows, a stunning hero banner, and YouTube trailer playback integration.

---

## 🚀 Live Demo

Check out the live application here: [Netflix Clone Demo](https://netflix-clone-4debc.web.app/)

---

## 📸 Preview

![Netflix Clone Preview](https://user-images.githubusercontent.com/96056167/184530833-72c917e4-5cfc-46ca-9258-c2c84d534bc5.png)

---

## ✨ Key Features

- **Dynamic Content**: Fetches real-time movie and TV show data from TMDB API.
- **Hero Banner**: Features featured trending content with a dynamic background.
- **Movie Rows**: Multiple categories (Trending, Netflix Originals, Top Rated, etc.) with horizontal scrolling.
- **Trailer Playback**: Click on any movie thumbnail to instantly watch its trailer (powered by `react-youtube` and `movie-trailer`).
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile viewing.
- **Glassmorphism UI**: Modern navigation bar with scroll-triggered background transitions.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **API**: [TMDB API](https://www.themoviedb.org/documentation/api)
- **Styling**: Vanilla CSS (Custom project design)
- **HTTP Client**: Axios
- **Trailer Integration**: `react-youtube` & `movie-trailer`
- **Deployment**: Firebase Hosting

---

## 📥 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Sha7hid/Netflix-Clone.git
cd Netflix-Clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory and add your TMDB API key:
```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📦 Deployment

This project is configured for **Firebase Hosting**. To deploy your own version:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
4. Deploy: `npm run build && firebase deploy`

---

## 📜 Acknowledgments

- Data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).
- Inspired by the Netflix UI/UX.

---

Developed with ❤️ by [Shahid](https://github.com/Sha7hid)
