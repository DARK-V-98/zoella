'use client';
import { useState } from "react";
import { Mail, Heart } from "lucide-react";
import { LoveLettersModal } from "./love-letters-modal";

export const FloatingLoveButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-8 right-8 z-40 glass-card p-4 hover-glow transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6 text-neon-pink animate-sparkle" />
          <span className="princess-text font-bold hidden sm:inline">Love Letters</span>
          <Heart className="w-5 h-5 text-neon-purple animate-heartbeat" />
        </div>

        {/* Floating Hearts around button */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <div className="absolute -top-6 -left-2 animate-float opacity-80">💕</div>
            <div className="absolute -top-4 -right-6 animate-float opacity-70" style={{animationDelay: '0.5s'}}>💖</div>
            <div className="absolute -bottom-6 -left-4 animate-float opacity-80" style={{animationDelay: '1s'}}>💝</div>
            <div className="absolute -bottom-4 -right-2 animate-float opacity-70" style={{animationDelay: '1.5s'}}>💗</div>
          </div>
        )}

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 fade-in">
            <div className="glass-card px-4 py-2 text-sm princess-text font-bold whitespace-nowrap">
              Click for special messages 💖
            </div>
          </div>
        )}
      </button>

      <LoveLettersModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
