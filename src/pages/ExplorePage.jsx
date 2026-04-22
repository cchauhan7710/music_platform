import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Music, Zap, Coffee, CloudRain, Target, Sun, Moon, Flame, Wind, Headphones, Radio, Heart, Star } from 'lucide-react';
import VibeBackground from '../components/VibeBackground';

const genres = [
  { id: 'energetic', label: 'Energetic', icon: <Zap size={28} />, color: '#FF2D55', desc: 'High-tempo. Raw energy.', playlist: 'https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF?utm_source=generator&theme=0' },
  { id: 'chill', label: 'Chill', icon: <Coffee size={28} />, color: '#5856D6', desc: 'Slow down. Breathe.', playlist: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0' },
  { id: 'rainy', label: 'Rainy', icon: <CloudRain size={28} />, color: '#007AFF', desc: 'Textured atmosphere.', playlist: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator&theme=0' },
  { id: 'focused', label: 'Deep Focus', icon: <Target size={28} />, color: '#34C759', desc: 'Engineered flow state.', playlist: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0' },
  { id: 'morning', label: 'Morning', icon: <Sun size={28} />, color: '#FF9500', desc: 'Gentle awakening.', playlist: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U?utm_source=generator&theme=0' },
  { id: 'night', label: 'Night Owl', icon: <Moon size={28} />, color: '#BF5AF2', desc: 'Nocturnal frequencies.', playlist: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0' },
  { id: 'hype', label: 'Hype', icon: <Flame size={28} />, color: '#FF6B35', desc: 'Unfiltered intensity.', playlist: 'https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF?utm_source=generator&theme=0' },
  { id: 'ambient', label: 'Ambient', icon: <Wind size={28} />, color: '#64D2FF', desc: 'Sonic landscapes.', playlist: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const ExplorePage = () => {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filtered = genres.filter(g =>
    g.label.toLowerCase().includes(search.toLowerCase()) ||
    g.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: '#07050f', color: '#fff', position: 'relative', overflowX: 'hidden' }}>
      <div className="noise-overlay" />
      <VibeBackground mood={selected?.id || 'default'} />

      {/* Navbar */}
      <nav className="landing-navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ArrowLeft size={18} color="#fff" />
          </motion.button>
          <img src="/music-play-svgrepo-com.svg" className="vibe-logo" style={{ width: '32px', height: '32px' }} alt="VibeFlow" />
          <h2 className="sub-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>Explore</h2>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/vibe">
            <motion.button whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(168,85,247,0.45)' }} whileTap={{ scale: 0.97 }} className="btn-primary-gradient" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
              Open Player
            </motion.button>
          </Link>
        </div>
      </nav>

      <div style={{ paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: '6rem', paddingLeft: 'clamp(1.5rem, 6vw, 4rem)', paddingRight: 'clamp(1.5rem, 6vw, 4rem)', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <p className="sub-label" style={{ marginBottom: '1.5rem', opacity: 0.4 }}>— Sonic Library —</p>
          <h1 className="editorial-heading" style={{ marginBottom: '2rem' }}>
            <span style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              fontSize: 'clamp(2.6rem, 8vw, 4.5rem)',
              background: 'linear-gradient(to right, #c084fc, #f472b6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              display: 'inline-block', lineHeight: 1.1,
            }}>
              Explore the
            </span>
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 800,
              display: 'block',
              color: '#ffffff',
              fontSize: 'clamp(3rem, 10vw, 5.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}>
              Universe.
            </span>
          </h1>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: '480px' }}>
            <Search size={18} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3, pointerEvents: 'none' }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search moods, genres..."
              style={{ width: '100%', paddingLeft: '52px', paddingRight: '24px', fontSize: '1rem', height: '54px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </motion.div>

        {/* Genre Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}
        >
          <AnimatePresence>
            {filtered.map((genre) => (
              <motion.div
                key={genre.id}
                variants={cardVariants}
                layout
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(selected?.id === genre.id ? null : genre)}
                style={{
                  padding: '2.5rem',
                  borderRadius: '32px',
                  background: selected?.id === genre.id ? `${genre.color}18` : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${selected?.id === genre.id ? genre.color + '55' : 'rgba(255,255,255,0.06)'}`,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.4s, border-color 0.4s',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Glow blob */}
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: genre.color, opacity: selected?.id === genre.id ? 0.15 : 0.04, filter: 'blur(30px)', pointerEvents: 'none', transition: 'opacity 0.4s' }} />

                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: selected?.id === genre.id ? genre.color : 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: selected?.id === genre.id ? '#fff' : genre.color, transition: 'all 0.4s' }}>
                  {genre.icon}
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>{genre.label}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.45, lineHeight: 1.5 }}>{genre.desc}</p>

                {selected?.id === genre.id && (
                  <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '10px', height: '10px', borderRadius: '50%', background: genre.color, boxShadow: `0 0 14px ${genre.color}` }} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Embedded Player */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: '40px', overflow: 'hidden', border: `1px solid ${selected.color}33`, boxShadow: `0 40px 100px -20px ${selected.color}30`, height: '500px', position: 'relative' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 30% 50%, ${selected.color}15, transparent 70%)`, pointerEvents: 'none', zIndex: 1 }} />
              <iframe
                src={selected.playlist}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={selected.label}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExplorePage;
