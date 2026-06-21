export function Footer() {
  const links = [
    { label: "Accueil", href: "#top" },
    { label: "Projets", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">© 2026 Votre Nom. Tous droits réservés.</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-secondary">
              {link.label}
            </a>
          ))}
          <a
            href="#top"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white transition hover:border-primary/40 hover:text-primary"
          >
            Haut de page
          </a>
        </nav>
      </div>
    </footer>
  );
}
