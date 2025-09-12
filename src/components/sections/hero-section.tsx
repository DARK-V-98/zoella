'use client';
import { useEffect, useState } from "react";
import { Heart, Crown, Sparkles, MessageCircle } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden p-4"
    >
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {showText && (
          <div className="fade-in">
            {/* Crown Icon */}
            <div className="mb-6 md:mb-8">
              <Crown className="w-14 h-14 md:w-16 md:h-16 mx-auto text-neon-pink animate-glow sparkle-text" />
            </div>

            {/* Welcome Text */}
            <h1 className="mobile-heading font-bold mb-4 md:mb-6 leading-tight">
              <span className="block princess-text animate-glow">Welcome,</span>
              <span className="block mobile-heading princess-text animate-rainbow">
                Princess Zoella
              </span>
            </h1>

            {/* Heart Animation */}
            <div className="mb-4 md:mb-8 flex justify-center items-center">
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-neon-pink animate-heartbeat" />
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-neon-purple animate-sparkle mx-2 md:mx-4" />
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-neon-pink animate-heartbeat" style={{animationDelay: '0.5s'}} />
            </div>

            {/* Love Quote */}
            <p className="mobile-subheading text-foreground/90 mb-4 md:mb-6 font-medium italic">
              "You are my sun, my moon, and all my stars" 🌟
            </p>
            
            {/* Subtitle */}
            <p className="mobile-body text-foreground/70 mb-6 md:mb-8">
              You light up my world like no one else, Princess Zoella 💖
            </p>

            {/* Magical Message */}
            <div className="glass-card p-6 md:p-8 mx-auto max-w-2xl hover-glow">
              <p className="mobile-body text-foreground leading-relaxed">
                This magical place is created with all my love, just for you. 
                Every sparkle, every heart, every color represents how special you are to me.
                <br className="hidden md:block" />
                <span className="block mt-2 princess-text font-bold">My beautiful Princess ✨</span>
              </p>
            </div>

            {/* Messenger Teaser */}
            <div className="mt-6 glass-card p-4 mx-auto max-w-lg hover-glow">
              <div className="flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5 text-neon-purple animate-swing" />
                <p className="mobile-body text-foreground/80">
                  P.S. I've built a special messenger just for us. Find it in the stars above!
                </p>
              </div>
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
