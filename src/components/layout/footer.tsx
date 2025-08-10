import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t mt-12 bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Explore</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/flowers" className="text-muted-foreground hover:text-primary transition-colors">Flowers A-Z</Link>
              <Link href="/occasions" className="text-muted-foreground hover:text-primary transition-colors">By Occasion</Link>
              <Link href="/ai-suggester" className="text-muted-foreground hover:text-primary transition-colors">AI Suggester</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">About</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>
          <div>
             <h3 className="font-headline text-lg font-semibold mb-3">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            </nav>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-muted-foreground">
          <p>&copy; {currentYear} Floriography Explored. All rights reserved.</p>
          <p className="text-sm">Discover the hidden language of nature's finest creations.</p>
        </div>
      </div>
    </footer>
  );
}
