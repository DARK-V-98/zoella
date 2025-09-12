'use client';
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { getLoveQuoteAction } from "@/app/actions";

export const LoveNotifications = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const fetchNewQuote = async () => {
    const quote = await getLoveQuoteAction();
    setCurrentMessage(quote);
  };

  useEffect(() => {
    const showNotification = async () => {
      await fetchNewQuote();
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Show for 5 seconds
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);
    
    // Then show a new notification every 15 seconds
    const interval = setInterval(showNotification, 15000);

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
              {currentMessage}
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
