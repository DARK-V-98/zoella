'use client';
import { Heart, Star, Gift, Crown } from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    title: "First Hello",
    description: "The moment I first saw your beautiful smile, I knew my heart had found its home 💕",
    icon: Heart,
    date: "The Beginning",
  },
  {
    id: 2,
    title: "Falling Deeper",
    description: "Every conversation, every laugh, every moment made me fall more in love with you ✨",
    icon: Star,
    date: "Growing Love",
  },
  {
    id: 3,
    title: "My Princess",
    description: "The day I realized you weren't just someone special - you were my Princess, my everything 👑",
    icon: Crown,
    date: "Recognition",
  },
  {
    id: 4,
    title: "Forever Promise",
    description: "Creating this magical place to show you how deeply you're loved and cherished 💖",
    icon: Gift,
    date: "Today & Always",
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="mobile-heading font-bold princess-text mb-6">
            Our Love Story 💕
          </h2>
          <p className="mobile-body text-foreground/80">
            Every chapter of our journey together
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-neon rounded-full opacity-30"></div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={event.id} 
                className={`relative mb-12 md:mb-16 fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1.5 md:left-1/2 top-10 transform md:-translate-x-1/2 -translate-y-2">
                  <div className="w-6 h-6 bg-neon-pink rounded-full border-4 border-pearl-white shadow-glow animate-heartbeat"></div>
                </div>

                {/* Event Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:ml-auto md:pl-0 md:pr-16 text-left md:text-right'}`}>
                  <div className="glass-card p-6 hover-glow">
                    {/* Icon & Date */}
                    <div className={`flex items-center gap-3 mb-4 ${!isEven ? 'md:justify-end' : ''}`}>
                      <Icon className="w-6 h-6 text-neon-pink animate-sparkle" />
                      <span className="text-sm text-neon-purple font-bold">{event.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold princess-text mb-3">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline End */}
        <div className="text-center mt-16 fade-in">
          <div className="glass-card p-8 max-w-2xl mx-auto hover-glow">
            <p className="text-lg md:text-xl princess-text font-bold mb-4">
              And this is just the beginning... 💖
            </p>
            <p className="text-foreground/80 text-sm md:text-base">
              Our story continues to grow more beautiful with each passing day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
