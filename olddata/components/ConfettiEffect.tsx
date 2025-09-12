import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  emoji: string;
  rotation: number;
  rotationSpeed: number;
}

export const ConfettiEffect = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [isActive, setIsActive] = useState(false);

  const confettiEmojis = ["🌸", "🌺", "💖", "💕", "✨", "💫", "🦋", "🌷", "💝", "👑"];

  const createConfetti = (mouseX: number, mouseY: number) => {
    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 15; i++) {
      newConfetti.push({
        id: Date.now() + i,
        x: mouseX,
        y: mouseY,
        vx: (Math.random() - 0.5) * 10,
        vy: Math.random() * -8 - 2,
        emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)],
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    return newConfetti;
  };

  const handleClick = (e: MouseEvent) => {
    const newConfetti = createConfetti(e.clientX, e.clientY);
    setConfetti(prev => [...prev, ...newConfetti]);
    setIsActive(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!isActive || confetti.length === 0) return;

    const animate = () => {
      setConfetti(prev => {
        const updated = prev.map(c => ({
          ...c,
          x: c.x + c.vx,
          y: c.y + c.vy,
          vy: c.vy + 0.3, // gravity
          rotation: c.rotation + c.rotationSpeed,
        })).filter(c => c.y < window.innerHeight + 100); // remove off-screen confetti

        if (updated.length === 0) {
          setIsActive(false);
        }
        
        return updated;
      });
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, [isActive, confetti.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {confetti.map(c => (
        <div
          key={c.id}
          className="absolute text-2xl"
          style={{
            left: c.x,
            top: c.y,
            transform: `rotate(${c.rotation}deg)`,
          }}
        >
          {c.emoji}
        </div>
      ))}
    </div>
  );
};