"use client";
// components/TypedText.js
import { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  useEffect(() => {
    // Ensure component mounts on the client-side
    if (typeof window !== 'undefined') {
      const typed = new Typed('.typed-text', {
        strings: ["React developer.", "Next developer.", "Active learner.", "Designer.", "Problem solver."],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
      Hi! I&apos;m Ankon, a <span className="typed-text"></span>
    </p>
  );
};

export default TypedText;
