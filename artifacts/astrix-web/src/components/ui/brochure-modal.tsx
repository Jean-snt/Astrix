import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BrochureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BrochureModal({ open, onOpenChange }: BrochureModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-[#0a0a0a] border-white/10 text-white p-0 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-purple-500" />

        <div className="p-6 sm:p-8">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <DialogTitle className="text-xl font-display font-bold text-white">
                Dossier Técnico AVENTORIX S.A.C.
              </DialogTitle>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Presenta nuestra propuesta a tu directorio. El dossier incluye stack tecnológico,
              casos de éxito, esquemas de inversión y metodología de trabajo.
            </p>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                    Correo corporativo
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="cto@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-black font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-wait"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Preparando dossier...
                    </span>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Descargar Dossier (PDF)
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground/70">
                  Sin spam. Recibirás el PDF directamente en tu correo.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 space-y-4"
              >
                <div className="w-14 h-14 mx-auto bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                  <CheckCircle2 className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold mb-1">¡Dossier enviado!</h3>
                  <p className="text-sm text-muted-foreground">
                    Revisa tu bandeja de entrada en{" "}
                    <span className="text-primary font-medium">{email}</span>.
                  </p>
                </div>
                <a
                  href="https://wa.me/51991488770?text=Hola%20AVENTORIX%20S.A.C.%20Descargué%20el%20dossier%20y%20me%20gustaría%20agendar%20una%20reunión."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 hover:border-primary/40 rounded-full text-sm font-medium transition-all hover:text-primary"
                >
                  Agendar reunión ahora
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
