import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { eventTypes, siteConfig } from '../data/siteConfig'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappMessage = encodeURIComponent(
      `Hi ${siteConfig.name}!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nEvent: ${formData.eventType}\nDate: ${formData.eventDate}\nGuests: ${formData.guests}\n\nMessage: ${formData.message}`
    )

    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-premium flex flex-col items-center p-8 text-center"
      >
        <CheckCircle size={48} className="mb-4 text-primary" />
        <h3 className="mb-2 font-heading text-xl font-semibold text-dark">
          Thank You!
        </h3>
        <p className="text-sm text-dark/60">
          Your inquiry has been sent via WhatsApp. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-6"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-premium space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-dark">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-dark/10 bg-light px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-dark">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-dark/10 bg-light px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-dark/10 bg-light px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="you@email.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="eventType" className="mb-1.5 block text-sm font-medium text-dark">
            Event Type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full rounded-xl border border-dark/10 bg-light px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="eventDate" className="mb-1.5 block text-sm font-medium text-dark">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-dark/10 bg-light px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="guests" className="mb-1.5 block text-sm font-medium text-dark">
          Number of Guests
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          className="w-full rounded-xl border border-dark/10 bg-light px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Estimated guest count"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-dark/10 bg-light px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Tell us about your event..."
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Inquiry
        <Send size={16} />
      </button>
    </form>
  )
}
