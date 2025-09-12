'use client';
import { useState, useRef, useEffect } from "react";
import { RefreshCw, Heart } from "lucide-react";

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

export const PullToRefresh = ({ onRefresh, children }: PullToRefreshProps) => {
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const threshold = 80;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      startY.current = e.touches[0].clientY;
      setIsPulling(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPulling || window.scrollY > 0 || isRefreshing) return;

    const currentY = e.touches[0].clientY;
    const distance = Math.max(0, currentY - startY.current);
    
    if (distance > 0) {
      e.preventDefault();
      setPullDistance(Math.min(distance * 0.4, threshold + 20));
    }
  };

  const handleTouchEnd = async () => {
    if (!isPulling || isRefreshing) return;

    setIsPulling(false);
    
    if (pullDistance >= threshold) {
      setIsRefreshing(true);
      setPullDistance(threshold);
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        setPullDistance(0);
        setTimeout(() => setIsRefreshing(false), 500);
      }
    } else {
      setPullDistance(0);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY === 0 && e.deltaY < 0) {
        e.preventDefault();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull to refresh indicator */}
      <div 
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          transform: `translateY(${Math.max(-60, pullDistance - 60)}px)`,
          opacity: pullDistance > 20 ? 1 : 0
        }}
      >
        <div className="glass-card px-6 py-3 flex items-center gap-3">
          {isRefreshing ? (
            <>
              <RefreshCw className="w-5 h-5 text-neon-pink animate-spin" />
              <span className="text-sm font-medium text-foreground">Refreshing love...</span>
            </>
          ) : pullDistance >= threshold ? (
            <>
              <Heart className="w-5 h-5 text-neon-pink animate-heartbeat" />
              <span className="text-sm font-medium princess-text">Release for love! 💖</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-5 h-5 text-foreground/60" />
              <span className="text-sm font-medium text-foreground/60">Pull for more love...</span>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div 
        style={{
          transform: `translateY(${isRefreshing ? threshold : pullDistance}px)`,
          transition: isPulling ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {children}
      </div>
    </div>
  );
};
