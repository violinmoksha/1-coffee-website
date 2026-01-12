import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/1percentcoffee.jpeg"
              alt="Barista Waxy at 1% Coffee cart"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-muted-foreground tracking-widest uppercase text-sm mb-4 block">Meet the Barista</span>

            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">Waxy</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Behind every cup at 1% Coffee stands Waxy, a passionate barista dedicated to crafting the perfect
                espresso experience on the streets of Chiang Mai.
              </p>
              <p>
                Our mobile coffee cart brings specialty coffee culture right to you, featuring quality beans and
                professional equipment including our Nuova Simonelli espresso machine.
              </p>
              <p>
                Located in the heart of the trendy Nimman area, we believe that exceptional coffee {"doesn't"} need a
                fancy storefront—just skill, passion, and the best ingredients.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="text-3xl font-serif text-accent">100%</span>
                  <p className="text-sm text-muted-foreground mt-1">Arabica Beans</p>
                </div>
                <div>
                  <span className="text-3xl font-serif text-accent">Daily</span>
                  <p className="text-sm text-muted-foreground mt-1">Fresh Roasted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
