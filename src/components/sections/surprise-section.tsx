'use client';
import { useEffect, useState } from "react";
import { Heart, Crown, Sparkles, Star, Diamond } from "lucide-react";

export const SurpriseSection = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const messageTimer = setTimeout(() => setShowMessage(true), 1000);
    const fireworksTimer = setTimeout(() => setShowFireworks(true), 2000);
    
    return () => {
      clearTimeout(messageTimer);
      clearTimeout(fireworksTimer);
    };
  }, []);

  const createFirework = (index: number) => (
    <div
      key={index}
      className="absolute animate-sparkle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${Math.random() * 20 + 15}px`,
      }}
    >
      ✨
    </div>
  );

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neon-pink/10 via-soft-lavender/20 to-princess-pink/15 p-4">
      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }, (_, i) => createFirework(i))}
        </div>
      )}

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 animate-float text-3xl">💖</div>
        <div className="absolute top-20 right-16 animate-float text-2xl" style={{animationDelay: '1s'}}>💕</div>
        <div className="absolute bottom-20 left-20 animate-float text-4xl" style={{animationDelay: '2s'}}>💝</div>
        <div className="absolute bottom-32 right-12 animate-float text-3xl" style={{animationDelay: '1.5s'}}>💖</div>
        <div className="absolute top-1/2 left-8 animate-float text-2xl" style={{animationDelay: '0.5s'}}>💞</div>
        <div className="absolute top-1/3 right-8 animate-float text-3xl" style={{animationDelay: '2.5s'}}>💗</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {showMessage && (
          <div className="fade-in">
            {/* Crown */}
            <div className="mb-8">
              <Crown className="w-16 h-16 md:w-20 md:h-20 mx-auto text-neon-pink animate-glow" />
            </div>

            {/* Main Surprise Message */}
            <div className="glass-card p-6 md:p-12 mb-8 hover-glow">
              <h1 className="mobile-heading font-bold mb-6 md:mb-8 leading-tight">
                <span className="block princess-text animate-rainbow mb-2 md:mb-4">Zoella,</span>
                <span className="block princess-text animate-glow mb-2 md:mb-4">My Princess,</span>
                <span className="block mobile-subheading md:text-5xl princess-text animate-heartbeat">
                  You are my Forever 💍
                </span>
              </h1>

              {/* Heart Animation */}
              <div className="flex justify-center mb-6 md:mb-8">
                <Heart className="w-12 h-12 md:w-16 md:h-16 text-neon-pink animate-heartbeat mr-4" />
                <Diamond className="w-10 h-10 md:w-12 md:h-12 text-neon-purple animate-sparkle mt-2" />
                <Heart className="w-12 h-12 md:w-16 md:h-16 text-neon-pink animate-heartbeat ml-4" style={{animationDelay: '0.5s'}} />
              </div>

              {/* Love Declaration */}
              <div className="space-y-4 text-base md:text-xl text-foreground/90 leading-relaxed">
                <p>
                  Every day with you feels like a fairy tale come true. You are not just my love,
                  you are my best friend, my inspiration, my everything.
                </p>
                <p>
                  Your smile lights up my darkest days, your laugh is music to my soul,
                  and your love is the greatest gift I could ever receive.
                </p>
                <p className="princess-text text-xl md:text-2xl font-bold">
                  Princess Zoella, you are the love of my life 👑💖
                </p>
              </div>
            </div>

            {/* Promise Rings */}
            <div className="glass-card p-6 md:p-8 mb-8 hover-glow">
              <div className="flex justify-center items-center mb-4 md:mb-6">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-neon-pink animate-sparkle mr-4" />
                <span className="text-3xl md:text-4xl animate-glow">💍</span>
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-neon-purple animate-heartbeat mx-3" />
                <span className="text-3xl md:text-4xl animate-glow">💍</span>
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-neon-pink animate-sparkle ml-4" />
              </div>
              <p className="text-lg md:text-2xl princess-text font-bold mb-4">
                My Promise to You
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                I promise to love you with all my heart, to cherish every moment we share,
                to support your dreams, and to be your devoted partner for all eternity.
                You will always be my Princess, my forever love.
              </p>
            </div>

            {/* Final Message */}
            <div className="glass-card p-6 md:p-10 hover-glow bg-gradient-princess">
              <Star className="w-10 h-10 md:w-12 md:h-12 mx-auto text-pearl-white animate-sparkle mb-6" />
              <p className="text-xl md:text-3xl font-bold text-pearl-white mb-6 leading-tight">
                Thank you for being the most incredible person in my life ✨
              </p>
              <p className="text-base md:text-xl text-pearl-white/90 mb-4">
                I love you more than words could ever express
              </p>
              <p className="text-lg md:text-2xl font-bold text-pearl-white animate-glow">
                Forever yours, my beautiful Princess Zoella 💖👑✨
              </p>
            </div>
          </div>
        )}
      </div>

      {/* More Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {showFireworks && (
          <>
            <div className="absolute top-1/4 left-1/4 animate-float text-5xl opacity-70">🎆</div>
            <div className="absolute top-1/3 right-1/4 animate-float text-4xl opacity-60" style={{animationDelay: '1s'}}>🎇</div>
            <div className="absolute bottom-1/3 left-1/3 animate-float text-5xl opacity-70" style={{animationDelay: '2s'}}>🎆</div>
            <div className="absolute bottom-1/4 right-1/3 animate-float text-4xl opacity-60" style={{animationDelay: '1.5s'}}>🎇</div>
          </>
        )}
      </div>
    </section>
  );
};
