import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, Lock, Bell, Palette, Shield, LogOut, ChevronRight, Check, Music, Headphones, Star } from 'lucide-react';
import VibeBackground from '../components/VibeBackground';

const stats = [
  { label: 'Hours Listened', value: '142h' },
  { label: 'Playlists', value: '23' },
  { label: 'Vibes Set', value: '89' },
  { label: 'Top Genre', value: 'Chill' },
];

const sidebarItems = [
  { id: 'profile', label: 'Profile', icon: <User size={18} /> },
  { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
  { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> },
  { id: 'security', label: 'Security', icon: <Shield size={18} /> },
];

const accentColors = [
  { color: '#34D399', label: 'Emerald' },
  { color: '#007AFF', label: 'Blue' },
  { color: '#BF5AF2', label: 'Purple' },
  { color: '#FF2D55', label: 'Rose' },
  { color: '#FF9500', label: 'Amber' },
  { color: '#64D2FF', label: 'Cyan' },
];

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [accent, setAccent] = useState('#34D399');
  const [notifications, setNotifications] = useState({ newReleases: true, weeklyMix: true, social: false });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#07050f', color: '#fff', position: 'relative', overflowX: 'hidden' }}>
      <div className="noise-overlay" />
      <VibeBackground mood="chill" />

      {/* Navbar */}
      <nav className="landing-navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/vibe')}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ArrowLeft size={18} color="#fff" />
          </motion.button>
          <img src="/music-play-svgrepo-com.svg" className="vibe-logo" style={{ width: '32px', height: '32px' }} alt="VibeFlow" />
          <h2 className="sub-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>Profile</h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          onClick={handleSave}
          style={{ padding: '10px 28px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600, background: saved ? '#34D399' : '#fff', color: '#000', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.3s' }}
        >
          {saved ? <><Check size={16} /> Saved</> : 'Save Changes'}
        </motion.button>
      </nav>

      <div style={{ paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: '6rem', paddingLeft: 'clamp(1.5rem, 6vw, 4rem)', paddingRight: 'clamp(1.5rem, 6vw, 4rem)', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Hero Profile Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          {/* Avatar */}
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '30px', background: `linear-gradient(135deg, ${accent}55, ${accent}22)`, border: `2px solid ${accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
              🎧
            </div>
            <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '24px', height: '24px', borderRadius: '8px', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #050505' }}>
              <Music size={12} color="#000" />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <h1 className="editorial-heading" style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, display: 'inline-block', background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 1.1 }}>
                sonic.pioneer
              </span>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 800, letterSpacing: '-0.03em', display: 'block', color: '#fff', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', opacity: 0.35, lineHeight: 1.05 }}>
                VibeFlow Member
              </span>
            </h1>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', minWidth: '90px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.04em', color: accent }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.4, marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Settings Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2rem', alignItems: 'start' }}>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '1rem', position: 'sticky', top: '6rem' }}>
            {sidebarItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ background: 'rgba(255,255,255,0.04)' }}
                onClick={() => setActiveTab(item.id)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: '14px', border: 'none', background: activeTab === item.id ? 'rgba(255,255,255,0.06)' : 'transparent', color: activeTab === item.id ? '#fff' : 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500, textAlign: 'left', marginBottom: '4px', transition: 'all 0.3s' }}
              >
                <span style={{ color: activeTab === item.id ? accent : 'inherit' }}>{item.icon}</span>
                {item.label}
              </motion.button>
            ))}

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', marginTop: '1rem', paddingTop: '1rem' }}>
              <motion.button
                whileHover={{ background: 'rgba(255,60,60,0.06)' }}
                onClick={() => navigate('/')}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: '14px', border: 'none', background: 'transparent', color: 'rgba(255,80,80,0.6)', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 500 }}
              >
                <LogOut size={18} /> Log Out
              </motion.button>
            </div>
          </motion.div>

          {/* Content Panel */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>

            {activeTab === 'profile' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <SectionCard title="Personal Info" icon={<User size={18} />}>
                  <FieldRow label="Display Name" defaultValue="sonic.pioneer" icon={<User size={16} />} />
                  <FieldRow label="Email Address" defaultValue="pioneer@vibeflow.io" icon={<Mail size={16} />} type="email" />
                </SectionCard>
                <SectionCard title="Sonic Preferences" icon={<Headphones size={18} />}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {['Chill', 'Ambient', 'Deep Focus', 'Lo-Fi', 'Night Vibes', 'Acoustic'].map(tag => (
                      <span key={tag} style={{ padding: '8px 18px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.9rem', cursor: 'pointer' }}>{tag}</span>
                    ))}
                  </div>
                </SectionCard>
              </div>
            )}

            {activeTab === 'notifications' && (
              <SectionCard title="Notification Settings" icon={<Bell size={18} />}>
                {[
                  { key: 'newReleases', label: 'New Releases', desc: 'Get notified when your top artists release new music' },
                  { key: 'weeklyMix', label: 'Weekly Mix', desc: 'Receive your personalized weekly vibe digest' },
                  { key: 'social', label: 'Social Activity', desc: 'Notifications from your VibeFlow connections' },
                ].map(n => (
                  <div key={n.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '4px' }}>{n.label}</div>
                      <div style={{ fontSize: '0.85rem', opacity: 0.4 }}>{n.desc}</div>
                    </div>
                    <Toggle value={notifications[n.key]} onChange={() => setNotifications(p => ({ ...p, [n.key]: !p[n.key] }))} accent={accent} />
                  </div>
                ))}
              </SectionCard>
            )}

            {activeTab === 'appearance' && (
              <SectionCard title="Accent Color" icon={<Palette size={18} />}>
                <p style={{ opacity: 0.4, fontSize: '0.9rem', marginBottom: '1.5rem' }}>Choose your signature color across the VibeFlow experience.</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {accentColors.map(c => (
                    <motion.button
                      key={c.color}
                      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                      onClick={() => setAccent(c.color)}
                      style={{ width: '52px', height: '52px', borderRadius: '16px', background: c.color, border: `3px solid ${accent === c.color ? '#fff' : 'transparent'}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border 0.2s' }}
                    >
                      {accent === c.color && <Check size={20} color="#000" strokeWidth={3} />}
                    </motion.button>
                  ))}
                </div>
                <p style={{ opacity: 0.3, fontSize: '0.8rem', marginTop: '1rem' }}>Selected: {accentColors.find(c => c.color === accent)?.label}</p>
              </SectionCard>
            )}

            {activeTab === 'security' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <SectionCard title="Change Password" icon={<Lock size={18} />}>
                  <FieldRow label="Current Password" type="password" defaultValue="••••••••" icon={<Lock size={16} />} />
                  <FieldRow label="New Password" type="password" defaultValue="" placeholder="New password" icon={<Lock size={16} />} />
                  <FieldRow label="Confirm New Password" type="password" defaultValue="" placeholder="Confirm password" icon={<Lock size={16} />} />
                </SectionCard>
                <SectionCard title="Danger Zone" icon={<Shield size={18} />}>
                  <p style={{ opacity: 0.4, fontSize: '0.9rem', marginBottom: '1.5rem' }}>These actions are permanent and cannot be undone.</p>
                  <motion.button whileHover={{ background: 'rgba(255,60,60,0.15)' }} style={{ padding: '14px 24px', borderRadius: '16px', border: '1px solid rgba(255,60,60,0.3)', background: 'rgba(255,60,60,0.06)', color: '#FF453A', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem' }}>
                    Delete Account
                  </motion.button>
                </SectionCard>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const SectionCard = ({ title, icon, children }) => (
  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '28px', padding: '2rem', backdropFilter: 'blur(20px)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.8rem', opacity: 0.6 }}>
      {icon}
      <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{title}</span>
    </div>
    {children}
  </div>
);

const FieldRow = ({ label, defaultValue, icon, type = 'text', placeholder }) => (
  <div style={{ marginBottom: '1.2rem' }}>
    <label style={{ fontSize: '0.85rem', opacity: 0.4, display: 'block', marginBottom: '8px', fontWeight: 500 }}>{label}</label>
    <div style={{ position: 'relative' }}>
      <span style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', opacity: 0.2 }}>{icon}</span>
      <input type={type} defaultValue={defaultValue} placeholder={placeholder} style={{ width: '100%', paddingLeft: '48px', height: '52px', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#fff', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
    </div>
  </div>
);

const Toggle = ({ value, onChange, accent }) => (
  <motion.div
    onClick={onChange}
    style={{ width: '48px', height: '28px', borderRadius: '100px', background: value ? accent : 'rgba(255,255,255,0.1)', cursor: 'pointer', position: 'relative', flexShrink: 0, transition: 'background 0.3s' }}
  >
    <motion.div
      animate={{ x: value ? 22 : 2 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      style={{ position: 'absolute', top: '3px', width: '22px', height: '22px', borderRadius: '50%', background: '#fff' }}
    />
  </motion.div>
);

export default ProfilePage;
