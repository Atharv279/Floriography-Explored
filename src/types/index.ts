export interface Flower {
  slug: string;
  name: string;
  scientificName: string;
  image: string;
  aiHint: string;
  meaningTeaser: string;
  meaningAndSymbolism: string;
  historyAndCulturalSignificance: string;
  occasions: string[];
  funFacts: string[];
  colors: {
    color: string;
    meaning: string;
  }[];
}

export type Occasion = "Valentine's Day" | 'Wedding' | 'Birthday' | 'Anniversary' | 'Get Well' | 'Friendship' | 'Funeral' | 'New Beginnings' | 'Spiritual Milestones';
