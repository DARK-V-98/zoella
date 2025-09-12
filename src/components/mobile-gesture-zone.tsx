'use client';
import { useState, useRef, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

interface MobileGestureZoneProps {
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onDoubleTap?: () => void;
}

export const MobileGestureZone = ({ onSwipeUp, onSwipeDown, onDoubleTap }: MobileGestureZoneProps) => {
  const [touchEffects, setTouchEffects] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [lastTap, setLastTap] = useState(0);
  const touchStart = useRef({ x: 0, y: 0 });
  const gestureZoneRef = useRef<HTMLDivElement>(null);

  const createTouchEffect = (x: number, y: number) => {
    const id = Date.now();
    setTouchEffects(prev => [...prev, { id, x, y }]);
    
    setTimeout(() => {
      setTouchEffects(prev => prev.filter(effect => effect.id !== id));
    }, 1000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    
    const rect = gestureZoneRef.current?.getBoundingClientRect();
    if (rect) {
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      createTouchEffect(x, y);
    }

    // Detect swipes
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
      if (deltaY < 0 && onSwipeUp) {
        onSwipeUp();
      } else if (deltaY > 0 && onSwipeDown) {
        onSwipeDown();
      }
    }

    // Detect double tap
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
      if (onDoubleTap) {
        onDoubleTap();
      }
    }
    setLastTap(currentTime);
  };

  return (
    <div 
      ref={gestureZoneRef}
      className="fixed inset-0 z-10 pointer-events-auto touch-manipulation md:pointer-events-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ WebkitTouchCallout: 'none', userSelect: 'none' }}
    >
      {/* Touch effects */}
      {touchEffects.map(effect => (
        <div
          key={effect.id}
          className="absolute pointer-events-none z-20"
          style={{ 
            left: effect.x - 20, 
            top: effect.y - 20,
            animation: 'fadeIn 0.3s ease-out forwards, float 1s ease-out forwards'
          }}
        >
          <div className="relative">
            <Heart className="w-8 h-8 text-neon-pink animate-heartbeat absolute" />
            <Sparkles className="w-6 h-6 text-neon-purple animate-sparkle absolute top-1 left-1" />
          </div>
        </div>
      ))}
      
      {/* Subtle hint for mobile users */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 md:hidden">
        <div className="glass-card px-4 py-2 text-xs text-foreground/60 text-center">
          💫 Tap anywhere for sparkles • Swipe up/down to navigate 💫
        </div>
      </div>
    </div>
  );
};
