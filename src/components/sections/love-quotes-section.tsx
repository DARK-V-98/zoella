'use client';
import { useState, useEffect } from "react";
import { Heart, Quote, Sparkles, Crown } from "lucide-react";
import { getLoveQuoteAction } from "@/app/actions";

export const LoveQuotesSection = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('My Heart');
    const [loading, setLoading] = useState(true);

    const fetchQuote = async () => {
        setLoading(true);
        const newQuote = await getLoveQuoteAction();
        setQuote(newQuote);
        setLoading(false);
    };

    useEffect(() => {
        fetchQuote();
        const interval = setInterval(fetchQuote, 10000); // New quote every 10 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-12 md:py-20 px-4">
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

                {/* Featured Quote Display */}
                <div className="max-w-4xl mx-auto mb-12 md:mb-16">
                    <div className={`glass-card p-6 md:p-10 text-center hover-glow transition-all duration-500`}>
                        <Quote className="w-8 h-8 md:w-12 md:h-12 mx-auto text-hot-pink mb-4 md:mb-6 animate-sparkle" />
                        
                        <blockquote className={`mobile-subheading font-bold mb-4 md:mb-6 leading-relaxed text-neon-pink min-h-[10rem] flex items-center justify-center`}>
                            {loading ? "Generating a special message..." : `"${quote}"`}
                        </blockquote>
                        
                        <div className="flex items-center justify-center gap-2 text-foreground/60">
                            <Heart className="w-4 h-4 animate-heartbeat text-hot-pink" />
                            <span className="text-sm md:text-base font-medium">— {loading ? "..." : author}</span>
                            <Heart className="w-4 h-4 animate-heartbeat text-hot-pink" />
                        </div>
                    </div>
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
