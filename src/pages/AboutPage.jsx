import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Music, Zap, Heart, Globe, ArrowRight } from 'lucide-react';
import VibeBackground from '../components/VibeBackground';

const principles = [
  { num: '01', title: 'Biological Attunement', body: 'Music is not entertainment. It is a biological dialogue between sound and the human nervous system. We build for that truth.' },
  { num: '02', title: 'Atmosphere as Signal', body: 'The weather outside your window is data. Rain, fog, heat — every atmospheric condition shapes the sonic frequency your body craves.' },
  { num: '03', title: 'Engineered Presence', body: 'Algorithms are not cold. Ours are calibrated to amplify human moments — not replace them. Every recommendation exists to serve your state of being.' },
  { num: '04', title: 'Radical Simplicity', body: 'The most powerful experiences demand nothing from you. Press play. Let the system feel what you feel.' },
];

const team = [
  { name: 'Aria Chen', role: 'Sonic Architect', emoji: '🎵' },
  { name: 'Marcus Webb', role: 'Algorithm Poet', emoji: '⚡' },
  { name: 'Zoe Nakamura', role: 'Experience Designer', emoji: '🌊' },
  { name: 'Dev Patel', role: 'Infrastructure Lead', emoji: '🔧' },
];

const AboutPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -60]);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

  return (
    <div style={{ minHeight: '100vh', background: '#07050f', color: '#fff', position: 'relative', overflowX: 'hidden' }}>
      <div className="noise-overlay" />
      <VibeBackground mood="focused" />

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
          <h2 className="sub-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>Manifesto</h2>
        </div>
        <Link to="/register">
          <motion.button whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(168,85,247,0.45)' }} whileTap={{ scale: 0.97 }} className="btn-primary-gradient" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
            Join VibeFlow
          </motion.button>
        </Link>
      </nav>

      {/* Hero */}
      <motion.section ref={heroRef} style={{ opacity: heroOpacity, y: heroY, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(6rem, 12vw, 10rem) 1.5rem', position: 'relative', zIndex: 10 }}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="sub-label" style={{ marginBottom: '2rem', opacity: 0.4 }}>
          — Our Manifesto —
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} className="editorial-heading" style={{ maxWidth: '1000px', marginBottom: '3rem' }}>
          <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: 'clamp(2.6rem, 8vw, 4.5rem)', display: 'inline-block', background: 'linear-gradient(to right, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1 }}>
            Sound is not
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 800, display: 'block', color: '#ffffff', fontSize: 'clamp(3rem, 10vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            decoration.
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'rgba(255,255,255,0.45)', maxWidth: '680px', lineHeight: 1.6, marginBottom: '4rem' }}>
          It is the invisible architecture of human experience. VibeFlow was built to honor that — one frequency at a time.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} style={{ display: 'flex', gap: '2rem', alignItems: 'center', opacity: 0.3 }}>
          <div style={{ width: '60px', height: '1px', background: '#fff' }} />
          <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Est. 2024</span>
          <div style={{ width: '60px', height: '1px', background: '#fff' }} />
        </motion.div>
      </motion.section>

      {/* Principles */}
      <section style={{ padding: 'clamp(4rem, 10vw, 10rem) clamp(1.5rem, 6vw, 4rem)', maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <p className="sub-label" style={{ opacity: 0.4, marginBottom: '1.5rem' }}>Four Principles</p>
          <h2 className="editorial-heading" style={{ fontSize: 'var(--fs-h1)' }}>
            <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', display: 'inline-block', background: 'linear-gradient(to right, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1 }}>
              What we
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 800, display: 'block', color: '#ffffff', fontSize: 'clamp(2.8rem, 8vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              believe.
            </span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {principles.map((p, i) => (
            <motion.div key={p.num} variants={itemVariants} whileHover={{ y: -6 }} style={{ padding: '2.5rem', borderRadius: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '1.5rem', fontSize: '5rem', fontWeight: 900, opacity: 0.04, lineHeight: 1 }}>{p.num}</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c084fc', marginBottom: '1.5rem' }}>{p.num}</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.03em' }}>{p.title}</h3>
              <p style={{ opacity: 0.45, lineHeight: 1.7, fontSize: '0.95rem' }}>{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Banner */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 6vw, 4rem)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { value: '2M+', label: 'Active Listeners' },
            { value: '50K', label: 'Curated Playlists' },
            { value: '140+', label: 'Countries' },
            { value: '99.9%', label: 'Uptime' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.06em', background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.35, textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.5rem' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Team */}
      <section style={{ padding: 'clamp(4rem, 10vw, 10rem) clamp(1.5rem, 6vw, 4rem)', maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <p className="sub-label" style={{ opacity: 0.4, marginBottom: '1.5rem' }}>The Collective</p>
          <h2 className="editorial-heading" style={{ fontSize: 'var(--fs-h1)' }}>
            <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', display: 'inline-block', background: 'linear-gradient(to right, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1 }}>
              Built by
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 800, display: 'block', color: '#ffffff', fontSize: 'clamp(2.8rem, 8vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              listeners.
            </span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants} whileHover={{ y: -6, background: 'rgba(255,255,255,0.04)' }} style={{ padding: '2.5rem 2rem', borderRadius: '28px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', cursor: 'default', transition: 'background 0.3s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.2rem' }}>{member.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '6px' }}>{member.name}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.35 }}>{member.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(4rem, 10vw, 8rem) 2rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 className="editorial-heading" style={{ marginBottom: '2rem', fontSize: 'var(--fs-h1)' }}>
            <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', display: 'inline-block', background: 'linear-gradient(to right, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1 }}>
              Ready to
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 800, display: 'block', color: '#ffffff', fontSize: 'clamp(2.8rem, 8vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              feel it?
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Join millions of listeners who have tuned their world with VibeFlow.
          </p>
          <Link to="/register">
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(168,85,247,0.45)' }} whileTap={{ scale: 0.97 }} className="btn-primary-gradient" style={{ padding: '0.75rem 2.5rem', borderRadius: '1rem', background: 'linear-gradient(to right, #a855f7, #ec4899)', color: '#fff', fontWeight: 500, border: 'none', fontSize: '1.2rem', cursor: 'pointer', fontFamily: 'var(--font-sans)', display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
              Start Listening <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', opacity: 0.2, fontSize: '0.85rem' }}>
          © 2024 VibeFlow Laboratory. Optimized for human presence.
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
