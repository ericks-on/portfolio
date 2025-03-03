"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="pt-20 flex flex-col items-center gap-6 min-h-screen justify-center text-center">
            <motion.h1 
                className="text-6xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Get in Touch
            </motion.h1>
            
            <motion.p 
                className="text-lg max-w-xl text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me via email or LinkedIn.
            </motion.p>
            
            <motion.div 
                className="flex gap-6 mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {[
                    { href: "mailto:mutisyaerickson@gmail.com", icon: <FaEnvelope />, color: "text-red-500" },
                    { href: "https://www.linkedin.com/in/erickson-mbuvi-data-scientist/", icon: <FaLinkedinIn />, color: "text-blue-600" },
                    { href: "https://www.github.com/ericks-on", icon: <FaGithub />, color: "text-gray-800" },
                    { href: "https://www.instagram.com/erickson_mbuvi", icon: <FaInstagram />, color: "text-pink-500" },
                ].map(({ href, icon, color }, index) => (
                    <motion.a 
                        key={index} 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`text-4xl ${color} transition-transform transform hover:scale-125 hover:rotate-3`}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {icon}
                    </motion.a>
                ))}
            </motion.div>

            <motion.div 
                className="flex flex-col md:flex-row gap-2 items-center justify-center mt-6 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                <span className="text-gray-600 font-semibold">Email:</span>
                <span className="text-gray-800 font-medium">mutisyaerickson@gmail.com</span>
            </motion.div>
        </div>
    );
}
