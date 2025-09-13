'use client';

import { useState, useEffect } from 'react';
import { Lock, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const PasswordProtection = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = process.env.NEXT_PUBLIC_SITE_PASSWORD || '200377';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      try {
        sessionStorage.setItem('isAuthenticated_zoella_site', 'true');
      } catch (e) {
        // Silently fail if sessionStorage is not available
      }
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  useEffect(() => {
    try {
        const storedAuth = sessionStorage.getItem('isAuthenticated_zoella_site');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }
    } catch (e) {
        // Silently fail if sessionStorage is not available.
        // The user will just have to re-authenticate on each visit.
    }
  }, []);

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        <div className="glass-card p-8">
            <Heart className="w-16 h-16 mx-auto text-neon-pink animate-glow mb-6" />
            <h2 className="text-2xl font-bold princess-text mb-4">
              A Special Place
            </h2>
            <p className="text-foreground/80 mb-6">
              This website is a private declaration of love.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="password-input" className="sr-only">Password</label>
                    <Input
                    id="password-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-center"
                    placeholder="Enter the magic word..."
                    />
                </div>
                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}
                <Button type="submit" className="w-full hover-glow">
                    Unlock <Lock className="ml-2 h-4 w-4" />
                </Button>
            </form>
        </div>
      </div>
    </div>
  );
};
