import React, { useState, useEffect } from 'react';
import { Music, Sun, CloudRain, Zap, Coffee, Target, LogOut, Sparkles, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import VibeBackground from '../components/VibeBackground';

const moods = [
  { id: 'energetic', icon: <Zap size={20} />, label: 'Energetic', color: '#FF2D55', desc: 'Accelerated rhythm' },
  { id: 'chill', icon: <Coffee size={20} />, label: 'Chill', color: '#5856D6', desc: 'Ambient transients' },
  { id: 'rainy', icon: <CloudRain size={20} />, label: 'Rainy', color: '#007AFF', desc: 'Textured atmosphere' },
  { id: 'focused', icon: <Target size={20} />, label: 'Focused', color: '#34C759', desc: 'Engineered flow' },
];

const songsByMood = {
  energetic: "https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF?utm_source=generator&theme=0",
  chill: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0",
  rainy: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator&theme=0",
  focused: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0",
};

const VibeApp = () => {
  const [currentMood, setCurrentMood] = useState('chill');
  const [weather, setWeather] = useState('Sunny');
  const navigate = useNavigate();

  useEffect(() => {
    const weathers = ['Sunny', 'Rainy', 'Cloudy'];
    setWeather(weathers[Math.floor(Math.random() * weathers.length)]);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const currentMoodObj = moods.find(m => m.id === currentMood);

  return (
    <div className="dashboard-wrapper" style={{ minHeight: '100vh', background: '#07050f', color: '#fff', position: 'relative', overflowX: 'hidden' }}>
      <div className="noise-overlay"></div>
      <VibeBackground mood={currentMood} />
      
      {/* Premium Minimal Header */}
      <header className="dashboard-header">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <img src="/music-play-svgrepo-com.svg" className="vibe-logo" style={{ width: '32px', height: '32px' }} alt="VibeFlow" />
          <h2 className="sub-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>VibeFlow</h2>
        </motion.div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card" 
            style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontWeight: '500', borderRadius: '980px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.03)' }}
          >
            {weather === 'Rainy' ? <CloudRain size={16} color="#007AFF" /> : <Sun size={16} color="#FF9500" />}
            <span style={{ opacity: 0.6 }}>{weather}</span>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout} 
            style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', border: 'none', cursor: 'pointer' }}
          >
            <LogOut size={16} color="rgba(255,255,255,0.4)" />
          </motion.button>
        </div>
      </header>

      {/* Modern Centered Desktop Layout */}
      <main className="dashboard-main">
        {/* Floating Sidebar */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="sidebar-panel"
        >
          <div>
            <h3 className="editorial-heading" style={{ marginBottom: '0.2rem' }}>
              <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, display: 'inline-block', background: 'linear-gradient(to right, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
                Sonic
              </span>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 800, letterSpacing: '-0.03em', display: 'inline-block', color: '#fff', fontSize: 'clamp(2.6rem, 4.5vw, 3.6rem)', opacity: 0.4, lineHeight: 1.05, marginLeft: '0.5rem' }}>
                Space
              </span>
            </h3>
            <p className="sub-label">Select your resonance.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {moods.map((mood) => (
              <motion.button
                key={mood.id}
                whileHover={{ background: 'rgba(255,255,255,0.03)' }}
                onClick={() => setCurrentMood(mood.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  padding: '1.2rem',
                  borderRadius: '18px',
                  border: 'none',
                  background: currentMood === mood.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px', 
                  background: currentMood === mood.id ? mood.color : 'rgba(255,255,255,0.05)',
                  color: currentMood === mood.id ? '#fff' : 'rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s'
                }}>
                  {mood.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', fontSize: '1rem', opacity: currentMood === mood.id ? 1 : 0.6 }}>{mood.label}</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.2 }}>{mood.desc}</div>
                </div>
                {currentMood === mood.id && (
                  <motion.div 
                    layoutId="active-pill"
                    style={{ position: 'absolute', right: '1rem', width: '4px', height: '4px', borderRadius: '50%', background: mood.color, boxShadow: `0 0 10px ${mood.color}` }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div style={{ marginTop: 'auto', padding: '1.5rem', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.02)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Volume2 size={18} color="rgba(255,255,255,0.2)" />
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', lineHeight: '1.4' }}>Atmosphere synchronized to current vector.</p>
          </div>
        </motion.section>

        {/* Large Focused Player */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          className="player-panel"
          style={{ 
            boxShadow: `0 40px 100px -20px rgba(0,0,0,0.6), 0 0 80px -10px ${currentMoodObj.color}15`
          }}
        >
          {/* Ambient Glow */}
          <motion.div 
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(circle at 50% 50%, ${currentMoodObj.color}15 0%, transparent 70%)`, pointerEvents: 'none', zIndex: 1 }}
          />

          <iframe 
            style={{ width: '100%', height: '100%', border: 'none', opacity: 0.9 }} 
            src={songsByMood[currentMood]} 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Acoustic Content"
          ></iframe>
        </motion.section>
      </main>

      <style>{`
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
};

export default VibeApp;
