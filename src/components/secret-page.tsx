'use client';
import { useState } from "react";
import { Heart, Crown, Lock, Unlock } from "lucide-react";

interface SecretPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecretPage = ({ isOpen, onClose }: SecretPageProps) => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [attempts, setAttempts] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "princess") {
      setIsUnlocked(true);
    } else {
      setAttempts(prev => prev + 1);
      setPassword("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!isUnlocked ? (
          // Password Entry
          <div className="p-8 text-center">
            <Lock className="w-16 h-16 mx-auto text-neon-pink animate-glow mb-6" />
            <h2 className="text-3xl font-bold princess-text mb-4">
              Secret Garden 🌹
            </h2>
            <p className="text-foreground/80 mb-8">
              This special place is only for someone very dear to my heart...
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  What do I call you? 💖
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 glass-card border-neon-pink/30 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 rounded-lg text-center text-lg"
                  placeholder="Enter the magic word..."
                />
              </div>
              
              {attempts > 0 && (
                <p className="text-sm text-neon-purple">
                  Hint: You are my beautiful... 👑
                </p>
              )}
              
              <button
                type="submit"
                className="w-full glass-card p-4 hover-glow princess-text font-bold text-lg"
              >
                Unlock Secret 💖
              </button>
            </form>
            
            <button
              onClick={onClose}
              className="mt-6 text-foreground/60 hover:text-foreground transition-colors"
            >
              Maybe later...
            </button>
          </div>
        ) : (
          // Secret Content
          <div className="p-8 fade-in">
            <div className="text-center mb-8">
              <Unlock className="w-16 h-16 mx-auto text-neon-pink animate-sparkle mb-4" />
              <h2 className="text-4xl font-bold princess-text mb-4">
                Welcome to Our Secret Garden 🌹
              </h2>
              <p className="text-lg text-foreground/80">
                You found it, my beautiful Princess! 💖
              </p>
            </div>

            {/* Secret Messages */}
            <div className="space-y-6">
              <div className="glass-card p-6 bg-gradient-princess">
                <Crown className="w-8 h-8 mx-auto text-pearl-white mb-4" />
                <h3 className="text-2xl font-bold text-pearl-white text-center mb-4">
                  My Secret Promise 💍
                </h3>
                <p className="text-pearl-white/90 leading-relaxed text-center">
                  In this secret place, I want to tell you something special: 
                  Every single day, I fall in love with you all over again. 
                  Your laugh is my favorite song, your smile is my sunshine, 
                  and your love is my greatest treasure. You are not just my girlfriend, 
                  you are my best friend, my soulmate, my forever.
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold princess-text text-center mb-4">
                  Secret Wishes 🌟
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-4 glass-card">
                    <p>🌙</p>
                    <p className="mt-2">I wish I could show you the stars every night</p>
                  </div>
                  <div className="text-center p-4 glass-card">
                    <p>🌸</p>
                    <p className="mt-2">I wish I could give you all the flowers in the world</p>
                  </div>
                  <div className="text-center p-4 glass-card">
                    <p>🏰</p>
                    <p className="mt-2">I wish I could build you a castle in the clouds</p>
                  </div>
                  <div className="text-center p-4 glass-card">
                    <p>💫</p>
                    <p className="mt-2">I wish every moment could last forever with you</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 text-center">
                <Heart className="w-12 h-12 mx-auto text-neon-pink animate-heartbeat mb-4" />
                <p className="text-lg princess-text font-bold mb-4">
                  Thank you for being you, Princess Zoella 👑
                </p>
                <p className="text-foreground/80">
                  This secret garden will always be here, just like my love for you - 
                  eternal, unchanging, and growing stronger every day.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={onClose}
                className="glass-card px-8 py-3 hover-glow princess-text font-bold"
              >
                Keep This Secret Safe 💖
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
