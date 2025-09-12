import { useState } from "react";
import { X, Heart, Mail, Sparkles } from "lucide-react";

interface LoveLettersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const loveLetters = [
  {
    id: 1,
    title: "My Dearest Princess",
    content: "Every morning I wake up grateful that you exist in this world. Your presence makes everything brighter, more beautiful, more meaningful. You are the sunshine that chases away all the clouds in my life. I love you more each day, my precious Princess Zoella. 💖",
  },
  {
    id: 2,
    title: "To My Beautiful Soul",
    content: "Your kindness touches everyone around you, but it's your heart that captured mine completely. The way you care for others, the way you light up when you're happy, the way you make me feel like I'm the luckiest person alive - these are just some of the reasons why I adore you. 👑",
  },
  {
    id: 3,
    title: "Princess of My Dreams",
    content: "In a world full of ordinary, you are extraordinary. You are magic, wonder, and pure love all wrapped up in the most beautiful person I've ever known. Thank you for being you, for being mine, for making life an incredible adventure. ✨",
  },
  {
    id: 4,
    title: "My Forever Love",
    content: "When I think about our future together, my heart fills with so much joy I can barely contain it. Every day with you is a gift, every moment is precious, and every memory we create is a treasure I'll cherish forever. You are my always and forever, Princess. 💍",
  },
];

export const LoveLettersModal = ({ isOpen, onClose }: LoveLettersModalProps) => {
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-glass-border">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-neon-pink animate-sparkle" />
            <h2 className="text-2xl font-bold princess-text">Love Letters</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-princess-pink/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-foreground/60" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {selectedLetter === null ? (
            // Letters List
            <div className="space-y-4">
              <p className="text-center text-foreground/80 mb-6">
                Special messages written just for you, my Princess 💖
              </p>
              {loveLetters.map((letter) => (
                <div
                  key={letter.id}
                  onClick={() => setSelectedLetter(letter.id)}
                  className="glass-card p-4 cursor-pointer hover-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-neon-pink animate-heartbeat" />
                    <h3 className="font-bold princess-text">{letter.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/60 mt-2">
                    Click to read your love letter...
                  </p>
                </div>
              ))}
            </div>
          ) : (
            // Selected Letter
            <div className="fade-in">
              <button
                onClick={() => setSelectedLetter(null)}
                className="flex items-center gap-2 text-neon-pink hover:text-neon-purple transition-colors mb-6"
              >
                ← Back to letters
              </button>
              
              {(() => {
                const letter = loveLetters.find(l => l.id === selectedLetter);
                return letter ? (
                  <div className="glass-card p-6 bg-gradient-princess">
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="w-6 h-6 text-pearl-white animate-sparkle" />
                      <h3 className="text-2xl font-bold text-pearl-white">{letter.title}</h3>
                    </div>
                    <p className="text-pearl-white leading-relaxed text-lg">
                      {letter.content}
                    </p>
                    <div className="flex justify-center mt-6">
                      <Heart className="w-8 h-8 text-pearl-white animate-heartbeat" />
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};