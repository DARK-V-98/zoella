'use client';

import { useState, useEffect } from 'react';
import { Heart, RefreshCw } from 'lucide-react';
import { getLoveQuoteAction } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LoveQuoteGenerator() {
  const [quote, setQuote] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    const newQuote = await getLoveQuoteAction();
    setQuote(newQuote);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 60000); // every 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg bg-secondary">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="text-primary" />
            <span>A Quote for My Love</span>
          </div>
          <Button variant="ghost" size="icon" onClick={fetchQuote} disabled={loading} aria-label="Refresh Quote">
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <blockquote className="text-center p-4 md:p-6 min-h-[100px] flex items-center justify-center">
          {loading ? (
            <p className="text-muted-foreground">Generating a special message...</p>
          ) : (
            <p className="text-xl md:text-2xl font-headline text-foreground">&ldquo;{quote}&rdquo;</p>
          )}
        </blockquote>
      </CardContent>
    </Card>
  );
}
