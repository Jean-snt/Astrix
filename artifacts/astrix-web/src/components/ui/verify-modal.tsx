import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ShieldCheck, Search, BadgeCheck, XCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface CertificateData {
  id: string;
  nombre?: string;
  nombre_completo?: string;
  dni?: string;
  area?: string;
  area_core?: string;
  horas?: string | number;
  horas_acumuladas?: string | number;
  logros?: string[];
  estado?: string;
}

interface VerifyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VerifyModal({ open, onOpenChange }: VerifyModalProps) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CertificateData | null>(null);
  const [error, setError] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsLoading(true);
    setError(false);
    setData(null);

    try {
      const response = await fetch(`https://api.astrix.software/v1/certificados/${encodeURIComponent(inputValue.trim())}`);
      if (!response.ok) {
        throw new Error("Not found");
      }
      const json = await response.json();
      const certData = json.data || json;
      setData(certData);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetModal = () => {
    setInputValue("");
    setData(null);
    setError(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!open) {
      // Reset modal state when closed
      setTimeout(resetModal, 200);
    }
  }, [open]);

  const maskDni = (dni?: string) => {
    if (!dni) return "********";
    const str = String(dni);
    if (str.length < 2) return str + "******";
    return str.substring(0, 2) + "******";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px] bg-[#080808] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <ShieldCheck className="w-5 h-5 text-primary" />
            Verificar Credencial Astriana
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Ingresa el código único del certificado para validar su autenticidad.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {!data && !error && !isLoading && (
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Código: AST-2026-PR-0042"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 font-mono text-sm transition-all"
                  required
                  data-testid="input-certificate-code"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="button-verify-certificate"
              >
                Verificar
              </button>
            </form>
          )}

          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-12 w-full bg-white/5 rounded-lg" />
              <Skeleton className="h-12 w-full bg-white/5 rounded-lg" />
              <Skeleton className="h-12 w-full bg-white/5 rounded-lg" />
            </div>
          )}

          {error && (
            <div className="p-6 rounded-lg border border-destructive/20 bg-destructive/5 text-center">
              <div className="w-12 h-12 mx-auto bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Certificado no encontrado</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Certificado no encontrado o revocado por la administración general.
              </p>
              <button
                onClick={resetModal}
                className="text-sm text-primary hover:text-white transition-colors"
                data-testid="button-retry-verification"
              >
                Intentar nuevamente
              </button>
            </div>
          )}

          {data && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div>
                    <h3 className="font-display font-bold text-sm tracking-widest text-white">AVENTORIX S.A.C.</h3>
                    <p className="text-xs text-primary tracking-wide uppercase font-mono">Credencial Autenticada</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-semibold uppercase">
                    <BadgeCheck className="w-3 h-3" />
                    VERIFICADO
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-mono mb-1">Nombre</p>
                    <p className="text-sm font-medium text-white">{data.nombre || data.nombre_completo || "No especificado"}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide font-mono mb-1">DNI</p>
                      <p className="text-sm font-mono text-white/90">{maskDni(data.dni)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide font-mono mb-1">Horas</p>
                      <p className="text-sm font-mono text-white/90">{data.horas || data.horas_acumuladas || "0"} hrs</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-mono mb-1">Área Core</p>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-medium text-white">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {data.area || data.area_core || "Ingeniería"}
                    </div>
                  </div>

                  {data.logros && data.logros.length > 0 && (
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide font-mono mb-2">Logros</p>
                      <ul className="space-y-1.5">
                        {data.logros.map((logro, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-white/80">
                            <span className="text-primary text-sm leading-none">•</span>
                            <span className="leading-relaxed">{logro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={resetModal}
                className="w-full py-2 text-sm text-primary hover:text-white transition-colors uppercase tracking-wide font-mono"
                data-testid="button-new-search"
              >
                Nueva Consulta
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
