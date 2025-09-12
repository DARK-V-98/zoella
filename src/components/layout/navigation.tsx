'use client';
import { useState } from "react";
import { Heart, Sparkles, Quote, Crown, Star, Home } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "timeline", label: "Our Story", icon: Heart },
    { id: "special", label: "Why You're Special", icon: Crown },
    { id: "quotes", label: "Love Quotes", icon: Quote },
    { id: "dreams", label: "Future Dreams", icon: Star },
    { id: "surprise", label: "Surprise", icon: Sparkles },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-6 right-6 z-50 md:hidden glass-card p-3 hover-glow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Sparkles className="w-6 h-6 text-neon-pink" />
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-40 glass-card transition-all duration-300 ${
        isOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
      }`}>
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="princess-text mobile-subheading font-bold mb-3 md:mb-0">
              Princess Zoella 👑
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 md:gap-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 hover-glow touch-manipulation ${
                      activeSection === item.id 
                        ? 'bg-neon-pink text-pearl-white shadow-glow' 
                        : 'text-foreground hover:text-neon-pink'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm md:text-base hidden xs:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
