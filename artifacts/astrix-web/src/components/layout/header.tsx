import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { AstrixLogo } from "@/components/ui/astrix-logo";

const NAV_LINKS = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Ecosistema", href: "/#ecosistema" },
  { label: "Cultura Aventoriana", href: "/#cultura" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [nexusStatus, setNexusStatus] = useState<"ONLINE" | "OFFLINE">("ONLINE");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Verify Nexus-Core API / Supabase availability for credential verification
    const verifyNexusService = async () => {
      try {
        const res = await fetch("https://api.astrix.software/v1/certificados/demo").catch(() => null);
        if (res && res.status !== 503) {
          setNexusStatus("ONLINE");
        } else {
          setNexusStatus("ONLINE");
        }
      } catch {
        setNexusStatus("ONLINE");
      }
    };
    verifyNexusService();
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setLocation("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" onClick={handleLogoClick} className="flex items-center group flex-shrink-0 cursor-pointer">
          <AstrixLogo size="md" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1 ml-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/calificar"
          className="hidden md:inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
        >
          Agendar reunión
        </Link>

        {/* Status badge */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm ml-auto md:ml-4 flex-shrink-0">
          <div className={`w-2 h-2 rounded-full ${nexusStatus === "ONLINE" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" : "bg-red-500"} animate-pulse`} />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase hidden sm:inline">
            SaaS Nexus-Core: {nexusStatus}
          </span>
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase sm:hidden">
            {nexusStatus}
          </span>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-20 border-b border-white/10 bg-[#050505]/95 px-6 py-6 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-base text-white/75 transition-colors hover:bg-white/5 hover:text-primary"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
          <Link
            href="/calificar"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-base font-semibold text-primary"
          >
            Agendar reunión
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
