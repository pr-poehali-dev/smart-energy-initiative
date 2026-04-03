import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { useTheme } from "@/context/ThemeContext"
import Icon from "@/components/ui/icon"

export function Header() {
  const { isAuthenticated, user } = useAuth()
  const { theme, toggle } = useTheme()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <SberLogo />
          <span className="text-lg font-bold text-foreground tracking-tight">
            СберПэй<sup className="text-xs font-normal text-primary">™</sup>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "Продукты", href: "#features" },
            { label: "Тарифы", href: "#pricing" },
            { label: "Безопасность", href: "#security" },
            { label: "Контакты", href: "#contacts" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggle} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
            <Icon name={theme === "dark" ? "Sun" : "Moon"} size={18} />
          </button>

          {isAuthenticated ? (
            <Button onClick={() => navigate("/dashboard")} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5">
              <Icon name="LayoutDashboard" size={15} className="mr-2" />
              {user?.name.split(" ")[0]}
            </Button>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate("/login")} className="text-foreground rounded-full px-4">
                Войти
              </Button>
              <Button onClick={() => navigate("/register")} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5">
                Открыть счёт
              </Button>
            </>
          )}

          <button className="md:hidden p-2 text-muted-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border mt-4 pt-4 pb-2 px-6 flex flex-col gap-3">
          {["Продукты", "Тарифы", "Безопасность", "Контакты"].map((item) => (
            <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground py-1">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function SberLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#21A038" />
      <path d="M16 7C11.03 7 7 11.03 7 16C7 20.97 11.03 25 16 25C20.97 25 25 20.97 25 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 10L25 16L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
