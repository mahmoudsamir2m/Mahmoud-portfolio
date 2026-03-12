import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import meImg from '../assets/me.jpg';

const phrases = [
  "Building Luxury Apps",
  "Delivering Scalable Code",
  "Crafting Pixel-Perfect UI",
];

function TypewriterEffect() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(handleType, 400);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="block min-h-9.75 sm:min-h-13 md:min-h-[97.5px]  w-full mt-2">
      <span className="inline-flex  items-center min-h-full justify-center whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
        <span className="text-transparent min-h-full  leading-relaxed bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 drop-shadow-sm">
          {text}
        </span>
        <motion.span 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[3px] md:w-[4px] h-[0.9em] bg-primary-500 ml-1 lg:ml-2 mb-[-2px] md:mb-[-4px]"
        />
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center w-full px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-h-screen bg-primary-600/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          boxShadow: [
            "0px 0px 0px rgba(59, 130, 246, 0)",
            "0px 0px 25px rgba(59, 130, 246, 0.5)",
            "0px 0px 0px rgba(59, 130, 246, 0)",
          ],
          borderColor: [
            "rgba(59, 130, 246, 0.3)",
            "rgba(59, 130, 246, 0.8)",
            "rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{
          duration: 0.5,
          boxShadow: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          },
          borderColor: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          },
        }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-dark-800 border-4 overflow-hidden mb-8 shadow-2xl flex items-center justify-center transform-gpu"
      >
        <img
          src={meImg}
          alt="Mahmoud Samir"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-bold tracking-tight mb-4 md:mb-6 text-white w-full flex flex-col items-center"
      >
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
          Front-End Engineer <br className="md:hidden" />
        </span>
        <TypewriterEffect />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10  text-justify md:text-center"
      >
        Front-End Engineer specializing in React and Next.js. I architect
        high-performance, scalable & luxury web experiences with clean code and
        pixel-perfect precision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/about"
          className="group flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-primary-600/25"
        >
          About Me
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
        <Link
          to="/contact"
          className="group flex items-center justify-center gap-2 glass hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all"
        >
          <Mail size={18} />
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
}
