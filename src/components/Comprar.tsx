import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";

const pageOptions = [
  { label: "Landing page - $100000", value: 100000 },
  { label: "Dashboard - $135000", value: 135000 },
  { label: "Booking page - $135000", value: 135000 },
  { label: "E-commerce - $370000", value: 370000 },
  { label: "Esports & tournaments - $220000", value: 220000 },
  { label: "A gusto (sin precio)", value: 0 },
];

const maintenanceOptions = [
  { label: "Base - $25000", value: 25000 },
  { label: "Avanzado - $32000", value: 32000 },
  { label: "Pro - $47000", value: 47000 },
];

const impulsePrice = 25000;
const professionalPrice = 60000;

export function Comprar({ onAddToCart }: { onAddToCart: (summary: import('../App').CartSummary) => void }) {
  const [name, setName] = useState("");
  const [siteName, setSiteName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Transferencia bancaria");
  const [domainType, setDomainType] = useState(".COM");
  const [pageType, setPageType] = useState(pageOptions[0].value);
  const [maintenanceType, setMaintenanceType] = useState(maintenanceOptions[0].value);
  const [hasImpulse, setHasImpulse] = useState(false);
  const [hasProfessional, setHasProfessional] = useState(false);
  const [added, setAdded] = useState(false);

  const total = useMemo(() => {
    return pageType + maintenanceType + (hasImpulse ? impulsePrice : 0) + (hasProfessional ? professionalPrice : 0);
  }, [pageType, maintenanceType, hasImpulse, hasProfessional]);

  useEffect(() => {
    if (!added) return;
    const timer = window.setTimeout(() => setAdded(false), 2500);
    return () => window.clearTimeout(timer);
  }, [added]);

  const handleAddToCart = () => {
    onAddToCart({
      pageLabel: pageOptions.find((option) => option.value === pageType)?.label ?? "",
      maintenanceLabel: maintenanceOptions.find((option) => option.value === maintenanceType)?.label ?? "",
      impulse: hasImpulse,
      professional: hasProfessional,
      total,
      paymentMethod,
      siteName: `${siteName}.vercel.app`,
      name,
      email,
      whatsapp,
      domainType,
    });

    setName("");
    setSiteName("");
    setWhatsapp("");
    setEmail("");
    setPaymentMethod("Transferencia bancaria");
    setPageType(pageOptions[0].value);
    setMaintenanceType(maintenanceOptions[0].value);
    setHasImpulse(false);
    setHasProfessional(false);
    setDomainType(".COM");
    setAdded(true);
  };

  return (
    <section id="comprar" className="relative py-20 px-6 bg-background/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
            <ShoppingBag className="w-3 h-3" /> Comprar
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-6">
            Empieza tu proyecto con una <span className="text-gradient">compra clara</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            Completa el formulario para definir tu sitio, tus pagos y el mantenimiento.
          </p>
        </div>

        <motion.form
          onSubmit={(event) => event.preventDefault()}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl glass rounded-3xl border border-white/10 bg-background/70 p-8 shadow-2xl"
        >
          <div className="grid gap-6">
            <div className="grid gap-3">
              <label className="text-sm font-medium text-foreground">Nombre y apellido</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ej. Juan Pérez"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:bg-white/10"
              />
            </div>

            <div className="grid gap-3">
              <label className="text-sm font-medium text-foreground">Nombre de la página</label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <input
                  type="text"
                  value={siteName}
                  onChange={(event) => setSiteName(event.target.value)}
                  placeholder="mi-sitio"
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <span className="text-sm text-muted-foreground">.vercel.app</span>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-3">
                <label className="text-sm font-medium text-foreground">WhatsApp</label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(event.target.value)}
                  placeholder="+54 9 11 1234 5678"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:bg-white/10"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-sm font-medium text-foreground">Correo electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:bg-white/10"
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-3">
                <label className="text-sm font-medium text-foreground">Método de pago</label>
                <select
                  value={paymentMethod}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                  className="appearance-none w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:bg-white/10"
                >
                  <option style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}>Transferencia bancaria</option>
                  <option style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}>Tarjeta de débito</option>
                  <option style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}>Tarjeta de crédito</option>
                </select>
              </div>
              <div className="grid gap-3">
                <label className="text-sm font-medium text-foreground">Elegir página web a adquirir</label>
                <select
                  value={pageType}
                  onChange={(event) => setPageType(Number(event.target.value))}
                  className="appearance-none w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:bg-white/10"
                >
                  {pageOptions.map((option) => (
                    <option
                      key={option.label}
                      value={option.value}
                      style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-3">
                <label className="text-sm font-medium text-foreground">Elegir tipo de mantenimiento</label>
                <select
                  value={maintenanceType}
                  onChange={(event) => setMaintenanceType(Number(event.target.value))}
                  className="appearance-none w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:bg-white/10"
                >
                  {maintenanceOptions.map((option) => (
                    <option
                      key={option.label}
                      value={option.value}
                      style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-3">
                <label className="text-sm font-medium text-foreground">Plan impulso</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={hasImpulse}
                    onChange={(event) => setHasImpulse(event.target.checked)}
                    className="h-4 w-4 rounded-sm border-white/20 text-accent focus:ring-accent"
                  />
                  <span className="text-sm text-foreground">Adquirir plan impulso - $25000</span>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <label className="text-sm font-medium text-foreground">Plan profesional</label>
              <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/80 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={hasProfessional}
                    onChange={(event) => setHasProfessional(event.target.checked)}
                    className="h-4 w-4 rounded-sm border-white/20 text-accent focus:ring-accent"
                  />
                  <span className="text-sm text-foreground">Adquirir plan profesional - $60000</span>
                </label>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="grid gap-3">
                    <label className="text-sm font-medium text-foreground">Dominio profesional</label>
                    <select
                    value={domainType}
                    onChange={(event) => setDomainType(event.target.value)}
                    className="appearance-none w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:bg-white/10"
                  >
                    <option style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}>.COM</option>
                    <option style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}>.COM.AR</option>
                    <option style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}>.NET</option>
                    <option style={{ backgroundColor: 'rgb(15 23 42)', color: 'rgb(248 250 252)' }}>.ORG</option>
                  </select>
                  </div>
                  <div className="grid gap-3">
                    <label className="text-sm font-medium text-foreground">Precio del dominio</label>
                    <input
                      type="text"
                      disabled
                      value="$60000"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-foreground outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
              <div className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Total a pagar</div>
              <div className="mt-3 text-3xl font-semibold text-foreground">${total.toLocaleString('es-AR')}</div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-background transition ${
                added ? "bg-emerald-500 hover:bg-emerald-600" : "bg-accent hover:bg-accent/90"
              }`}
            >
              {added ? "Agregado al carrito" : "Agregar al carrito"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
