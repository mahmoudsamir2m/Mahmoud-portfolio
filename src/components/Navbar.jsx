import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Home, User, FolderGit2, Mail } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Projects', path: '/projects', icon: FolderGit2 },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(null);

  return (
    <>
      {/* Desktop Header Nav */}
      <header className="fixed top-0 w-full glass z-50 border-b border-white/5 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            Mahmoud<span className="text-primary-500">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredPath === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={clsx(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                    isActive || isHovered ? "text-white" : "text-slate-300 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Hover/Active Pill Background */}
                  { (isActive || isHovered) && (
                    <motion.div
                      layoutId="navbar-pill-background"
                      className="absolute inset-0 bg-primary-500/20 backdrop-blur-md rounded-full border border-primary-500/30"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  
                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator-underline"
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-primary-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile Top Brand Panel */}
      <header className="fixed top-0 w-full glass z-50 border-b border-white/5 md:hidden">
        <div className="px-6 h-16 flex items-center justify-center text-center">
          <Link to="/" className="text-xl font-bold tracking-tighter text-white">
            Mahmoud<span className="text-primary-500">.</span>
          </Link>
        </div>
      </header>

      {/* Mobile Bottom App-like Nav */}
      <nav className="fixed bottom-0 left-0 w-full glass z-50 border-t border-white/5 md:hidden pb-safe">
        <div className="flex justify-around items-center h-16 px-2 relative">
          <AnimatePresence>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors relative group",
                    isActive ? "text-primary-400" : "text-slate-400 hover:text-slate-300"
                  )}
                >
                  {/* Active Top Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-top-indicator"
                      className="absolute top-0 w-10 h-[3px] bg-primary-500 rounded-b-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  
                  {/* Active Hover Glow Behind Icon */}
                   {isActive && (
                    <motion.div
                      layoutId="mobile-nav-glow"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary-500/10 rounded-full blur-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}

                  <motion.div
                    animate={isActive ? { y: -2, scale: 1.15 } : { y: 0, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative z-10"
                  >
                    <Icon size={22} className={clsx("transition-colors", isActive ? "text-primary-400" : "group-hover:text-primary-300")} />
                  </motion.div>
                  
                  <span className={clsx(
                    "text-[10px] font-medium transition-all relative z-10",
                    isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100 font-normal"
                  )}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
