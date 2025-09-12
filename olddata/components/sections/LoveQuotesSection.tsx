import { useState, useEffect } from "react";
import { Heart, Quote, Sparkles, Crown } from "lucide-react";

// Beautiful love quotes collection
const loveQuotes = [
  {
    id: 1,
    quote: "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my forever.",
    author: "My Heart",
    category: "Forever Love",
    color: "text-neon-pink"
  },
  {
    id: 2,
    quote: "You are not just my girlfriend, you're my best friend, my soulmate, and my whole world.",
    author: "To Princess Zoella",
    category: "Soulmate",
    color: "text-neon-purple"
  },
  {
    id: 3,
    quote: "Every moment with you feels like a fairytale, and you, my Princess, are the most beautiful story ever written.",
    author: "Our Love Story",
    category: "Princess Love",
    color: "text-neon-lavender"
  },
  {
    id: 4,
    quote: "I didn't believe in forever until I found you. Now I can't imagine anything else.",
    author: "Eternal Promise",
    category: "Forever",
    color: "text-rose-blush"
  },
  {
    id: 5,
    quote: "Your smile is my sunshine, your laugh is my favorite melody, and your love is my greatest treasure.",
    author: "Treasured Moments",
    category: "Joy",
    color: "text-hot-pink"
  },
  {
    id: 6,
    quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Ancient Wisdom",
    category: "Strength",
    color: "text-neon-purple"
  },
  {
    id: 7,
    quote: "You're my today and all of my tomorrows, my Princess. With you, every day is Valentine's Day.",
    author: "Daily Love",
    category: "Always",
    color: "text-deep-purple"
  },
  {
    id: 8,
    quote: "I love you not only for what you are, but for what I am when I am with you.",
    author: "Better Together",
    category: "Growth",
    color: "text-magenta"
  },
  {
    id: 9,
    quote: "Distance means nothing when someone means everything. You mean everything to me, Princess.",
    author: "Unbreakable Bond",
    category: "Connection",
    color: "text-violet"
  },
  {
    id: 10,
    quote: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Unique Love",
    category: "One & Only",
    color: "text-hot-pink"
  },
  {
    id: 11,
    quote: "You are my sun, my moon, and all my stars. My universe begins and ends with you.",
    author: "Cosmic Love",
    category: "Universe",
    color: "text-deep-purple"
  },
  {
    id: 12,
    quote: "True love isn't just about finding someone who accepts you. It's finding someone who makes you better.",
    author: "Growing Together",
    category: "True Love",
    color: "text-magenta"
  }
];

const quoteCategories = ["All", "Forever Love", "Princess Love", "Soulmate", "Joy", "Strength"];

export const LoveQuotesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredQuotes = selectedCategory === "All" 
    ? loveQuotes 
    : loveQuotes.filter(quote => quote.category === selectedCategory);

  // Auto-rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuote(prev => (prev + 1) % filteredQuotes.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredQuotes.length]);

  const handleQuoteChange = (index: number) => {
    if (index !== currentQuote) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuote(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentQuoteData = filteredQuotes[currentQuote] || filteredQuotes[0];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="mobile-heading font-bold princess-text mb-4 md:mb-6">
            Love Quotes for My Princess 💕
          </h2>
          <p className="mobile-body text-foreground/80 max-w-2xl mx-auto">
            Beautiful words that capture the depth of my love for you, Princess Zoella ✨
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {quoteCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'glass-card princess-text border-neon-pink'
                  : 'glass-card text-foreground/70 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Quote Display */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className={`glass-card p-6 md:p-10 text-center hover-glow transition-all duration-500 ${
            isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            <Quote className="w-8 h-8 md:w-12 md:h-12 mx-auto text-hot-pink mb-4 md:mb-6 animate-sparkle" />
            
            <blockquote className={`mobile-subheading font-bold mb-4 md:mb-6 leading-relaxed ${currentQuoteData?.color || 'text-neon-pink'}`}>
              "{currentQuoteData?.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-2 text-foreground/60">
              <Heart className="w-4 h-4 animate-heartbeat text-hot-pink" />
              <span className="text-sm md:text-base font-medium">— {currentQuoteData?.author}</span>
              <Heart className="w-4 h-4 animate-heartbeat text-hot-pink" />
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4 text-magenta" />
              <span className="text-xs text-foreground/50 font-medium">{currentQuoteData?.category}</span>
              <Sparkles className="w-4 h-4 text-magenta" />
            </div>
          </div>

          {/* Quote Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => handleQuoteChange(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote
                    ? 'bg-hot-pink animate-glow'
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quote Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredQuotes.slice(0, 6).map((quote, index) => (
            <div 
              key={quote.id}
              className="fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleQuoteChange(index)}
            >
              <div className="glass-card p-4 md:p-6 hover-glow transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-4 h-4 text-neon-purple animate-sparkle" />
                  <span className="text-xs font-medium text-foreground/60">{quote.category}</span>
                </div>
                
                <blockquote className={`text-sm md:text-base font-medium mb-4 flex-grow leading-relaxed ${quote.color}`}>
                  "{quote.quote}"
                </blockquote>
                
                <div className="text-xs text-foreground/50 text-center">
                  — {quote.author}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Love Message */}
        <div className="text-center mt-12 md:mt-16 fade-in">
          <div className="glass-card p-6 md:p-8 max-w-2xl mx-auto hover-glow">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-neon-pink animate-heartbeat" />
              <Crown className="w-6 h-6 text-neon-purple animate-sparkle" />
              <Heart className="w-6 h-6 text-neon-pink animate-heartbeat" />
            </div>
            <p className="mobile-subheading princess-text font-bold mb-4">
              Every Word Written with Love 💖
            </p>
            <p className="mobile-body text-foreground/80 leading-relaxed">
              These quotes are just a glimpse of what's in my heart, Princess Zoella. 
              Every single word represents my endless love for you ✨
            </p>
            <div className="flex justify-center space-x-3 mt-6">
              <span className="animate-float">💕</span>
              <span className="animate-float" style={{animationDelay: '0.5s'}}>✨</span>
              <span className="animate-float" style={{animationDelay: '1s'}}>👑</span>
              <span className="animate-float" style={{animationDelay: '1.5s'}}>💖</span>
              <span className="animate-float" style={{animationDelay: '2s'}}>🦋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};