import { useState, useEffect } from "react";
import { Heart, Crown, Sparkles, Gift } from "lucide-react";

const loveMessages = [
  "You're the queen of my heart, Princess Zoella 👑",
  "My soul belongs to you forever and always 💜",
  "You make my world a thousand times brighter ✨",
  "Every breath I take is for you, my love 💖",
  "You're my dream come true, Princess 🌟",
  "I choose you in every lifetime, Zoella 💕",
  "You're the melody to my heart's song 🎵",
  "My love for you grows stronger every second 💝",
  "You're my everything, my beautiful Princess 🦋",
  "Together we create pure magic ✨💖",
  "You're the light that guides my way 🌙",
  "My heart is your forever home 🏠💕",
  "You're perfect exactly as you are, Princess 👑",
  "Every day with you is a blessing 🙏💜"
];

export const LoveNotifications = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentMessage(prev => (prev + 1) % loveMessages.length);
        }, 500);
      }, 4000);
    };

    const interval = setInterval(showNotification, 8000);
    
    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, []);

  return (
    <div className={`fixed top-20 md:top-24 right-4 z-30 transition-all duration-500 transform ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="glass-card p-3 md:p-4 max-w-xs hover-glow">
        <div className="flex items-start gap-2">
          <Heart className="w-5 h-5 text-hot-pink animate-heartbeat flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs md:text-sm font-medium text-foreground">
              {loveMessages[currentMessage]}
            </p>
          </div>
        </div>
        
        {/* Floating emojis */}
        <div className="absolute -top-2 -right-2 pointer-events-none">
          <div className="animate-float text-xs">💖</div>
        </div>
      </div>
    </div>
  );
};