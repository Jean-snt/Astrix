import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Layers, Cpu, Users, FolderOpen, Mail, ShieldCheck, ChevronRight, ChevronLeft } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AstrixLogo } from "@/components/ui/astrix-logo";

interface SidebarProps {
  onVerifyClick: () => void;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  sectionId: string;
  badge?: string;
  isExternal?: boolean;
  externalUrl?: string;
}

export function Sidebar({ onVerifyClick }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");

  const navItems: NavItem[] = [
    { icon: <Building2 className="w-5 h-5" />, label: "Nosotros", sectionId: "nosotros" },
    { icon: <Layers className="w-5 h-5" />, label: "Servicios", sectionId: "servicios" },
    { icon: <Cpu className="w-5 h-5" />, label: "Ecosistema Tecnológico", sectionId: "ecosistema" },
    { icon: <Users className="w-5 h-5" />, label: "Cultura Astriana", sectionId: "cultura" },
    { icon: <FolderOpen className="w-5 h-5" />, label: "Proyectos", sectionId: "proyectos", badge: "Próximamente" },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: "Contacto Directo", 
      sectionId: "contacto",
      isExternal: true,
      externalUrl: "https://wa.me/51991488770?text=Hola%20Aventorix%20S.A.C.%20Deseo%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20software."
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ["inicio", "nosotros", "servicios", "ecosistema", "cultura", "areas-core", "verificacion"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.isExternal && item.externalUrl) {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer");
      return;
    }

    const element = document.getElementById(item.sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isExpanded ? 280 : 60 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed left-0 top-0 h-screen bg-[#050505] border-r border-white/10 z-40 hidden sm:flex flex-col"
      data-testid="sidebar-navigation"
    >
      {/* Top Header - Astrix Logo & Toggle */}
      <div className="h-20 flex items-center justify-between px-3 border-b border-white/10 overflow-hidden">
        <a href="/" className="flex items-center overflow-hidden">
          <AstrixLogo showText={isExpanded} size="sm" />
        </a>
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-white flex-shrink-0"
          data-testid="button-toggle-sidebar"
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.sectionId;
            
            const button = (
              <button
                onClick={() => handleNavClick(item)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all group relative ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
                data-testid={`nav-item-${item.sectionId}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="flex-shrink-0">{item.icon}</span>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm font-medium whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {isExpanded && item.badge && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono uppercase tracking-wider"
                  >
                    {item.badge}
                  </motion.span>
                )}
              </button>
            );

            if (!isExpanded) {
              return (
                <li key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {button}
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-black border-white/10">
                      <p className="text-sm">{item.label}</p>
                      {item.badge && (
                        <p className="text-xs text-muted-foreground mt-1">{item.badge}</p>
                      )}
                    </TooltipContent>
                  </Tooltip>
                </li>
              );
            }

            return <li key={index}>{button}</li>;
          })}
        </ul>
      </nav>

      {/* Footer - Verify credential & Brand */}
      <div className="border-t border-white/10 p-3 space-y-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onVerifyClick}
              className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-white/5 transition-all group"
              data-testid="button-verify-credential-sidebar"
            >
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-medium whitespace-nowrap overflow-hidden"
                  >
                    Verificar Credencial
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </TooltipTrigger>
          {!isExpanded && (
            <TooltipContent side="right" className="bg-black border-white/10">
              <p className="text-sm">Verificar Credencial</p>
            </TooltipContent>
          )}
        </Tooltip>

        <div className="pt-2 border-t border-white/5 flex items-center justify-center overflow-hidden">
          <AstrixLogo showText={isExpanded} size="sm" />
        </div>
      </div>
    </motion.aside>
  );
}
