import { LinkAccountsCard } from "@/components/feature-cards/LinkAccountsCard"
import { PaymentRolesCard } from "@/components/feature-cards/PaymentRolesCard"
import { SendFundsCard } from "@/components/feature-cards/SendFundsCard"

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Всё для ваших платежей</h2>
          <p className="text-muted-foreground">Мощные инструменты, которые работают за вас</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <LinkAccountsCard />
          <PaymentRolesCard />
          <SendFundsCard />
        </div>
      </div>
    </section>
  )
}
