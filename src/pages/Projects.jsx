import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImg from "../assets/projects-images/E-Commerce.avif";
import goldImg from "../assets/projects-images/icon-gold.png";
import weatherImg from "../assets/projects-images/Weather-App.jpg";
import booksImg from "../assets/projects-images/books.jpeg";
import portfolioImg from "../assets/projects-images/portfolio.jpg";
import loginImg from "../assets/projects-images/login.jpg";

const projects = [
  {
    title: "Dahabna – Gold E-Commerce Platform",
    description:
      "Built a scalable gold e-commerce platform using Next.js and React. Implemented full authentication flow including Login, Sign Up, Forgot Password, and OTP verification. Developed product CRUD, advanced filtering, detailed product pages with ratings and comments, and a modern UX using Framer Motion animations.",
    image: goldImg,
    tags: [
      "Next.js",
      "React",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Zustand",
      "React Query",
    ],
    github: "",
    demo: "https://dahabna.com/",
  },

  {
    title: "E-Commerce App",
    description:
      "Developed a responsive e-commerce platform using Next.js, React, and Tailwind CSS. Added product cards, wishlist, and integrated payment system. Implemented NextAuth, React Hook Form, and Zod for secure authentication and validation. Deployed on Vercel.",
    image: ecommerceImg,
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "NextAuth",
      "React Hook Form",
      "Zod",
    ],
    github: "https://github.com/mahmoudsamir2m/My-E-Commerce-App",
    demo: "https://my-e-commerce-app-sigma.vercel.app/",
  },
  // {
  //   title: 'Social Media Web App',
  //   description: 'A social platform allowing users to post updates, upload images, follow other users, and chat in real-time.',
  //   image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
  //   tags: ['React', 'Firebase', 'Redux', 'Framer Motion'],
  //   github: '#',
  //   demo: '#',
  // },

  {
    title: "Weather App",
    description:
      "Developed a weather application using a Weather API to fetch real-time weather data. Implemented dark/light mode for better user experience and added proper error handling for invalid inputs and API requests.",
    image: weatherImg,
    tags: ["JavaScript", "API", "CSS", "Weather API"],
    github: "https://github.com/mahmoudsamir2m/Weather-App",
    demo: "https://weather-app-eight-silk-46.vercel.app/",
  },

  {
    title: "Bookmark CRUD",
    description:
      "Built a CRUD application using Local Storage for data persistence. Implemented create, update, and delete functionality with real-time UI updates and form validation.",
    image: booksImg,
    tags: ["JavaScript", "CRUD", "LocalStorage", "Validation"],
    github: "https://github.com/mahmoudsamir2m/Bookmarker-App",
    demo: "https://bookmarker-app-chi.vercel.app/",
  },

  {
    title: "Portfolio Website",
    description:
      "Developed a responsive portfolio website with smooth navigation and dynamic UI interactions. Implemented navbar color change on scroll, active section detection, and image zoom popups.",
    image: portfolioImg,
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    github: "https://github.com/mahmoudsamir2m/Daniels",
    demo: "https://daniels-omega.vercel.app/",
  },

  {
    title: "Auth System",
    description:
      "Built a full authentication system using Local Storage including sign-up and login forms with validation, user checking, and proper error handling.",
    image: loginImg,
    tags: ["JavaScript", "Auth", "LocalStorage", "Validation"],
    github: "https://github.com/mahmoudsamir2m/Smart-Login-System",
    demo: "https://smart-login-system-six.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Featured <span className="text-primary-500">Projects</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Here are some of the projects I've worked on recently exploring
          different technologies and crafting beautiful problem-solving
          solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/50 transition-all flex flex-col h-full"
          >
            {/* Project Image */}
            <div className="relative h-60 overflow-hidden bg-dark-800">
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary-950 text-primary-300 border border-primary-900/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
