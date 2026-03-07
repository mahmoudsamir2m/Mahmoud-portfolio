import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bootSound from '../assets/k.mpeg';

const codeLines = [
  { text: "import", color: "text-purple-400" },
  { text: " React ", color: "text-cyan-300" },
  { text: "from", color: "text-purple-400" },
  { text: " 'react';", color: "text-amber-300", newline: true },

  { text: "import", color: "text-purple-400" },
  { text: " { Portfolio, Router, Animation }", color: "text-cyan-300" },
  { text: " from", color: "text-purple-400" },
  { text: " '@mahmoud/core';", color: "text-amber-300", newline: true },

  { text: "\nconst", color: "text-purple-400" },
  { text: " developer", color: "text-sky-300" },
  { text: " = ", color: "text-slate-400" },
  { text: "{", color: "text-yellow-300", newline: true },

  { text: "  name", color: "text-sky-200" },
  { text: ":     ", color: "text-slate-400" },
  { text: "'Mahmoud Samir'", color: "text-amber-300" },
  { text: ",", color: "text-slate-400", newline: true },

  { text: "  role", color: "text-sky-200" },
  { text: ":     ", color: "text-slate-400" },
  { text: "'Frontend Developer'", color: "text-amber-300" },
  { text: ",", color: "text-slate-400", newline: true },

  { text: "  stack", color: "text-sky-200" },
  { text: ":    ", color: "text-slate-400" },
  { text: "['React', 'Next.js', 'TypeScript']", color: "text-amber-300" },
  { text: ",", color: "text-slate-400", newline: true },

  { text: "  passion", color: "text-sky-200" },
  { text: ":  ", color: "text-slate-400" },
  { text: "'Building beautiful UIs'", color: "text-amber-300", newline: true },

  { text: "};", color: "text-yellow-300", newline: true },

  { text: "\nawait", color: "text-purple-400" },
  { text: " Portfolio", color: "text-sky-300" },
  { text: ".", color: "text-slate-400" },
  { text: "initialize", color: "text-green-400" },
  { text: "(developer);", color: "text-yellow-300", newline: true },

  { text: "// ✨ Welcome to my world...", color: "text-slate-500 italic", newline: true, isAction: true },
];

const totalChars = codeLines.reduce((sum, line) => sum + line.text.length, 0);

export default function SplashScreen({ onComplete }) {
  const [started, setStarted] = useState(false);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [charDelay, setCharDelay] = useState(30);
  const audioRef = useRef(null);

  const handleStart = () => {
    const audio = new Audio(bootSound);
    audio.volume = 0.5;
    audioRef.current = audio;

    // Try to get duration for syncing
    const startPlaying = () => {
      const duration = audio.duration;
      if (duration && isFinite(duration)) {
        const availableMs = (duration - 0.8) * 1000;
        const msPerChar = Math.max(10, Math.floor(availableMs / totalChars));
        setCharDelay(msPerChar);
      }
      audio.play();
      setStarted(true);
    };

    if (audio.readyState >= 1) {
      startPlaying();
    } else {
      audio.addEventListener('loadedmetadata', startPlaying, { once: true });
      // Fallback if metadata takes too long
      setTimeout(() => {
        if (!started) {
          audio.play().catch(() => {});
          setStarted(true);
        }
      }, 300);
    }
  };

  // Typing animation — only runs after started
  useEffect(() => {
    if (!started) return;

    if (currentSegment >= codeLines.length) {
      setTimeout(() => {
        setIsFinished(true);
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setTimeout(onComplete, 500);
      }, 300);
      return;
    }

    const currentText = codeLines[currentSegment].text;

    const typingInterval = setInterval(() => {
      setDisplayedChars(prev => prev + 1);

      if (displayedChars >= currentText.length - 1) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayedChars(0);
          setCurrentSegment(prev => prev + 1);
        }, codeLines[currentSegment].isAction ? charDelay * 3 : Math.floor(charDelay * 0.5));
      }
    }, charDelay);

    return () => clearInterval(typingInterval);
  }, [started, currentSegment, displayedChars, onComplete, charDelay]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center p-4 sm:p-6 md:p-12"
        >
          {!started ? (
            /* Click to Start Screen */
            <motion.button
              onClick={handleStart}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6 cursor-pointer group"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59,130,246,0.3)",
                    "0 0 30px rgba(59,130,246,0.6)",
                    "0 0 0px rgba(59,130,246,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-full bg-primary-600/20 border-2 border-primary-500/50 flex items-center justify-center group-hover:bg-primary-600/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary-400 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              <span className="text-slate-400 text-sm sm:text-base font-mono tracking-wider">
                click to start
              </span>
            </motion.button>
          ) : (
            /* Code Animation */
            <div className="w-full max-w-3xl font-mono text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed whitespace-pre pl-3 sm:pl-4 md:pl-6 border-l-2 border-primary-500/30">
              {codeLines.slice(0, currentSegment).map((segment, idx) => (
                <span key={idx} className={segment.color}>
                  {segment.text}
                  {segment.newline && <br />}
                </span>
              ))}

              {currentSegment < codeLines.length && (
                <span className={codeLines[currentSegment].color}>
                  {codeLines[currentSegment].text.slice(0, displayedChars + 1)}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="inline-block w-2 sm:w-2.5 md:w-3 h-4 sm:h-5 md:h-6 bg-primary-500 ml-0.5 align-middle translate-y-[-1px]"
                  />
                </span>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
