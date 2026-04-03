import Icon from "@/components/ui/icon"

const partners = [
  { name: "Газпромбанк", icon: "Building2" },
  { name: "Альфа-Банк", icon: "CreditCard" },
  { name: "ВТБ", icon: "Banknote" },
  { name: "Тинькофф", icon: "Wallet" },
  { name: "Райффайзен", icon: "ShieldCheck" },
  { name: "Росбанк", icon: "CircleDollarSign" },
  { name: "Россельхоз", icon: "Landmark" },
]

export function PartnersSection() {
  return (
    <section className="py-10 px-4 border-y border-border">
      <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">Работаем с ведущими банками России</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Icon name={partner.icon} size={16} fallback="Building2" />
            <span className="text-sm font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
