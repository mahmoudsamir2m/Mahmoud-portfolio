import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Monitor,
  Smartphone,
  Database,
  Server,
  Palette,
  FileText,
  Download,
  X,
} from "lucide-react";
import { useState } from "react";
import cvFile from "../assets/Mahmoud-Samir-CV.pdf";
import meImg from "../assets/me.jpg";

const skills = [
  {
    name: "Frontend",
    icon: <Monitor size={24} />,
    desc: "React, Next.js, HTML/CSS/JS/TS, Tailwind",
  },
  {
    name: "Other",
    icon: <Code2 size={24} />,
    desc: "Git, GitHub, Responsive Design, Problem Solving",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "TypeScript",
  "Redux",
  "zustand",
  "Context",
  "react-hook-form",
  "Zod",
  "......",
];

export default function About() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleDownload = () => {
    // Force download by creating a temporary anchor link
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Mahmoud-Samir-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center md:text-left">
            About <span className="text-primary-500">Me</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-16 border-b border-white/5 pb-16">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl bg-dark-800 border border-white/10 overflow-hidden shadow-xl flex items-center justify-center">
              <img
                src={meImg}
                alt="Mahmoud Samir"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow space-y-4 text-lg text-slate-400">
              <p>
                I am Mahmoud Samir, a high-performance Frontend
                Developer dedicated to engineering elite digital experiences. I
                don't just build interfaces; I architect sophisticated, scalable
                web applications using React and Next.js to bridge the gap
                between complex logic and breathtaking design.
              </p>

              <p>
                My approach is defined by a relentless commitment to clean code
                and modular architecture. I leverage TypeScript and Tailwind CSS
                to solve intricate UI challenges, ensuring every product is
                optimized for speed, maintainability, and modern web standards.
              </p>

              <p>
                Currently, I am scaling my expertise into the full-stack domain
                with Node.js and MongoDB. I am ready to drive immediate value
                within an ambitious development team by deploying technical
                precision to build the next generation of the web.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsCVOpen(true)}
                  className="group flex items-center justify-center gap-2 bg-primary-600/20 hover:bg-primary-600/40 border border-primary-500/50 text-primary-300 px-6 py-2.5 rounded-full font-medium transition-all"
                >
                  <FileText size={18} />
                  View My CV
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-white">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-slate-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">
            Technologies I Use
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-slate-300 hover:text-primary-400 hover:border-primary-500/50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CV Modal */}
      <AnimatePresence>
        {isCVOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setIsCVOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-dark-800 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/5 bg-dark-900/50 shrink-0">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <FileText className="text-primary-400" size={20} />
                  Mahmoud_Samir_CV.pdf
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Download size={16} />
                    Download
                  </button>
                  <button
                    onClick={() => setIsCVOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body (PDF Viewer) */}
              <div className="flex-1 p-4 md:p-6 bg-dark-900 flex flex-col min-h-0">
                <iframe
                  src={`${cvFile}#toolbar=0`}
                  className="w-full flex-grow rounded-lg border border-white/5 bg-white block"
                  title="Mahmoud Samir CV"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
