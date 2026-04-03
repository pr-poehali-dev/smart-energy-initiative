import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CtaSection() {
  const navigate = useNavigate()

  return (
    <section id="contacts" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Начните прямо сейчас
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Откройте счёт за 2 минуты. Первый месяц бесплатно, без привязки карты.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => navigate("/register")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold"
            >
              Открыть счёт <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-border"
              onClick={() => navigate("/login")}
            >
              Уже есть аккаунт
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6 flex items-center justify-center gap-1">
            <Icon name="Lock" size={12} /> Данные защищены · Лицензия ЦБ РФ · 152-ФЗ
          </p>
        </div>
      </div>
    </section>
  )
}
