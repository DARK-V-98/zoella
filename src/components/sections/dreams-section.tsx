'use client';
import { Plane, Heart, Home, Gamepad2, Star, Crown, MapPin, Camera } from "lucide-react";

const dreams = [
  {
    id: 1,
    title: "Travel Adventures",
    description: "Exploring magical places around the world, creating memories in every corner of the earth 🌍",
    icon: Plane,
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    id: 2,
    title: "Our Dream Home",
    description: "A beautiful home filled with love, laughter, and all our favorite things 🏠",
    icon: Home,
    gradient: "from-soft-lavender to-princess-pink",
  },
  {
    id: 3,
    title: "Gaming Together",
    description: "Building worlds, conquering challenges, and having endless fun in virtual realms 🎮",
    icon: Gamepad2,
    gradient: "from-neon-purple to-neon-lavender",
  },
  {
    id: 4,
    title: "Princess Moments",
    description: "Treating you like the royalty you are, every single day of our lives 👑",
    icon: Crown,
    gradient: "from-princess-pink to-neon-pink",
  },
  {
    id: 5,
    title: "Special Destinations",
    description: "Discovering hidden gems, romantic spots, and places that take our breath away 📍",
    icon: MapPin,
    gradient: "from-neon-lavender to-soft-lavender",
  },
  {
    id: 6,
    title: "Forever Memories",
    description: "Creating a lifetime of beautiful moments that we'll cherish forever ✨",
    icon: Camera,
    gradient: "from-rose-blush to-princess-pink",
  },
];

export const DreamsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pearl-white via-cream-white to-rose-blush relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float opacity-30">✨</div>
        <div className="absolute top-1/4 right-16 animate-float text-3xl opacity-20" style={{animationDelay: '1s'}}>🌟</div>
        <div className="absolute bottom-1/3 left-1/4 animate-float text-2xl opacity-25" style={{animationDelay: '2s'}}>💫</div>
        <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{animationDelay: '1.5s'}}>✨</div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold princess-text mb-6">
            Future Dreams Together 🌟
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            All the magical adventures and beautiful moments waiting for us in our future, my Princess
          </p>
        </div>

        {/* Dreams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dreams.map((dream, index) => {
            const Icon = dream.icon;

            return (
              <div 
                key={dream.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="group cursor-pointer">
                  {/* Dream Card */}
                  <div className="glass-card p-8 h-full hover-glow transition-all duration-500 group-hover:scale-105">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${dream.gradient} opacity-5 rounded-lg`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dream.gradient} p-0.5`}>
                          <div className="w-full h-full bg-pearl-white rounded-full flex items-center justify-center">
                            <Icon className="w-8 h-8 text-neon-pink animate-sparkle" />
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold princess-text mb-4 group-hover:animate-glow">
                        {dream.title}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground/80 leading-relaxed">
                        {dream.description}
                      </p>

                      {/* Decorative Elements */}
                      <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Heart className="w-6 h-6 text-neon-pink animate-heartbeat" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Message */}
        <div className="text-center mt-16 fade-in">
          <div className="glass-card p-10 max-w-4xl mx-auto hover-glow relative overflow-hidden">
            {/* Background Hearts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
              <div className="absolute top-4 left-8 animate-float">💖</div>
              <div className="absolute top-8 right-12 animate-float" style={{animationDelay: '1s'}}>💕</div>
              <div className="absolute bottom-6 left-16 animate-float" style={{animationDelay: '2s'}}>💝</div>
              <div className="absolute bottom-10 right-8 animate-float" style={{animationDelay: '0.5s'}}>💖</div>
            </div>

            <div className="relative z-10">
              <Star className="w-16 h-16 mx-auto text-neon-pink animate-sparkle mb-6" />
              <p className="text-3xl princess-text font-bold mb-6">
                Princess Zoella, Our Future is Bright ✨
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                Every dream we chase, every adventure we take, every moment we share - 
                they're all more beautiful because they're with you.
              </p>
              <p className="text-xl princess-text font-bold">
                Together, we'll make magic happen 💖👑
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
