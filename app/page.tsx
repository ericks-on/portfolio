import Image from "next/image";
import HomeSummary from "./ui/home/home_summary";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background subtle gradient with more masculine colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-800/20 dark:to-slate-600/15 z-0"></div>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 pt-20 h-screen w-full max-w-7xl mx-auto gap-6 md:gap-12">
        {/* Left side - HomeSummary */}
        <div className="w-full md:w-3/5 h-full flex items-center animate-fadeIn">
          <HomeSummary />
        </div>
        
        {/* Right side - Image with animation */}
        <div className="w-full md:w-2/5 h-3/5 md:h-full flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-w-md rounded-lg border border-gray-700 shadow-xl shadow-gray-900/30 overflow-hidden transform transition-all duration-700 hover:scale-[1.02] group">
            {/* Glow effect around image - using more masculine colors */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 via-slate-800 to-zinc-800 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 animate-tilt"></div>
            
            {/* Actual image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image 
                src="/images/erick_pic.png"
                alt="Erickson Mbuvi - Data Scientist & Web Developer"
                width={1365}
                height={2048}
                priority
                className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay gradient - darker, more masculine */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements - geometric shapes instead of dots */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-slate-700/5 dark:bg-slate-500/5 animate-float"
            style={{
              width: `${Math.random() * 8 + 3}rem`,
              height: `${Math.random() * 8 + 3}rem`,
              clipPath: i % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 45}deg)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 20}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Diagonal line accent */}
      <div className="absolute top-0 right-0 h-screen w-1 bg-gradient-to-b from-transparent via-amber-700/30 to-transparent transform -skew-x-12 translate-x-12 md:translate-x-24"></div>
      <div className="absolute bottom-12 left-0 h-1 w-24 md:w-48 bg-gradient-to-r from-transparent to-amber-700/30"></div>
    </div>
  );
}