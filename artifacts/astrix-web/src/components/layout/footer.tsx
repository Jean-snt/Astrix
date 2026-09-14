import { SiWhatsapp, SiTiktok, SiInstagram, SiGithub, SiFacebook } from "react-icons/si";
import { ExternalLink, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { AstrixLogo } from "@/components/ui/astrix-logo";

interface FooterProps {
  onVerifyClick?: () => void;
}

export function Footer({ onVerifyClick }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 mt-20 relative overflow-hidden">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <AstrixLogo size="md" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              El núcleo tecnológico de las empresas escalables en América Latina.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <Linkedin className="w-4 h-4" />,
                  href: "https://www.linkedin.com/in/aventorix-tech-841103430/",
                  label: "LinkedIn",
                  color: "#0A66C2",
                },
                {
                  icon: <SiTiktok className="w-4 h-4" />,
                  href: "https://www.tiktok.com/@aventorix_tecnologhy?is_from_webapp=1&sender_device=pc",
                  label: "TikTok",
                  color: "#ff0050",
                },
                {
                  icon: <SiInstagram className="w-4 h-4" />,
                  href: "https://www.instagram.com/aventorix_tech_tecnologhy/",
                  label: "Instagram",
                  color: "#E1306C",
                },
                {
                  icon: <SiGithub className="w-4 h-4" />,
                  href: "https://github.com/aventorix",
                  label: "GitHub",
                  color: "#ffffff",
                },
                {
                  icon: <SiFacebook className="w-4 h-4" />,
                  href: "#",
                  label: "Facebook",
                  color: "#1877F2",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:border-white/20 hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Ingeniería de Software", href: "/servicios/ingenieria-software" },
                { label: "Infraestructura Cloud", href: "/servicios/infraestructura-cloud" },
                { label: "Consultoría B2B", href: "/servicios/consultoria-tecnologica" },
                { label: "Tiendas Virtuales", href: "/servicios/tiendas-virtuales" },
                { label: "Sistemas ERP / CRM", href: "/servicios/erp-crm" },
                { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
                { label: "Bots de Automatización", href: "/servicios/bots-automatizacion" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Nosotros", href: "/#nosotros" },
                { label: "Cultura Aventoriana", href: "/#cultura" },
                { label: "Ecosistema Tecnológico", href: "/#ecosistema" },
                { label: "5 Áreas Corporativas", href: "/#areas-core" },
                { label: "Agendar Sesión", href: "/calificar", external: false },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3 opacity-60" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
              Contacto
            </h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              ¿Necesitas una arquitectura que escale? Habla con nuestro equipo.
            </p>
            <a
              href="/calificar"
              className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-medium w-full justify-center mb-4"
            >
              Consultoría
            </a>
            <p className="text-xs text-muted-foreground text-center">
              asistente.gerencia.aventorix@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
            {/* Left: legal */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Política de Privacidad
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Términos de Servicio
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Libro de Reclamaciones
              </a>
              <span className="hidden sm:inline">·</span>
              <button
                onClick={onVerifyClick}
                className="hover:text-primary transition-colors underline underline-offset-2"
              >
                Verificar Credencial Aventoriana
              </button>
            </div>
            {/* Right: copyright */}
            <div className="text-center sm:text-right">
              <p>© {year} AVENTORIX S.A.C. — Lima, Perú</p>
              <p className="mt-0.5 opacity-70">
                RUC 20614050165: Empresa de tecnología registrada en Perú
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
