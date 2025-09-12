'use client';
import { useState, useEffect } from "react";
import { Navigation } from "./layout/navigation";
import { FloatingHearts } from "./effects/floating-hearts";
import { InteractiveHeart } from "./interactive-heart";
import { FloatingLoveButton } from "./floating-love-button";
import { ConfettiEffect } from "./effects/confetti-effect";
import { SecretPage } from "./secret-page";
import { MobileGestureZone } from "./mobile-gesture-zone";
import { MobileBottomSheet } from "./mobile-bottom-sheet";
import { PullToRefresh } from "./pull-to-refresh";
import { LoveNotifications } from "./love-notifications";
import { FloatingLoveMessages } from "./effects/floating-love-messages";
import { HeroSection } from "./sections/hero-section";
import { TimelineSection } from "./sections/timeline-section";
import { SpecialSection } from "./sections/special-section";
import { LoveQuotesSection } from "./sections/love-quotes-section";
import { DreamsSection } from "./sections/dreams-section";
import { SurpriseSection } from "./sections/surprise-section";

export const PrincessWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showSecret, setShowSecret] = useState(false);
  const [showMobileSheet, setShowMobileSheet] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Secret key combination (Ctrl+Shift+P)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setShowSecret(true);
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleRefresh = async () => {
    // Refresh the page with love
    setRefreshKey(prev => prev + 1);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const handleSwipeUp = () => {
    const sections = ["home", "timeline", "special", "quotes", "dreams", "surprise"];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const handleSwipeDown = () => {
    const sections = ["home", "timeline", "special", "quotes", "dreams", "surprise"];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };

  const handleDoubleTap = () => {
    setShowMobileSheet(true);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection />;
      case "timeline":
        return <TimelineSection />;
      case "special":
        return <SpecialSection />;
      case "quotes":
        return <LoveQuotesSection />;
      case "dreams":
        return <DreamsSection />;
      case "surprise":
        return <SurpriseSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen bg-gradient-dreamy relative overflow-x-hidden" key={refreshKey}>
        {/* Background Effects */}
        <FloatingHearts />
        <ConfettiEffect />
        <FloatingLoveMessages />
        
        {/* Mobile Gesture Zone */}
        <MobileGestureZone 
          onSwipeUp={handleSwipeUp}
          onSwipeDown={handleSwipeDown}
          onDoubleTap={handleDoubleTap}
        />
        
        {/* Navigation */}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main Content */}
        <main className="pt-16 md:pt-20">
          {renderSection()}
        </main>
        
        {/* Interactive Elements */}
        <InteractiveHeart />
        <FloatingLoveButton />
        <LoveNotifications />
        
        {/* Mobile Bottom Sheet */}
        <MobileBottomSheet 
          isOpen={showMobileSheet} 
          onClose={() => setShowMobileSheet(false)} 
        />
        
        {/* Secret Page */}
        <SecretPage isOpen={showSecret} onClose={() => setShowSecret(false)} />
        
        {/* Welcome Message for Princess */}
        {activeSection === "home" && (
          <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-20 hidden lg:block">
            <div className="glass-card p-4 max-w-xs">
              <p className="text-sm princess-text font-bold text-center">
                Welcome home, Princess 👑
              </p>
              <p className="text-xs text-foreground/70 text-center mt-2">
                Every pixel made with love
              </p>
              <p className="text-xs text-foreground/50 text-center mt-1">
                Press Ctrl+Shift+P for a secret 🤫
              </p>
            </div>
          </div>
        )}

        {/* Mobile Welcome Message */}
        {activeSection === "home" && (
          <div className="fixed bottom-20 left-4 right-4 z-20 md:hidden">
            <div className="glass-card p-3 text-center">
              <p className="text-sm princess-text font-bold">
                Welcome, Princess Zoella 👑
              </p>
              <p className="text-xs text-foreground/60 mt-1">
                Double tap anywhere for surprises! ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </PullToRefresh>
  );
};
