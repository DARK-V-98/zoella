import { useState } from "react";
import { Heart } from "lucide-react";
import magicalHeart from "@/assets/magical-heart.png";

export const InteractiveHeart = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <div 
        className="relative cursor-pointer transform transition-all duration-500 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'rotateY(360deg) scale(1.2)' : 'rotateY(0deg) scale(1)',
        }}
      >
        {/* 3D Heart Image */}
        <div className="relative">
          <img 
            src={magicalHeart}
            alt="Magical Heart"
            className="w-16 h-16 animate-float filter drop-shadow-lg"
            style={{
              filter: isHovered 
                ? 'drop-shadow(0 0 20px #ff69b4) drop-shadow(0 0 40px #da70d6)' 
                : 'drop-shadow(0 0 10px #ff69b4)',
            }}
          />
          
          {/* Glow Effect */}
          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isHovered ? 'animate-pulse bg-neon-pink/30' : 'bg-neon-pink/10'
          }`} />
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 fade-in">
            <div className="glass-card px-3 py-2 text-sm princess-text font-bold whitespace-nowrap">
              Made with love for Princess Zoella 💖
            </div>
          </div>
        )}

        {/* Sparkles around heart */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-2 -left-2 animate-sparkle">✨</div>
            <div className="absolute -top-3 -right-1 animate-sparkle" style={{animationDelay: '0.5s'}}>💫</div>
            <div className="absolute -bottom-2 -left-1 animate-sparkle" style={{animationDelay: '1s'}}>⭐</div>
            <div className="absolute -bottom-3 -right-2 animate-sparkle" style={{animationDelay: '1.5s'}}>✨</div>
          </div>
        )}
      </div>
    </div>
  );
};