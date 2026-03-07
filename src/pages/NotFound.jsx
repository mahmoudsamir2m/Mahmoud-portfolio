import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] -z-10" />

      {/* Animated 404 Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative mb-4"
      >
        <h1 className="text-[10rem] md:text-[14rem] font-black leading-none select-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900">4</span>
          <motion.span
            animate={{
              color: [
                'rgba(59, 130, 246, 1)',
                'rgba(139, 92, 246, 1)',
                'rgba(236, 72, 153, 1)',
                'rgba(59, 130, 246, 1)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            0
          </motion.span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900">4</span>
        </h1>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-500/40"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Glitch line */}
      <motion.div
        className="w-40 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-8"
        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Text Content */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold text-white mb-4"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-slate-400 text-lg max-w-md mb-10"
      >
        The page you're looking for doesn't exist or has been moved to another URL.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/"
          className="group flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-primary-600/25"
        >
          <Home size={18} />
          Back to Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="group flex items-center justify-center gap-2 glass hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Go Back
        </button>
      </motion.div>
    </div>
  );
}
