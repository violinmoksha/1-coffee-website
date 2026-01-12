import { MapPin, Phone, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-muted-foreground tracking-widest uppercase text-sm mb-4 block">Visit Us</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">Location & Hours</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Address */}
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-medium mb-3">Address</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Near Maya Mall
              <br />
              Nimmanahaeminda Road, Suthep
              <br />
              Mueang Chiang Mai District
              <br />
              Chiang Mai 52100, Thailand
            </p>
            <a
              href="https://maps.google.com/?q=Maya+Mall+Chiang+Mai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-accent hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-medium mb-3">Phone</h3>
            <a href="tel:+66843659969" className="text-muted-foreground text-sm hover:text-accent transition-colors">
              +66 84 365 9969
            </a>
            <p className="text-muted-foreground text-xs mt-2">Call or message for availability</p>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-medium mb-3">Hours</h3>
            <p className="text-muted-foreground text-sm">
              Open Daily
              <br />
              Check our sign for current hours
            </p>
            <p className="text-muted-foreground text-xs mt-2">Weather dependent</p>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-secondary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0!2d98.9676!3d18.7998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a7e0!2sMaya+Lifestyle+Shopping+Center!5e0!3m2!1sen!2sth!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="1% Coffee Location near Maya Mall"
          />
        </div>
      </div>
    </section>
  )
}
