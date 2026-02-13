const Footer = () => (
  <footer className="border-t border-border/40 bg-background py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="mb-2 text-sm italic text-muted-foreground">
        Mastering the systems behind your success, so you have the freedom to follow your passion.
      </p>
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Jhezreel Suarez. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
