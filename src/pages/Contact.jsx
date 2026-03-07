import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Send,
  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .refine((val) => val.toLowerCase().endsWith("@gmail.com"), {
      message: "Please use a @gmail.com email address as requested",
    }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New Portfolio Message from ${data.name}`,
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
          to: "mahmoudsamir2m@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          "Message sent successfully! I will get back to you soon. ✉️",
        );
        reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <div className="py-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Get in <span className="text-primary-500">Touch</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out. I'm
          currently available for new opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="glass p-8 rounded-2xl border border-white/5 space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 block">Email</p>
                <a
                  href="mailto:mahmoudsamir2m@gmail.com"
                  className="hover:text-primary-400 transition-colors text-lg break-all"
                >
                  mahmoudsamir2m@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 block">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary-400 transition-colors text-lg"
                >
                  +2 01550200831
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 block">Location</p>
                <span className="text-lg">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/MahmoudSamir2m"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 hover:border-primary-500 hover:text-primary-400 flex items-center justify-center transition-all text-slate-300"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/mahmoudsamir2m?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dark-800 border border-white/10 hover:border-primary-500 hover:text-primary-400 flex items-center justify-center transition-all text-slate-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass p-8 rounded-2xl border border-white/5 flex flex-col gap-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className={`w-full bg-dark-800 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? "border-red-500/50 focus:ring-red-500/50"
                    : "border-white/10 focus:ring-primary-500 focus:border-transparent"
                }`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle size={14} /> {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Email Address (@gmail.com)
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`w-full bg-dark-800 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-red-500/50 focus:ring-red-500/50"
                    : "border-white/10 focus:ring-primary-500 focus:border-transparent"
                }`}
                placeholder="Your Email (example@gmail.com)"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle size={14} /> {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={`w-full bg-dark-800 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message
                    ? "border-red-500/50 focus:ring-red-500/50"
                    : "border-white/10 focus:ring-primary-500 focus:border-transparent"
                }`}
                placeholder="How can I help you?"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle size={14} /> {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary-600/25 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
