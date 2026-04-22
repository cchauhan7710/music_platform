import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const VibeBackground = ({ mood = 'default' }) => {
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const blob3 = useRef(null);
  const blob4 = useRef(null);

  useEffect(() => {
    const blobs = [blob1, blob2, blob3, blob4];

    blobs.forEach((ref, i) => {
      gsap.to(ref.current, {
        x: `random(-20, 20)vw`,
        y: `random(-20, 20)vh`,
        scale: `random(1.1, 1.6)`,
        duration: `random(18, 30)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 2,
      });
    });
  }, [mood]);

  return (
    <div className="vibe-bg" style={{ filter: 'blur(90px)', opacity: 1 }}>
      {/* Electric Violet — top left */}
      <div
        ref={blob1}
        style={{
          position: 'absolute',
          top: '-5%',
          left: '-10%',
          width: '65vw',
          height: '65vh',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #7c3aed 0%, #4f1d96 60%, transparent 100%)',
          opacity: 0.55,
        }}
      />
      {/* Hot Magenta — bottom right */}
      <div
        ref={blob2}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '60vw',
          height: '60vh',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ec4899 0%, #be185d 55%, transparent 100%)',
          opacity: 0.5,
        }}
      />
      {/* Cyan Teal — center */}
      <div
        ref={blob3}
        style={{
          position: 'absolute',
          top: '30%',
          left: '35%',
          width: '50vw',
          height: '50vh',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #06b6d4 0%, #0e7490 55%, transparent 100%)',
          opacity: 0.4,
        }}
      />
      {/* Amber warmth — top right accent */}
      <div
        ref={blob4}
        style={{
          position: 'absolute',
          top: '5%',
          right: '10%',
          width: '35vw',
          height: '35vh',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #f59e0b 0%, #b45309 55%, transparent 100%)',
          opacity: 0.25,
        }}
      />
    </div>
  );
};

export default VibeBackground;
