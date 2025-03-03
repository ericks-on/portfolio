'use client';
import Link from "next/link";
import { FaGithub, FaInstagram, FaKaggle, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function HomeSummary() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
    const socials = {
        github: "https://www.github.com/ericks-on",
        linkedin: "https://www.linkedin.com/in/erickson-mbuvi-data-scientist/",
        kaggle: "https://www.kaggle.com/ericksonmbuvi",
        instagram: "https://www.instagram.com/erickson_mbuvi",
    };
    
    return (
        <div className="flex flex-col px-6 gap-8 md:w-3/5 justify-center">
            {/* Animated entrance for the greeting */}
            <h1 
                className={`text-6xl md:text-8xl text-amber-600 font-bold transition-all duration-1000 transform ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
            >
                Hey there!
            </h1>
            
            {/* Name with improved animation - more masculine style */}
            <div 
                className={`transition-all duration-1000 delay-300 transform ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
            >
                <div className="flex items-center">
                    <span className="text-3xl md:text-6xl mr-4">I&apos;m</span>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-gray-800 rounded-md blur-sm animate-pulse"></div>
                        <div className="relative rounded-md p-3 border border-gray-700" style={{ background: "var(--background)" }}>
                            <div className="flex items-baseline">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400 font-bold text-3xl md:text-6xl mr-2">
                                    Erickson
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400 font-bold text-2xl md:text-5xl">
                                    Mbuvi
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Profession tags with staggered animation */}
            <div 
                className={`flex gap-4 flex-col md:flex-row transition-all duration-1000 delay-500 transform ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            >
                <div className="group">
                    <p className="text-2xl md:text-4xl border-amber-700 border-2 rounded-sm p-3 font-bold transition-all duration-300 hover:bg-amber-700 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-amber-800/20 cursor-default" 
                      style={{ background: "var(--background)", color: "var(--foreground)" }}>
                        Data Scientist
                    </p>
                </div>

                <div className="group">
                    <p className="text-2xl md:text-4xl border-gray-700 border-2 rounded-sm p-3 font-bold transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-gray-800/20 cursor-default" 
                      style={{ background: "var(--background)", color: "var(--foreground)" }}>
                        Web Developer
                    </p>
                </div>
            </div>
            
            {/* Bio with fade-in animation */}
            <div 
                className={`max-w-2xl transition-all duration-1000 delay-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <p className="text-xl md:text-2xl leading-relaxed" style={{ color: "var(--foreground)" }}>
                    Data Scientist with expertise in machine learning and
                    predictive analytics. Adept at leveraging advanced
                    statistical techniques to solve complex business challenges.
                </p>
            </div>
            
            {/* Social icons with hover effects */}
            <div 
                className={`flex gap-6 transition-all duration-1000 delay-900 transform ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            >
                {Object.entries(socials).map(([platform, url], index) => (
                    <Link 
                        key={index}
                        href={url}
                        className={`transition-all duration-500 transform hover:scale-110 hover:-translate-y-2`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {platform === 'github' && <FaGithub className="h-10 w-10 hover:text-amber-600" style={{ color: "var(--foreground)" }} />}
                        {platform === 'kaggle' && <FaKaggle className="h-10 w-10 hover:text-amber-600" style={{ color: "var(--foreground)" }} />}
                        {platform === 'linkedin' && <FaLinkedinIn className="h-10 w-10 hover:text-amber-600" style={{ color: "var(--foreground)" }} />}
                        {platform === 'instagram' && <FaInstagram className="h-10 w-10 hover:text-amber-600" style={{ color: "var(--foreground)" }} />}
                    </Link>
                ))}
            </div>
            
            {/* Action buttons with animated hover effects */}
            <div 
                className={`flex gap-6 transition-all duration-1000 delay-1000 transform ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            >
                <Link
                    href="/contact"
                    className="group relative overflow-hidden rounded-sm bg-amber-700 px-6 py-3 text-lg font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-amber-700/30"
                >
                    <span className="relative z-10 transition-all duration-500 group-hover:text-white">Contact me</span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-amber-800 to-gray-700 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                </Link>

                <a
                    href="/docs/EricksonResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-sm border-2 border-gray-700 px-6 py-3 text-lg font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/30"
                    style={{ color: "var(--foreground)" }}
                >
                    <span className="relative z-10 transition-all duration-500 group-hover:text-white">View Resume</span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                </a>
            </div>
        </div>
    );
}