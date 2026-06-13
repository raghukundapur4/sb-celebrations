import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="card-premium overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-5 text-left"
          >
            <span className="pr-4 font-heading text-base font-semibold text-dark sm:text-lg">
              {faq.question}
            </span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-primary transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-dark/60">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
