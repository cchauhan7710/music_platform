import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Cloud, Zap, Sparkles, X, Menu } from 'lucide-react';
import VibeBackground from '../components/VibeBackground';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const navLinks = [
    { to: '/explore', label: 'Explore' },
    { to: '/about', label: 'Manifesto' },
  ];

  return (
    <div className="landing-page" style={{ background: '#07050f', color: '#fff', minHeight: '100vh', position: 'relative' }}>
      <div className="noise-overlay" />
      <VibeBackground mood="default" />

      {/* ── Navbar ── */}
      <motion.nav
        className="landing-navbar"
        style={{
          background: scrolled ? 'rgba(7, 5, 15, 0.88)' : 'rgba(7, 5, 15, 0.1)',
          borderBottomColor: scrolled ? 'rgba(167, 139, 250, 0.18)' : 'rgba(167, 139, 250, 0.06)',
          backdropFilter: scrolled ? 'blur(40px)' : 'blur(20px)',
          WebkitBackdropFilter: scrolled ? 'blur(40px)' : 'blur(20px)',
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Brand */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <img src="/music-play-svgrepo-com.svg" className="vibe-logo" style={{ width: '26px', height: '26px' }} alt="VibeFlow" />
          <span className="navbar-brand" style={{
            background: 'linear-gradient(90deg, #a78bfa, #ec4899)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>VibeFlow</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className="nav-link">{l.label}</Link>
          ))}
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(167,139,250,0.45)' }}
              whileTap={{ scale: 0.96 }}
              className="nav-cta-btn"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(236,72,153,0.25))',
                border: '1px solid rgba(167,139,250,0.4)',
                color: '#e2d9ff',
              }}
            >
              Sign In
            </motion.button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'rgba(167,139,250,0.1)',
            border: '1px solid rgba(167,139,250,0.25)',
            borderRadius: '12px',
            color: '#c4b5fd',
            padding: '8px',
            cursor: 'pointer',
          }}
        >
          <Menu size={22} />
        </button>
      </motion.nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(7,5,15,0.97)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: 'rgba(167,139,250,0.1)',
                border: '1px solid rgba(167,139,250,0.25)',
                borderRadius: '12px', color: '#c4b5fd',
                padding: '8px', cursor: 'pointer',
              }}
            >
              <X size={22} />
            </button>

            {navLinks.map(l => (
              <Link
                key={l.to} to={l.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '2rem', fontWeight: 700,
                  color: 'rgba(200,185,255,0.85)', textDecoration: 'none',
                  letterSpacing: '-0.04em',
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                style={{
                  fontSize: '1.1rem', fontWeight: 700,
                  padding: '16px 44px', borderRadius: '100px',
                  background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                  color: '#fff', border: 'none', cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(124,58,237,0.4)',
                  letterSpacing: '-0.02em',
                }}
              >
                Sign In
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 1.5rem', position: 'relative', zIndex: 10,
      }}>
        <div style={{ maxWidth: '48rem', textAlign: 'center' }}>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(1.8rem, 8vw, 3.75rem)', fontWeight: 600, lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em', padding: '0 0.5rem' }}
          >
            <span style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 10vw, 4.5rem)',
              background: 'linear-gradient(to right, #c084fc, #f472b6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              display: 'block', lineHeight: 1.1,
            }}>
              Feel the rhythm
            </span>
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 800,
              color: '#ffffff',
              display: 'block',
              fontSize: 'clamp(2rem, 10.5vw, 5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}>
              of your world.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ marginTop: '1.5rem', color: '#a1a1aa', fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.7 }}
          >
            The first AI-curated sonic ecosystem that adapts to your biological rhythm and surroundings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-cta-group"
            style={{ marginTop: '2rem' }}
          >
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(168,85,247,0.45)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '0.75rem 1.5rem', borderRadius: '1rem',
                  background: 'linear-gradient(to right, #a855f7, #ec4899)',
                  color: '#fff', fontWeight: 500, border: 'none',
                  fontSize: '1rem', cursor: 'pointer', fontFamily: 'var(--font-sans)',
                }}
              >
                Get Started
              </motion.button>
            </Link>
            <Link to="/vibe">
              <motion.button
                whileHover={{ background: 'rgba(39,39,42,0.9)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '0.75rem 1.5rem', borderRadius: '1rem',
                  background: 'transparent', color: '#d4d4d8',
                  border: '1px solid #3f3f46', fontSize: '1rem',
                  fontWeight: 400, cursor: 'pointer', fontFamily: 'var(--font-sans)',
                }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '3rem', opacity: 0.3 }}
        >
          <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, #a78bfa, transparent)', margin: '0 auto' }} />
        </motion.div>
      </section>


      {/* ── Features Bento ── */}
      <section id="features" className="features-section">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="editorial-heading section-heading-gradient">
              Engineered for <br />
              <span style={{ opacity: 0.4 }}>Presence.</span>
            </h2>
          </div>

          <div className="bento-grid">
            {/* Card 1 — Atmospheric */}
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 40px 100px rgba(6,182,212,0.2)' }}
              className="bento-card bento-span-8"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(14,116,144,0.06) 100%)',
                borderColor: 'rgba(6,182,212,0.2)',
              }}
            >
              <div className="bento-bg-icon"><Cloud size={130} strokeWidth={1} color="#06b6d4" /></div>
              <span className="bento-chip" style={{ color: '#22d3ee' }}>
                <span style={{ width: 6, height: 6, background: '#22d3ee', borderRadius: '50%', boxShadow: '0 0 10px #22d3ee', flexShrink: 0 }} />
                Live Weather Sync
              </span>
              <h3 className="editorial-heading" style={{ fontSize: 'var(--fs-h2)', marginBottom: '1rem', color: '#e0f7ff' }}>Atmospheric Intelligence</h3>
              <p className="bento-body" style={{ color: 'rgba(200,240,255,0.5)' }}>Real-time weather tracking informs every frequency, aligning your mood with the shifting world outside.</p>
            </motion.div>

            {/* Card 2 — Biotic */}
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 40px 100px rgba(124,58,237,0.25)' }}
              className="bento-card bento-span-4"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(79,29,150,0.12) 100%)',
                borderColor: 'rgba(167,139,250,0.25)',
              }}
            >
              <div className="bento-icon-wrapper"><Zap size={38} color="#a78bfa" style={{ filter: 'drop-shadow(0 0 12px #a78bfa)' }} /></div>
              <h3 className="editorial-heading" style={{ fontSize: 'var(--fs-h3)', marginTop: '2rem', color: '#ddd6fe' }}>Biotic <br />Rhythm</h3>
            </motion.div>

            {/* Card 3 — Visuals */}
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 40px 100px rgba(236,72,153,0.2)' }}
              className="bento-card bento-span-5"
              style={{
                background: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(190,24,93,0.07) 100%)',
                borderColor: 'rgba(244,114,182,0.22)',
              }}
            >
              <Sparkles size={38} color="#f472b6" style={{ marginBottom: '2rem', filter: 'drop-shadow(0 0 10px #f472b6)' }} />
              <h3 className="editorial-heading" style={{ fontSize: 'var(--fs-h3)', marginBottom: '1rem', color: '#fce7f3' }}>Reactive Visuals</h3>
              <p className="bento-body" style={{ color: 'rgba(255,210,240,0.5)' }}>GSAP-driven background states that breathe in sync with your audio choice.</p>
            </motion.div>

            {/* Card 4 — CTA */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01, boxShadow: '0 40px 120px rgba(124,58,237,0.5)' }}
              className="bento-card bento-span-7"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 40%, #ec4899 100%)',
                borderColor: 'rgba(255,255,255,0.15)',
                color: '#fff', justifyContent: 'center',
                boxShadow: '0 20px 80px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                cursor: 'pointer',
              }}
            >
              <div className="bento-bg-icon" style={{ right: '8%', opacity: 0.12, zIndex: 0 }}>
                <Music size={150} strokeWidth={2} />
              </div>
              <Link to="/register" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', zIndex: 1, paddingRight: '1rem' }}>
                <h3 style={{ fontSize: 'clamp(1.4rem, 6vw, 3rem)', fontWeight: '950', letterSpacing: '-0.04em', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  Start your journey <ArrowRight size={24} />
                </h3>
                <p style={{ opacity: 0.7, marginTop: '0.75rem', fontWeight: 500, fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)' }}>
                  Join 10,000+ pioneers shaping the future of sound.
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta-section">
        <div className="cta-glow" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="cta-inner"
        >
          <h2 className="cta-heading" style={{
            fontSize: 'clamp(1.8rem, 8vw, 4.5rem)',
            fontWeight: '900',
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            background: 'linear-gradient(135deg, #fff 0%, #c4b5fd 50%, #f9a8d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Ready to evolve<br />how you listen?
          </h2>
          <p className="cta-sub">Your sonic identity starts here.</p>
          <Link to="/register">
            <motion.button
              whileHover={{ y: -4, boxShadow: '0 30px 80px rgba(124,58,237,0.6)' }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary-gradient"
              style={{ fontSize: '1.15rem', padding: '22px 60px' }}
            >
              Initialize Experience
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer-section">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
              <img src="/music-play-svgrepo-com.svg" className="vibe-logo" style={{ width: '22px', height: '22px' }} alt="VibeFlow" />
              <span style={{
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1rem',
                background: 'linear-gradient(90deg, #a78bfa, #ec4899)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>VibeFlow</span>
            </div>
            <p style={{ color: 'rgba(220,200,255,0.25)', fontSize: '0.9rem', maxWidth: '300px', lineHeight: '1.7' }}>
              Crafting premium sonic landscapes for the algorithmic era. Made for pioneers.
            </p>
          </div>

          <div className="footer-links-grid">
            {[
              { title: 'Ecosystem', links: ['Manifesto', 'Weather API', 'Vibe Library'] },
              { title: 'Collective', links: ['About', 'Artifacts', 'Contact'] },
            ].map(col => (
              <div key={col.title} className="footer-link-col">
                <span className="footer-col-title">{col.title}</span>
                {col.links.map(l => (
                  <a key={l} href="#" className="footer-link">{l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          © 2024 VibeFlow Laboratory. Optimized for human presence.
        </div>
      </footer>
    </div>
  );
};

const ArrowRight = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '0.4rem' }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default LandingPage;
