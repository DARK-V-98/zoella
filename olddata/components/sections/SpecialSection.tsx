import { useState } from "react";
import { Heart, Crown, Star, Sparkles, Diamond, Smile } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Your Beautiful Soul",
    description: "Your kindness and gentle heart make the world brighter. You have the most beautiful soul I've ever known 💖",
    icon: Heart,
  },
  {
    id: 2,
    title: "My Royal Princess",
    description: "You carry yourself with such grace and elegance. A true princess in every way, inside and out 👑",
    icon: Crown,
  },
  {
    id: 3,
    title: "Your Amazing Smile",
    description: "When you smile, the whole universe stops and stares. Your smile is my favorite thing in the world 😊",
    icon: Smile,
  },
  {
    id: 4,
    title: "Precious as Diamonds",
    description: "You're rarer than the finest diamond, more precious than any treasure on earth 💎",
    icon: Diamond,
  },
  {
    id: 5,
    title: "My Shining Star",
    description: "You light up every room you enter and guide me through life's journey like a beautiful star ⭐",
    icon: Star,
  },
  {
    id: 6,
    title: "Pure Magic",
    description: "Everything about you is magical - your laugh, your dreams, your love. You make life extraordinary ✨",
    icon: Sparkles,
  },
];

export const SpecialSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-gradient-dreamy">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold princess-text mb-6">
            Why You're So Special 👑
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Every reason why you mean the world to me, my beautiful Princess
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isFlipped = flippedCard === reason.id;

            return (
              <div 
                key={reason.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div 
                  className="relative h-80 cursor-pointer group perspective-1000"
                  onClick={() => handleCardClick(reason.id)}
                >
                  {/* Card Container with 3D flip effect */}
                  <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}>
                    
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="glass-card h-full p-8 hover-glow flex flex-col items-center justify-center text-center">
                        <Icon className="w-16 h-16 text-neon-pink animate-sparkle mb-6" />
                        <h3 className="text-2xl font-bold princess-text mb-4">
                          {reason.title}
                        </h3>
                        <p className="text-sm text-foreground/60 uppercase tracking-wider font-medium">
                          Click to reveal 💖
                        </p>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="glass-card h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-princess">
                        <Icon className="w-12 h-12 text-pearl-white mb-6 animate-glow" />
                        <h3 className="text-xl font-bold text-pearl-white mb-4">
                          {reason.title}
                        </h3>
                        <p className="text-pearl-white/90 leading-relaxed text-sm">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 fade-in">
          <div className="glass-card p-8 max-w-3xl mx-auto hover-glow">
            <p className="text-2xl princess-text font-bold mb-4">
              Princess Zoella, you are perfect in every way 👑
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              These are just a few of the countless reasons why you're so incredibly special. 
              You are my heart, my joy, my everything. Forever and always, my beautiful Princess 💖✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};