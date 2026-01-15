export function MenuSection() {
  const drinks = [
    { name: "Espresso", price: "50฿", description: "Rich, bold, and pure" },
    { name: "Americano", price: "50฿", description: "Espresso with hot water" },
    { name: "Latte", price: "50฿", description: "Smooth espresso with steamed milk" },
    { name: "Cappuccino", price: "50฿", description: "Equal parts espresso, milk, and foam" },
    { name: "Mocha", price: "50฿", description: "Espresso with chocolate and milk" },
    { name: "Cold Brew", price: "60฿", description: "Smooth, slow-steeped coffee" },
  ]

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-muted-foreground tracking-widest uppercase text-sm mb-4 block">Our Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">Menu</h2>
        </div>

        <div className="space-y-0">
          {drinks.map((drink, index) => (
            <div key={drink.name} className="flex items-baseline justify-between py-6 border-b border-border group">
              <div className="flex-1">
                <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{drink.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{drink.description}</p>
              </div>
              <span className="text-lg font-serif ml-4">{drink.price}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          Prices may vary. Ask Waxy about seasonal specials!
        </p>
      </div>
    </section>
  )
}
