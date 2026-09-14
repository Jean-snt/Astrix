import { Building2, Layers, Mail, ShieldCheck, Home, BookOpen } from "lucide-react";
import { Link, useLocation } from "wouter";

interface MobileNavProps {
  onVerifyClick: () => void;
}

export function MobileNav({ onVerifyClick }: MobileNavProps) {
  const [location] = useLocation();

  const scrollTo = (id: string) => {
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-white/10">
      <div className="flex items-center justify-around px-2 py-2">
        <button
          onClick={() => scrollTo("inicio")}
          className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-muted-foreground hover:text-primary transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Inicio</span>
        </button>

        <button
          onClick={() => scrollTo("servicios")}
          className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-muted-foreground hover:text-primary transition-colors"
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] font-medium">Servicios</span>
        </button>

        <button
          onClick={() => scrollTo("nosotros")}
          className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-muted-foreground hover:text-primary transition-colors"
        >
          <Building2 className="w-5 h-5" />
          <span className="text-[10px] font-medium">Nosotros</span>
        </button>

        <button
          onClick={() => scrollTo("contacto")}
          className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="text-[10px] font-medium">Contacto</span>
        </button>

        <button
          onClick={onVerifyClick}
          className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-muted-foreground hover:text-primary transition-colors"
        >
          <ShieldCheck className="w-5 h-5" />
          <span className="text-[10px] font-medium">Verificar</span>
        </button>
      </div>
    </nav>
  );
}
