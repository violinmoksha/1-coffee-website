import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Coffee className="w-6 h-6" />
            <span className="font-serif text-2xl">1% Coffee</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70 text-sm">Specialty street coffee in Chiang Mai</p>
            <a
              href="tel:+66843659969"
              className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
            >
              +66 84 365 9969
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} 1% Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
