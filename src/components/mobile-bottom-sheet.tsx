'use client';
import { useState, useEffect } from "react";
import { X, Heart, Crown, Sparkles, Gift } from "lucide-react";

interface MobileBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickActions = [
  {
    id: 'heart',
    icon: Heart,
    label: 'Send Love',
    action: 'Sending love your way! 💖',
    color: 'text-neon-pink'
  },
  {
    id: 'crown',
    icon: Crown,
    label: 'Princess Mode',
    action: 'You are royalty! 👑',
    color: 'text-neon-purple'
  },
  {
    id: 'sparkles',
    icon: Sparkles,
    label: 'Magic Sparkles',
    action: 'Creating magic! ✨',
    color: 'text-neon-lavender'
  },
  {
    id: 'gift',
    icon: Gift,
    label: 'Special Surprise',
    action: 'You deserve all the surprises! 🎁',
    color: 'text-rose-blush'
  }
];

export const MobileBottomSheet = ({ isOpen, onClose }: MobileBottomSheetProps) => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedAction) {
      const action = quickActions.find(a => a.id === selectedAction);
      if (action) {
        setMessage(action.action);
        setTimeout(() => {
          setSelectedAction(null);
          setMessage('');
        }, 2000);
      }
    }
  }, [selectedAction]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 glass-card rounded-t-3xl p-6 animate-slideUp">
        {/* Handle */}
        <div className="w-12 h-1 bg-foreground/20 rounded-full mx-auto mb-6" />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold princess-text">Princess Actions</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-princess-pink/20 rounded-lg transition-colors touch-manipulation"
          >
            <X className="w-5 h-5 text-foreground/60" />
          </button>
        </div>

        {/* Message Display */}
        {message && (
          <div className="mb-6 p-4 glass-card bg-gradient-princess text-center">
            <p className="text-pearl-white font-bold animate-fadeIn">{message}</p>
          </div>
        )}

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => setSelectedAction(action.id)}
                className="glass-card p-4 text-center hover-glow transition-all duration-300 touch-manipulation active:scale-95"
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 animate-sparkle ${action.color}`} />
                <p className="text-sm font-medium text-foreground">{action.label}</p>
              </button>
            );
          })}
        </div>

        {/* Love Quote */}
        <div className="glass-card p-4 mb-4 text-center bg-gradient-princess">
          <p className="text-sm font-medium text-pearl-white italic">
            "You're the missing piece to my puzzle of life" 🧩💖
          </p>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-sm text-foreground/60 mb-2">
            Made with infinite love for Princess Zoella
          </p>
          <div className="flex justify-center space-x-2">
            <span className="animate-float">💕</span>
            <span className="animate-float" style={{animationDelay: '0.5s'}}>✨</span>
            <span className="animate-float" style={{animationDelay: '1s'}}>👑</span>
            <span className="animate-float" style={{animationDelay: '1.5s'}}>💖</span>
            <span className="animate-float" style={{animationDelay: '2s'}}>🦋</span>
          </div>
        </div>
      </div>
    </div>
  );
};
