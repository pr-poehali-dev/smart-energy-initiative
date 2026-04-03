import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-20 pb-14 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 py-2 text-sm px-4">
        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">НОВИНКА</span>
        <span className="text-muted-foreground">Переводы по СБП без комиссии</span>
        <Icon name="ArrowUpRight" size={14} className="text-muted-foreground" />
      </div>

      <h1 className="mb-5 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
        Платежи, которым{" "}
        <span className="text-primary">доверяет бизнес</span>
      </h1>

      <p className="mb-10 max-w-xl text-muted-foreground text-lg">
        Мгновенные переводы, защита от мошенничества и полный контроль над финансами — всё в одном сервисе.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          onClick={() => navigate("/register")}
          className="rounded-full bg-primary px-8 py-6 text-base hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
        >
          Открыть счёт бесплатно <Icon name="ArrowUpRight" size={18} className="ml-2" />
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate("/login")}
          className="rounded-full border-border bg-transparent text-foreground hover:bg-muted px-8 py-6 text-base"
        >
          <Icon name="Play" size={16} className="mr-2 fill-primary text-primary" /> Войти в кабинет
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-8 sm:gap-16">
        {[
          { value: "10M+", label: "клиентов" },
          { value: "₽2 трлн", label: "переведено" },
          { value: "99.9%", label: "надёжность" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-primary">{item.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
