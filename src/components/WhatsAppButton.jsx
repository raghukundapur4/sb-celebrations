import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
