export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {currentYear} Floriography Explored. All rights reserved.</p>
        <p className="text-sm">Discover the hidden language of nature's finest creations.</p>
      </div>
    </footer>
  );
}
