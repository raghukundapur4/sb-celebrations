import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import { services, packages } from '../data/servicesData'
import { faqs } from '../data/faqData'
import { heroImages } from '../data/imageAssets'
import { siteConfig } from '../data/siteConfig'

export default function Services() {
  return (
    <>
      <Hero
        badge="Our Services"
        title="Exceptional Catering For Every Celebration"
        subtitle="Comprehensive catering solutions tailored to your event, guest count, and culinary preferences."
        backgroundImage={heroImages.services}
        fullScreen={false}
        secondaryCta={{ label: 'View Packages', to: '#packages' }}
        primaryCta={{ label: 'Get a Quote', to: '/contact' }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="What We Offer"
            title="Our Catering Services"
            subtitle="Each service is designed with attention to detail, authentic flavors, and flawless execution."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Packages"
            title="Custom Catering Packages"
            subtitle="Flexible packages designed to match your event scale and budget."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-premium relative p-8 ${
                  pkg.featured
                    ? 'border-primary/30 ring-2 ring-primary/20'
                    : ''
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-1 font-heading text-xl font-semibold">{pkg.name}</h3>
                <p className="mb-4 text-2xl font-bold text-primary">{pkg.price}</p>
                <p className="mb-6 text-sm text-dark/60">{pkg.description}</p>
                <ul className="space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-dark/70">
                      <Check size={16} className="shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle={`Everything you need to know about booking with ${siteConfig.name}.`}
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
