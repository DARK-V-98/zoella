import { useEffect, useState } from "react";
import { Heart, Crown, Sparkles } from "lucide-react";
import heroBackground from "@/assets/romantic-background.jpg";

export const HeroSection = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-princess-pink/20 via-soft-lavender/30 to-rose-blush/40" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {showText && (
          <div className="fade-in">
            {/* Crown Icon */}
            <div className="mb-8">
              <Crown className="w-16 h-16 mx-auto text-neon-pink animate-glow sparkle-text" />
            </div>

            {/* Welcome Text */}
            <h1 className="mobile-heading md:text-7xl font-bold mb-6 leading-tight">
              <span className="block princess-text animate-glow">Welcome,</span>
              <span className="block mobile-heading md:text-8xl princess-text animate-rainbow">
                Princess Zoella
              </span>
            </h1>

            {/* Heart Animation */}
            <div className="mb-6 md:mb-8 flex justify-center items-center">
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-neon-pink animate-heartbeat" />
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-neon-purple animate-sparkle mx-2 md:mx-4 mt-1 md:mt-2" />
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-neon-pink animate-heartbeat" style={{animationDelay: '0.5s'}} />
            </div>

            {/* Love Quote */}
            <p className="mobile-subheading md:text-2xl text-foreground/90 mb-4 md:mb-6 font-medium px-4 italic">
              "You are my sun, my moon, and all my stars" 🌟
            </p>
            
            {/* Subtitle */}
            <p className="mobile-body md:text-lg text-foreground/70 mb-6 md:mb-8 px-4">
              You light up my world like no one else, Princess Zoella 💖
            </p>

            {/* Magical Message */}
            <div className="glass-card p-4 md:p-8 mx-auto max-w-2xl hover-glow">
              <p className="mobile-body md:text-xl text-foreground leading-relaxed">
                This magical place is created with all my love, just for you. 
                Every sparkle, every heart, every color represents how special you are to me.
                <br className="hidden md:block" />
                <span className="block mt-2 md:inline md:mt-0 princess-text font-bold">My beautiful Princess ✨</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float" style={{animationDelay: '0s'}}>
          💖
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float text-2xl" style={{animationDelay: '1s'}}>
          ✨
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float text-3xl" style={{animationDelay: '2s'}}>
          🦋
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float" style={{animationDelay: '1.5s'}}>
          💝
        </div>
      </div>
    </section>
  );
};