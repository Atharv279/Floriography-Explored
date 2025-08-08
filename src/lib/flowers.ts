import type { Flower, Occasion } from '@/types';
import { Gift, Heart, Ribbon, Handshake, Sun, Sparkles, Sprout } from 'lucide-react';

const flowers: Flower[] = [
  {
    slug: 'rose',
    name: 'Rose',
    scientificName: 'Rosa',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'red rose',
    meaningTeaser: 'The quintessential symbol of love and passion.',
    meaningAndSymbolism: 'The rose is one of the most famous and beloved of all flowers. A red rose is an unmistakable expression of love. A white rose symbolizes purity and innocence. Yellow roses express friendship and joy, while pink roses convey gratitude, grace, and admiration.',
    historyAndCulturalSignificance: 'Fossil evidence shows the rose is 35 million years old. In ancient Greece, the rose was closely associated with the goddess Aphrodite. The Romans turned it into a symbol of beauty and love, using it to decorate their homes, public buildings, and even their bodies. During the Victorian era, the "language of flowers" or floriography was used to send coded messages, with roses playing a key role.',
    occasions: ["Valentine's Day", 'Wedding', 'Anniversary'],
    funFacts: ['There are over 150 species of rose and thousands of hybrids.', 'Rose hips are a fruit from rose plants and are rich in Vitamin C.', 'The most expensive rose in the world is the Juliet rose, which took 15 years and $5 million to develop.'],
    colors: [
      { color: 'Red', meaning: 'Passionate love, romance, and desire.' },
      { color: 'White', meaning: 'Purity, innocence, new beginnings, and sympathy.' },
      { color: 'Yellow', meaning: 'Friendship, joy, and get well wishes.' },
      { color: 'Pink', meaning: 'Gratitude, appreciation, and admiration.' },
    ],
  },
  {
    slug: 'lily',
    name: 'Lily',
    scientificName: 'Lilium',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'white lily',
    meaningTeaser: 'Symbolizing purity, majesty, and rebirth.',
    meaningAndSymbolism: 'Lilies are elegant, stately flowers often associated with royalty and purity. White lilies symbolize chastity and virtue, making them popular at weddings and also funerals, where they represent the soul of the departed returning to a state of peace. The stargazer lily, with its vibrant pink color and fragrance, symbolizes ambition and prosperity.',
    historyAndCulturalSignificance: "In Greek mythology, the lily was said to have sprung from the milk of Hera, queen of the gods. In Christianity, the white lily (Madonna Lily) is associated with the Virgin Mary, representing her purity and divinity. They are one of the most significant flowers in Chinese culture, often given at weddings because the name sounds like the start of a phrase wishing the couple a happy union for a hundred years.",
    occasions: ['Wedding', 'Funeral', 'New Beginnings'],
    funFacts: ['Some species of lily are edible and are grown for their bulbs.', 'Lilies are highly toxic to cats.', 'There are over 100 species of true lilies.'],
    colors: [
        { color: 'White', meaning: 'Purity, majesty, and rebirth.' },
        { color: 'Pink (Stargazer)', meaning: 'Prosperity, abundance, and ambition.' },
        { color: 'Orange', meaning: 'Confidence, pride, and wealth.' },
    ],
  },
  {
    slug: 'sunflower',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'sunflower field',
    meaningTeaser: 'A beacon of adoration, loyalty, and longevity.',
    meaningAndSymbolism: 'As its name suggests, the sunflower is known for following the sun, a behavior called heliotropism. This makes it a symbol of adoration, loyalty, and unwavering faith. Its bright, cheerful face also embodies happiness, warmth, and the vitality of the sun itself.',
    historyAndCulturalSignificance: 'Sunflowers were first domesticated by Native Americans in North America around 3000 B.C., who used them for food, oil, and dye. In Incan culture, sunflowers were worshipped as a symbol of the sun god. Today, they are a global symbol of positivity and are often given to brighten someone\'s day.',
    occasions: ['Friendship', 'Get Well', 'Birthday'],
    funFacts: ['A single sunflower head can contain up to 2,000 seeds.', 'The tallest sunflower on record reached over 30 feet high.', 'Not all sunflowers are yellow; they can also be red, orange, and purple.'],
    colors: [],
  },
  {
    slug: 'lotus',
    name: 'Lotus',
    scientificName: 'Nelumbo nucifera',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'lotus flower',
    meaningTeaser: 'Represents purity, enlightenment, and self-regeneration.',
    meaningAndSymbolism: 'The lotus flower is a powerful symbol in many Eastern cultures. Despite rooting in mud, it miraculously blooms clean and beautiful on the water\'s surface. This journey represents rising above adversity and achieving enlightenment. A white lotus symbolizes purity of mind and spirit, while a blue lotus represents wisdom and knowledge.',
    historyAndCulturalSignificance: 'The lotus holds deep spiritual meaning in Hinduism and Buddhism. In Hindu traditions, many deities are depicted sitting or standing on a lotus flower. In Buddhism, it symbolizes the purity of the body, speech, and mind. In ancient Egypt, the blue lotus was associated with creation and rebirth, as it would close at night and reopen in the morning.',
    occasions: ['New Beginnings', 'Spiritual Milestones'],
    funFacts: ['The lotus plant can control the temperature of its flowers.', 'Lotus seeds can remain viable for hundreds, even thousands, of years.', 'Almost every part of the lotus plant is edible.'],
    colors: [
        { color: 'White', meaning: 'Purity of mind and spirit.' },
        { color: 'Pink', meaning: 'The supreme lotus, often reserved for the highest deities.' },
        { color: 'Blue', meaning: 'The victory of the spirit over the senses; wisdom and knowledge.' },
    ],
  },
  {
    slug: 'tulip',
    name: 'Tulip',
    scientificName: 'Tulipa',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'red tulips',
    meaningTeaser: 'A declaration of perfect love and springtime.',
    meaningAndSymbolism: 'Generally, tulips represent deep and perfect love. Like roses, different colors of tulips carry their own significance. Red tulips are most strongly associated with true love, while purple symbolizes royalty. Yellow tulips once represented hopeless love, but now signify cheerful thoughts and sunshine.',
    historyAndCulturalSignificance: 'Originally from Central Asia, tulips were brought to Turkey where they became a cherished symbol of the Ottoman Empire. In the 17th century, they caused a speculative frenzy in the Netherlands known as "Tulip Mania," where single bulbs sold for more than a house. Today, the Netherlands is still the world\'s largest commercial producer of tulips.',
    occasions: ['Anniversary', 'Birthday', 'Get Well'],
    funFacts: ['Tulips are part of the lily family.', 'They are one of the few flowers that continue to grow after being cut.', 'The petals of a tulip are edible.'],
    colors: [
        { color: 'Red', meaning: 'A declaration of true love.' },
        { color: 'Yellow', meaning: 'Cheerful thoughts and sunshine.' },
        { color: 'Purple', meaning: 'Royalty and nobility.' },
        { color: 'White', meaning: 'Forgiveness and worthiness.' },
    ],
  },
  {
    slug: 'orchid',
    name: 'Orchid',
    scientificName: 'Orchidaceae',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'purple orchid',
    meaningTeaser: 'Exotic beauty, love, strength, and luxury.',
    meaningAndSymbolism: 'Orchids are a symbol of exotic beauty, refinement, and charm. They also represent love, luxury, strength, and beauty. The specific meaning can change with color: pink for grace and femininity, purple for royalty and admiration, and white for innocence and elegance.',
    historyAndCulturalSignificance: 'In ancient Greece, orchids were associated with virility. The Aztecs drank a mixture of vanilla orchid and chocolate to give them strength. During the Victorian era, orchids became a symbol of luxury and were collected by the wealthy in a craze known as "Orchidelirium".',
    occasions: ['Anniversary', 'Birthday', 'New Beginnings'],
    funFacts: ['Orchids are one of the largest families of flowering plants, with over 25,000 species.', 'The vanilla bean comes from a species of orchid.', 'Some orchid species can live for over 100 years.'],
    colors: [
      { color: 'Purple', meaning: 'Royalty, respect, and admiration.' },
      { color: 'Pink', meaning: 'Grace, joy, and femininity.' },
      { color: 'White', meaning: 'Innocence, purity, and elegance.' },
      { color: 'Yellow', meaning: 'Friendship and new beginnings.' },
    ],
  },
  {
    slug: 'daisy',
    name: 'Daisy',
    scientificName: 'Bellis perennis',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'white daisies',
    meaningTeaser: 'Innocence, purity, and new beginnings.',
    meaningAndSymbolism: 'The daisy is most often associated with purity, innocence, and true love. Its simple, cheerful appearance brings to mind childhood and new beginnings. It can also symbolize loyal love and patience.',
    historyAndCulturalSignificance: 'The name "daisy" comes from the Old English "dæges eage," meaning "day\'s eye," because the petals open at dawn and close at dusk. In Norse mythology, the daisy is the sacred flower of Freya, the goddess of love, beauty, and fertility. In Victorian times, daisies represented innocence and were often depicted with children.',
    occasions: ['New Beginnings', 'Friendship', 'Get Well'],
    funFacts: ['Daisies are found on every continent except Antarctica.', 'They are actually two flowers in one: the colored petals count as one flower, and the yellow center is a collection of tiny disc florets.', 'You can eat the leaves of the common daisy in salads.'],
    colors: [
      { color: 'White', meaning: 'Purity and innocence.' },
      { color: 'Yellow', meaning: 'Cheerfulness and friendship.' },
      { color: 'Pink', meaning: 'Gentle affection and admiration.' },
    ],
  },
  {
    slug: 'lavender',
    name: 'Lavender',
    scientificName: 'Lavandula',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'lavender field',
    meaningTeaser: 'Purity, silence, devotion, and serenity.',
    meaningAndSymbolism: 'Lavender represents purity, silence, devotion, serenity, grace, and calmness. Its purple hue is also associated with royalty and luxury. The scent is known for its relaxing and healing properties, symbolizing peace and tranquility.',
    historyAndCulturalSignificance: 'The ancient Egyptians used lavender for mummification and as a perfume. The Romans used it for bathing, cooking, and scenting the air. In medieval and Renaissance Europe, it was scattered on floors to disinfect and deodorize. Queen Victoria was a great fan of lavender and used it in everything from furniture polish to tea.',
    occasions: ['Get Well', 'Spiritual Milestones', 'New Beginnings'],
    funFacts: ['The name Lavender comes from the Latin word "lavare," which means "to wash."', 'Lavender is a member of the mint family.', 'It is a natural insect repellent.'],
    colors: [],
  },
  {
    slug: 'carnation',
    name: 'Carnation',
    scientificName: 'Dianthus caryophyllus',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'pink carnations',
    meaningTeaser: 'Love, fascination, and distinction.',
    meaningAndSymbolism: 'Carnations, with their ruffled petals, express love, fascination, and distinction. The meaning varies with color. A pink carnation symbolizes a mother\'s undying love, making it the official flower for Mother\'s Day. Red carnations signify deep love and affection, while white ones represent pure love and good luck.',
    historyAndCulturalSignificance: 'Carnations have been cultivated for over 2,000 years. In ancient Greece and Rome, they were used in art and decor. Christian legend says that carnations first appeared from the Virgin Mary\'s tears, making them a symbol of a mother\'s love. In many countries, red carnations are a symbol of socialism and the labor movement.',
    occasions: ["Valentine's Day", 'Anniversary', 'Birthday'],
    funFacts: ['The scientific name Dianthus comes from two Greek words: "dios," meaning gods, and "anthos," meaning flower. Thus, they are "The Flowers of God."', 'Carnations are naturally fragrant with a clove-like scent.', 'They are one of the longest-lasting cut flowers.'],
    colors: [
      { color: 'Pink', meaning: "A mother's love, gratitude." },
      { color: 'Light Red', meaning: 'Admiration.' },
      { color: 'Dark Red', meaning: 'Deep love and affection.' },
      { color: 'White', meaning: 'Pure love and good luck.' },
      { color: 'Yellow', meaning: 'Rejection or disappointment.' },
    ],
  },
];

export function getAllFlowers(): Flower[] {
  return flowers;
}

export function getFlowerBySlug(slug: string): Flower | undefined {
  return flowers.find((flower) => flower.slug === slug);
}

export function getFlowerByName(name: string): Flower | undefined {
  return flowers.find((flower) => flower.name.toLowerCase() === name.toLowerCase());
}

export function getPopularFlowers(): Flower[] {
  return flowers.slice(0, 4);
}

export function getNextPrevFlower(slug: string): { next: Flower | null, prev: Flower | null } {
  const currentIndex = flowers.findIndex(f => f.slug === slug);
  if (currentIndex === -1) {
    return { next: null, prev: null };
  }
  const prev = currentIndex > 0 ? flowers[currentIndex - 1] : null;
  const next = currentIndex < flowers.length - 1 ? flowers[currentIndex + 1] : null;
  return { prev, next };
}

export const occasionsData = [
  { name: "Valentine's Day", slug: "valentines-day", description: 'Express love and romance with these classic choices.', icon: Heart },
  { name: 'Wedding', slug: 'wedding', description: 'Symbolize purity, love, and new beginnings on the special day.', icon: Ribbon },
  { name: 'Birthday', slug: 'birthday', description: 'Celebrate another year with bright and cheerful blooms.', icon: Gift },
  { name: 'Anniversary', slug: 'anniversary', description: 'Show your enduring love and appreciation.', icon: Sparkles },
  { name: 'Get Well', slug: 'get-well', description: 'Send wishes for a speedy recovery with uplifting flowers.', icon: Sun },
  { name: 'Friendship', slug: 'friendship', description: 'Show your friends how much you care.', icon: Handshake },
  { name: 'Funeral', slug: 'funeral', description: 'Convey sympathy and honor a life with respectful arrangements.', icon: () => '🕊️' },
  { name: 'New Beginnings', slug: 'new-beginnings', description: 'Mark a new chapter in life with symbols of growth and hope.', icon: Sprout },
]

export function getAllOccasions() {
  return occasionsData;
}

export function getFlowersByOccasion(occasion: Occasion): Flower[] {
  return flowers.filter(flower => flower.occasions.includes(occasion));
}
