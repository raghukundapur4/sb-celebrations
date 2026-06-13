import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import GoogleReviewsCTA from '../components/GoogleReviewsCTA'
import { googleReviewLinks, siteConfig } from '../data/siteConfig'
import { heroImages } from '../data/imageAssets'
import { motion } from 'framer-motion'

const contactInfo = [
  { icon: Phone, label: 'Phone / WhatsApp', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  ...(siteConfig.email
    ? [{ icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` }]
    : []),
  { icon: MapPin, label: 'Address', value: siteConfig.address },
  { icon: Clock, label: 'Hours', value: 'Mon – Sun: 8:00 AM – 9:00 PM' },
]

export default function Contact() {
  return (
    <>
      <Hero
        badge="Get In Touch"
        title="Let's Plan Your Perfect Event"
        subtitle="Share your event details and our team will respond with a personalized quote within 24 hours."
        backgroundImage={heroImages.contact}
        fullScreen={false}
        secondaryCta={null}
        primaryCta={{ label: 'WhatsApp Us', to: `https://wa.me/${siteConfig.whatsapp}`, external: true }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Contact Info
              </span>
              <h2 className="heading-section mb-6">We'd Love to Hear From You</h2>
              <p className="mb-8 text-base leading-relaxed text-dark/60">
                Whether you're planning a wedding, corporate event, or intimate family gathering,
                our team is ready to help create an unforgettable culinary experience.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <info.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-dark/40">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-dark transition-colors hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-dark">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <div className="mt-8">
                <GoogleReviewsCTA />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-custom">
          <div className="overflow-hidden rounded-3xl shadow-premium">
            <iframe
              src={siteConfig.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.name} Location`}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
