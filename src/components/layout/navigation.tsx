'use client';
import { useState } from "react";
import { Heart, Sparkles, Quote, Crown, Star, Home, MessageCircle } from "lucide-react";

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
    { id: "messenger", label: "Messenger", icon: MessageCircle, href: "https://zmassenger.zmes.vercel.app" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-4 right-4 z-50 md:hidden glass-card p-3 hover-glow tap-highlight-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Sparkles className="w-6 h-6 text-neon-pink" />
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-40 glass-card transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      } md:translate-y-0`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="princess-text text-xl md:text-2xl font-bold mb-4 md:mb-0">
              Princess Zoella 👑
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const commonProps = {
                  className: `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover-glow touch-manipulation tap-highlight-transparent ${
                    activeSection === item.id 
                      ? 'bg-neon-pink text-pearl-white shadow-glow' 
                      : 'text-foreground hover:text-neon-pink'
                  }`,
                };

                if ('href' in item && item.href) {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...commonProps}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{item.label}</span>
                    </a>
                  );
                }

                return (
                  <button
                    key={item.id}
                    {...commonProps}
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
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
