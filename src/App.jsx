import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import VibeApp from './pages/VibeApp'
import ExplorePage from './pages/ExplorePage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage type="login" />} />
      <Route path="/register" element={<AuthPage type="register" />} />
      <Route path="/vibe" element={<VibeApp />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
