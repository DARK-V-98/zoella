'use client';
import { useState, useEffect, useRef } from "react";
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

const sections = [
  { id: "home", component: HeroSection },
  { id: "timeline", component: TimelineSection },
  { id: "special", component: SpecialSection },
  { id: "quotes", component: LoveQuotesSection },
  { id: "dreams", component: DreamsSection },
  { id: "surprise", component: SurpriseSection },
];

export const PrincessWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showSecret, setShowSecret] = useState(false);
  const [showMobileSheet, setShowMobileSheet] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setShowSecret(true);
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.removeEventListener('keydown', handleKeyPress);
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleRefresh = async () => {
    setRefreshKey(prev => prev + 1);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const handleSwipeUp = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex < sections.length - 1) {
      document.getElementById(sections[currentIndex + 1].id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSwipeDown = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      document.getElementById(sections[currentIndex - 1].id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDoubleTap = () => {
    setShowMobileSheet(true);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen relative overflow-x-hidden" key={refreshKey}>
        <FloatingHearts />
        <ConfettiEffect />
        <FloatingLoveMessages />
        
        <MobileGestureZone 
          onSwipeUp={handleSwipeUp}
          onSwipeDown={handleSwipeDown}
          onDoubleTap={handleDoubleTap}
        />
        
        <Navigation activeSection={activeSection} setActiveSection={(id) => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }} />
        
        <main>
          {sections.map(({ id, component: Component }, index) => (
            <section
              key={id}
              id={id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="min-h-screen flex items-center justify-center"
            >
              <Component />
            </section>
          ))}
        </main>
        
        <InteractiveHeart />
        <FloatingLoveButton />
        <LoveNotifications />
        
        <MobileBottomSheet 
          isOpen={showMobileSheet} 
          onClose={() => setShowMobileSheet(false)} 
        />
        
        <SecretPage isOpen={showSecret} onClose={() => setShowSecret(false)} />
        
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

        {activeSection === "home" && (
          <div className="fixed bottom-20 left-4 right-4 z-20 md:hidden">
            <div className="glass-card p-3 text-center">
              <p className="text-sm princess-text font-bold">
                Welcome, Princess Zoella 👑
              </p>
              <p className="text-xs text-foreground/60 mt-1">
                Double tap for surprises! ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </PullToRefresh>
  );
};
