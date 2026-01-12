import Image from "next/image"
import { Coffee } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/1percentcoffee.jpeg"
          alt="1% Coffee cart with barista Waxy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Coffee className="w-8 h-8 text-primary-foreground" />
          <span className="text-primary-foreground/80 tracking-widest uppercase text-sm">Est. Chiang Mai</span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary-foreground mb-6 text-balance">
          1% Coffee
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Handcrafted specialty coffee from our mobile cart near Maya Mall, Nimman Road
        </p>

        <a
          href="#location"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-primary-foreground/90 transition-colors"
        >
          Find Us
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/60">
        <div className="w-px h-16 bg-primary-foreground/30 mx-auto mb-2" />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
