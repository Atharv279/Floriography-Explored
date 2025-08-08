'use client';

import { useState, useMemo } from 'react';
import type { Flower } from '@/types';
import { Input } from '@/components/ui/input';
import { FlowerCard } from './flower-card';
import { Search } from 'lucide-react';

interface FlowerListClientProps {
  flowers: Flower[];
}

export function FlowerListClient({ flowers }: FlowerListClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFlowers = useMemo(() => {
    return flowers.filter((flower) =>
      flower.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [flowers, searchTerm]);

  const groupedFlowers = useMemo(() => {
    if (searchTerm) return {};
    return flowers.reduce((acc, flower) => {
      const firstLetter = flower.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(flower);
      return acc;
    }, {} as Record<string, Flower[]>);
  }, [flowers, searchTerm]);

  return (
    <div>
      <div className="relative mb-8 max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for a flower..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 text-lg py-6"
        />
      </div>

      {searchTerm ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFlowers.length > 0 ? (
            filteredFlowers.map((flower) => (
              <FlowerCard key={flower.slug} flower={flower} />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">No flowers found matching your search.</p>
          )}
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(groupedFlowers)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([letter, flowersInGroup]) => (
              <div key={letter}>
                <h2 className="text-3xl font-bold font-headline text-primary border-b-2 border-primary/30 pb-2 mb-6">
                  {letter}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {flowersInGroup.map((flower) => (
                    <FlowerCard key={flower.slug} flower={flower} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
