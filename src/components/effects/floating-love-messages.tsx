'use client';
import { useState, useEffect } from "react";
import { Heart, Sparkles, Crown, Gift, Star, Zap } from "lucide-react";

const loveMessages = [
  {
    text: "You're the most beautiful princess in the universe 👑✨",
    icon: Crown,
    color: "text-hot-pink"
  },
  {
    text: "My heart beats only for you, Zoella 💓",
    icon: Heart,
    color: "text-neon-pink"
  },
  {
    text: "Every moment with you is pure magic ✨💖",
    icon: Sparkles,
    color: "text-violet"
  },
  {
    text: "You're my greatest treasure, Princess 💎",
    icon: Gift,
    color: "text-magenta"
  },
  {
    text: "You shine brighter than all the stars 🌟",
    icon: Star,
    color: "text-deep-purple"
  },
  {
    text: "You electrify my soul with love ⚡💕",
    icon: Zap,
    color: "text-hot-pink"
  },
  {
    text: "Forever isn't long enough with you 💍",
    icon: Heart,
    color: "text-neon-purple"
  },
  {
    text: "You're my fairytale come true 🦋",
    icon: Sparkles,
    color: "text-violet"
  }
];

const floatingPositions = [
  { top: "10%", left: "5%" },
  { top: "20%", right: "10%" },
  { top: "60%", left: "8%" },
  { bottom: "25%", right: "5%" },
  { top: "40%", left: "3%" },
  { bottom: "45%", right: "8%" },
  { top: "75%", left: "12%" },
  { bottom: "15%", left: "6%" }
];

export const FloatingLoveMessages = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    const showMessage = (index: number) => {
      setVisibleMessages(prev => [...prev, index]);
      
      // Hide message after 4 seconds
      setTimeout(() => {
        setVisibleMessages(prev => prev.filter(i => i !== index));
      }, 4000);
    };

    // Show messages at intervals
    const intervals = loveMessages.map((_, index) => {
      return setTimeout(() => {
        showMessage(index);
        
        // Set up recurring intervals for each message
        setInterval(() => showMessage(index), 15000 + (index * 2000));
      }, index * 3000);
    });

    return () => {
      intervals.forEach(clearTimeout);
      intervals.forEach(id => clearInterval(id as unknown as number));
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {loveMessages.map((message, index) => {
        const position = floatingPositions[index];
        const Icon = message.icon;
        const isVisible = visibleMessages.includes(index);
        
        return (
          <div
            key={index}
            className={`absolute transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={position}
          >
            <div className="glass-card p-3 max-w-xs hover-glow animate-bounce-in">
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${message.color} animate-sparkle`} />
                <p className="text-xs font-medium text-foreground">
                  {message.text}
                </p>
              </div>
              
              {/* Floating hearts around message */}
              <div className="absolute -top-1 -right-1 animate-float">💕</div>
              <div className="absolute -bottom-1 -left-1 animate-float" style={{animationDelay: '1s'}}>✨</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
