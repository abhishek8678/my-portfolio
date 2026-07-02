import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Build", "Scale", "Ship"];

export const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const duration = 2400;
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else if (!completedRef.current) {
        completedRef.current = true;
        setTimeout(() => onComplete(), 350);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-page flex flex-col justify-between p-8 md:p-12">
      {/* Top left */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <LogoMark className="w-5 h-5 text-foreground" />
        <span className="text-sm text-muted tracking-[0.2em] uppercase">Portfolio</span>
      </motion.div>

      {/* Center word */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-foreground"
            style={{ letterSpacing: "-0.04em" }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-end">
          <span
            className="text-6xl md:text-8xl lg:text-9xl font-medium text-foreground/10"
            style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.04em" }}
          >
            {String(count).padStart(3, "0")}
          </span>
        </div>
        <div className="w-full h-[2px] bg-border overflow-hidden rounded-full">
          <div
            className="h-full bg-foreground rounded-full origin-left transition-transform duration-75"
            style={{ transform: `scaleX(${count / 100})` }}
          />
        </div>
      </div>
    </div>
  );
};

const LogoMark = ({ className }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" className={className}>
    <path d="M128.005 191.173C128.448 156.208 156.93 128 192 128V64H128C128 99.346 99.346 128 64 128V192H128ZM192 256H64C28.654 256 0 227.346 0 192V64H64V0H192C227.346 0 256 28.654 256 64V192H192Z" />
  </svg>
);
