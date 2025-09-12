import { useState } from "react";
import { Camera, Heart, Plus, Image } from "lucide-react";

// Placeholder for future photos - these would be replaced with actual memories
const placeholderImages = [
  {
    id: 1,
    title: "Our First Photo Together 💕",
    description: "The moment everything changed for the better",
  },
  {
    id: 2,
    title: "Your Beautiful Smile 😊",
    description: "When you lit up my entire world",
  },
  {
    id: 3,
    title: "Princess Moments 👑",
    description: "You always look like royalty to me",
  },
  {
    id: 4,
    title: "Happy Times 🌟",
    description: "Memories that make my heart sing",
  },
  {
    id: 5,
    title: "Adventures Together 🦋",
    description: "Every moment with you is an adventure",
  },
  {
    id: 6,
    title: "Special Occasions 💖",
    description: "Celebrating life and love together",
  },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold princess-text mb-6">
            Gallery of Moments 📸
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Beautiful memories captured in time, waiting to be filled with our precious moments together
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((image, index) => (
            <div 
              key={image.id}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setSelectedImage(image.id)}
              >
                {/* Image Container */}
                <div className="glass-card aspect-square overflow-hidden hover-glow">
                  {/* Placeholder Image */}
                  <div className="w-full h-full bg-gradient-magical flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 animate-float">💖</div>
                      <div className="absolute top-1/3 right-8 animate-float text-2xl" style={{animationDelay: '1s'}}>✨</div>
                      <div className="absolute bottom-8 left-1/3 animate-float" style={{animationDelay: '2s'}}>🦋</div>
                    </div>

                    {/* Main Content */}
                    <Image className="w-16 h-16 text-pearl-white/80 mb-4 animate-sparkle" />
                    <Plus className="w-8 h-8 text-pearl-white/60 mb-2" />
                    <p className="text-pearl-white/80 text-sm text-center px-4">
                      Ready for your beautiful photo
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredImage === image.id && (
                    <div className="absolute inset-0 bg-neon-pink/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                      <div className="text-center text-pearl-white p-4">
                        <Camera className="w-8 h-8 mx-auto mb-2 animate-heartbeat" />
                        <p className="font-medium">View Memory</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Image Title */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold princess-text mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Photos Message */}
        <div className="text-center mt-16 fade-in">
          <div className="glass-card p-8 max-w-2xl mx-auto hover-glow">
            <Heart className="w-12 h-12 mx-auto text-neon-pink animate-heartbeat mb-6" />
            <p className="text-xl princess-text font-bold mb-4">
              Ready for Our Beautiful Memories 💖
            </p>
            <p className="text-foreground/80 leading-relaxed">
              This gallery is waiting to be filled with our precious moments together. 
              Every photo will tell the story of our love, capturing the magic we create together, my Princess ✨
            </p>
          </div>
        </div>
      </div>

      {/* Modal for selected image (placeholder for now) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="glass-card p-8 max-w-md text-center">
            <Camera className="w-16 h-16 mx-auto text-neon-pink mb-4 animate-sparkle" />
            <h3 className="text-2xl princess-text font-bold mb-4">
              {placeholderImages.find(img => img.id === selectedImage)?.title}
            </h3>
            <p className="text-foreground/80 mb-6">
              {placeholderImages.find(img => img.id === selectedImage)?.description}
            </p>
            <p className="text-sm text-foreground/60">
              Waiting for your beautiful photo to make this memory complete 💕
            </p>
          </div>
        </div>
      )}
    </section>
  );
};