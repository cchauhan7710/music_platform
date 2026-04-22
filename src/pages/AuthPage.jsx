import React, { useState, useCallback, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import VibeBackground from '../components/VibeBackground';

const AuthPage = ({ type = 'login' }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/vibe');
    }, 1500);
  }, [navigate]);

  const isLogin = type === 'login';

  return (
    <div className="auth-master-wrapper">
      <div className="noise-overlay"></div>
      
      {/* Apple-style Dynamic Background */}
      <VibeBackground mood="premium-music" />
      
      {/* Main Layout Container */}
      <div className="auth-split-container">
        
        {/* Left Side: Immersive Editorial Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="auth-image-panel"
        >
          <div className="art-brand-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              className="editorial-heading"
            >
              Create your<br/>Free Account
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              className="artwork-subtitle"
            >
              Sync your sonic identity and join the<br/>VibeFlow collective today.
            </motion.p>
          </div>
          
          <div className="panel-artwork-bg">
            <img 
              src="/digital-art-portrait-person-listening-music-headphones_105004-32671.jpg" 
              alt="Music Portrait" 
              decoding="async"
            />
            <div className="panel-overlay-gradient"></div>
          </div>
        </motion.div>

        {/* Right Side: Pro System Dialog */}
        <div className="auth-form-panel">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="auth-form-card-v3"
          >
            <header className="auth-header-v3">
              <img src="/music-play-svgrepo-com.svg" className="vibe-logo" alt="VibeFlow" />
              <h2 className="editorial-heading" style={{ fontSize: '4.5rem' }}>{isLogin ? 'Sign in' : 'Sign up'}</h2>
              <p className="sub-label" style={{ marginTop: '-1rem', opacity: 0.5 }}>
                {isLogin ? "New here? " : "Already have an account? "}
                <Link to={isLogin ? '/register' : '/login'}>
                   {isLogin ? 'Create Account' : 'Sign In'}
                </Link>
              </p>
            </header>

            <form onSubmit={handleSubmit} className="auth-input-stack">
              <div className="field-group">
                <label>Email Address</label>
                <div className="input-with-icon">
                  <Mail size={18} className="lucide-icon" />
                  <input type="email" placeholder="name@company.com" required />
                </div>
              </div>

              <div className="field-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="lucide-icon" />
                  <input type="password" placeholder="••••••••" required />
                </div>
              </div>

              <button className="vibe-submit-btn" disabled={loading}>
                {loading ? 'Processing...' : (isLogin ? 'Log In' : 'Create Account')}
              </button>

              <div className="auth-divider">
                <span>or use social</span>
              </div>

              <button type="button" className="google-auth-btn">
                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" />
                Sign {isLogin ? 'in' : 'up'} with Google
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="auth-footer-v3">
        © 2024 VibeFlow Laboratory. Optimize your resonance.
      </footer>
    </div>
  );
};

export default memo(AuthPage);
